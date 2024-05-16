# Rejoin Mode

## 定义

该功能是Milesight自己定义的，仅用于星纵的**节点设备**，和使用什么网关或者NS没有关系。
换言之，只要节点设备支持Rejoin Mode，无论使用什么NS或者网关都可以使用。

重新入网模式，该功能的核心是让节点设备检测到自己已经离线，从而重启设备强制重新入网，避免一直处于链路断开的情况。

重新入网机制的核心是定期发送Link_Check_Request这个MAC指令进行链路检测。

Link_Check_Request是LoRa Alliance在[LoRaWAN specification v1.0.3](https://lora-alliance.org/wp-content/uploads/2020/11/lorawan1.0.3.pdf)定义的，内容如下：
> **5.1 Link Check commands (LinkCheckReq, LinkCheckAns)**(page.23)  
> With the ***LinkCheckReq*** command, an end-device MAY validate its connectivity with the network. The command has no payload.  
> When a ***LinkCheckReq*** is received by the network server via one or multiple gateways, it responds with a ***LinkCheckAns*** command.
> |**Size (bytes)**|1|1|
> |---|---|---|
> |**LinkCheckAns Payload**|Margin|GwCnt|  
> 
> The demodulation margin (**Margin**) is an 8-bit unsigned integer in the range of 0..254 indicating the link margin in dB of the last successfully received ***LinkCheckReq*** command. A value of “0” means that the frame was received at the demodulation floor (0 dB or no margin)while a value of “20”, for example, means that the frame reached the gateway 20 dB above the demodulation floor. Value “255” is reserved.The gateway count (**GwCnt**) is the number of gateways that successfully received the last ***LinkCheckReq*** command.  
所以这个NS的返回值是最近一次收到LinkCheckReq的dB，以及周围的成功收到LinkCheckReq的网关数量。


## 机制

链路监测周期：  
周期开始时等待跟随上行。  
入网成功后立马开启首个链路监测周期，上行链路检测包后立即结束，后续所有的周期都是上一个周期结束后等待25到35分钟后开启。    
当该周期开启后，链路检测包会开始等待，直到随下一个上行包一起上传。    
*在某些版本会触发`空包`上传，绝大多数都仅跟随上行包。例如智能按钮，但是由于空包上行特征过于耗电，所以在后续迭代中都被陆续修复。  
*上行包可以是周期包，也可能是触发告警包。  
上行后需要在设备开启的两个接受窗口`RX1`和`RX2`收到链路检测确认包。

上行包发包后的两个窗口内：
没收到ACK，则计数+1，周期结束
    若计数达到设定最大发包数N，则立即重启并重新入网。（会不会存在不能重启的情况，有没有解决方案）
收到了ACK，则计数清零，周期结束

周期结束后：
会等待30min±5min的时间后再次开启链路检测周期。
±5分钟的随机值目的是防止同时发包导致的信道堵塞。

若要尽快检测到设备离线，则可以：  
1. 把发包数调小，最小值为4.
2. 把上报周期调小，调整到30分钟以内（因为链路检测周期是30分钟）  
如此调整后，最快可以2小时检测到设备离线。
若客户仍觉得过长，可以通过固件定制的方式修改
1. 发包数最小调整到1.
2. 链路监测周期小于30分钟，如调整为5或10分钟
测试时可以手动重启设备，则会立即开启链路检测周期。

## 计算最小重新入网时间
Source:Milesight Technical Support Article [here](https://support.milesight-iot.com/support/solutions/articles/73000611650-how-rejoin-mode-work-on-milesight-lorawan-nodes)

Parameter definition:

|Parameters|Explanation|Value|
|---|---|---|
|TR|Reporting interval of uplink|User Configurable|
|TL|Link detection event interval|A random value among 25~35 mins|
|N|Number of detection|User Configurable|

According to above mechanism, the time for rejoin mode to take effect can be calculated as below:

+ TR>35 minutes: TR* (N+1)
+ 25≤TR≤35 minutes: max time = 2*TR*(N+1), min time=TR* (N+1)
+ TR<25 minutes: (TL+TR-TL%TR)*(N+1)，TL=25~35

 

Example:

When reporting interval is 40 minutes and number of detection is 4, the max time to device rejoin is 40* (4+1)=200 minutes.

When reporting interval is 10 minutes and number of detection is 4, the max time to device rejoin is (35+10-35%10)*(4+1)=200 minutes, the min time is (25+10-25%10)*(4+1)=150 minutes.

 

Note
1. Milesight devices will send LinkCheckReq packets with Fport=0. This can be used to differ MAC packets and data uplinks.
2. When you connect Milesight LoRaWAN end devices to Milesight IoT Cloud or gateway embedded network server, the gateway will not display the LinkCheckReq packet and occupy the fcnt.
3. When device reboots or rejoin mode takes effect, it will send join requests to network server according to this interval: every 15s on first 32 packets, every 1 minute on 33~96 packets and every reporting interval on the last packets.

---

Note: 如果因为重传机制导致丢包，在critical场景建议使用ABP方式，而非OTAA

Reference:

https://support.milesight-iot.com/support/solutions/articles/73000611650-how-rejoin-mode-work-on-milesight-lorawan-nodes