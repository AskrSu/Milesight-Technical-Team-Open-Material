# 入网机制

每台设备的入网机制都略有不同，但是大体上都是用SF去发射入网请求包，尝试若干次后调整频率继续尝试，直到没电为止。

1. 查询设备的软件详设，即详细设计，查看机制
2. 查询设备的channel plan

例如AM319

支持ABP和OTAA入网。ABP模式下上电后默认入网，OTAA入网规则如下：

- 小于32次，每次间隔15s±3s
- 大于32次小于64次，间隔60s
- 大于64次，每次间隔3600s或者周期上报触发入网
  - 若周期包间隔为1080分钟（一天），则后续每隔一天发一个入网包

SF等级取决于地区，具体参照《LoRa地区参数总结》中的入网速率：

- CN470/EU868/IN865/RU864/KR920默认DR2（SF10,125kHz）
- US915/AU915固定8+1，
  - US915：DR0（SF10,125kHz），DR4（SF8,500kHz）
  - AU915：DR2（SF10,125kHz），DR6（SF8,500kHz）
- AS923/-2/-3：固定DR2（SF10,125kHz）