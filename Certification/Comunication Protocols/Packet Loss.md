要想减少丢包，主要要确保网络环境要好，比如设备的信号强度，信噪比，以及信号的拥挤程度。其次可以通过配置启用一些机制，来确保链路的连通状态，数据包的成功接收。

1. 节点要有数据（传感器探头）
2. 节点射频模块要正常（LoRa模块）
3. 节点和网关要连通（网络环境）
4. 网关的接受模块要正常（LoRa模块）
5. 网关的包转发功能是否正常（网关包转发）
6. 网关包转发协议是否正确配置（目的地是否ping的通）
7. NS本身的接收是否正常（NS本身也有可能抽风）

主要的排查思路就是对照实验。


```mermaid
sequenceDiagram
    participant N as Node
    participant GW as Gateway
    participant NS as Network Server

    critical End Node Uplink to LNS
        N->>NS: Confirm Mode On
        Note right of NS:入网时协商开启上行确认包
        NS->>N: OK
        N->>GW: Uplink
        GW->>NS: Packet Forward
        NS->>N: ACK

    option Node cannot reach Gateway:
        N--x GW: Uplink
        Note right of NS: 节点不发包<br>或者节点发了包网关没收到
        Note right of NS: 排查内置NS下网关是否能收到上行包

    option Gateway cannot reach NS:
        N->>GW: Uplink
        GW--x NS: Packet Forward
        Note right of NS: 网关的确收到节点的上行包<br>但是未能包转发到NS上
        Note right of NS: 是网关没发出去（射频模块问题）？<br>发出去了NS没收到（地址填写问题）？
        Note right of NS: 排查包转发目的地填写参数

    option NS did not sent to GW:
        N->>GW: Uplink
        GW->> NS: Packet Forward
        NS--x GW: ACK
        Note right of NS: 是NS没有下行，还是下行未被GW接受

    option Gateway cannot reach End Node:
        N-->>GW: Uplink
        GW-->> NS: Packet Forward
        NS--x N: ACK

    end

```

