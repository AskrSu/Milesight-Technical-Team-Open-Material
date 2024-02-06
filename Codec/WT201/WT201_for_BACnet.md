# How to use WT201 connect to BACnet?

使用Milesight网关连接BACnet，需要将传感器数据创建为BMS的BACnet对象，并且在对象中选择数据类型，比方说是Binary-Input类型，或者Analog-Input。

某些传感器的数据类型为多状态（Multi-State）时，例如：
WT201智能恒温器的设备存在“制冷”，“制热”，“自动”，“紧急制热”，“通风”几种状态。

但是当前Milesight的网关受BACnet协议限制，不支持Multi-State类型数据通信，因此无法上下行设别的状态，也不支持嵌套，因此无法上下行schedule。

上行将在2024Q1解决，将会在decoder中将Multi-State类型映射为AI类型，通过创建AI对象上行到BMS，等后续四月份后网关迭代将会支持多状态模式。
下行将在4月份解决，目前主要问题在WT201的IPSO修改温度时需要同时修改模式，即一条IPSO指令会同时修改“目标温度”和“温控模式”，而BACnet的对象目前仅支持一条一条下行，无法一次下行控制两个参数。
后续将会将IPSO中支持。
