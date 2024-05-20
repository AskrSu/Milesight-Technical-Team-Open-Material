# Brazilian Certification Anatel

Thank you for reading this document. 

If you need any more content, please reach us via iot.support@milesight.com

## AU915 is used in Brazil

Frequency Plan: AU915-928
Regulatory Documents: National Telecommunications Agency (ANATEL) Resolution No. 680, from June 27, 2017 - Portuguese only, Article 10  
National Telecommunications Agency (ANATEL) Act No. 14448, from December 4, 2017 - Portuguese only Section 10.3

### Sensor Uplink for AU915

Based on the LoRaWAN definition and requirement, the end nodes or sensors will use the following frequency to transmit data.

Frequency and Data Rate

|Frequency|Data Rate(DR) and Bandwidth(BW)|
|---|---|
|916.8|SF7BW125 to SF12BW125|
|917.0|SF7BW125 to SF12BW125|
|917.2|SF7BW125 to SF12BW125|
|917.4|SF7BW125 to SF12BW125|
|917.6|SF7BW125 to SF12BW125|
|917.8|SF7BW125 to SF12BW125|
|918.0|SF7BW125 to SF12BW125|
|918.2|SF7BW125 to SF12BW125|
|917.5|SF8BW500|

Data Rate and Bandwidth

|Data Rate|Configuration|Indicative Physical Bit Rate\[bit/sec\]|
|---|---|---|
|0|LoRa:SF12/125kHz|250|
|1|LoRa:SF11/125kHz|440|
|2|LoRa:SF10/125kHz|980|
|3|LoRa:SF9/125kHz|1760|
|4|LoRa:SF8/125kHz|3125|
|5|LoRa:SF7/125kHz|5470|
|6|LoRa:SF8/500kHz|12500|
|7|RFU||
|8|LoRa:SF12/500kHz|980|
|9|LoRa:SF11/500kHz|1760|
|10|LoRa:SF10/500kHz|3900|
|11|LoRa:SF9/500kHz|7000|
|12|LoRa:SF8/500kHz|12500|
|13|LoRa:SF7/500kHz|21900|
|14..15|RFU||

Reference:[LoRaWAN Region 1.0.3 Parameters, pg.38](https://lora-alliance.org/wp-content/uploads/2020/11/lorawan_regional_parameters_v1.0.3reva_0.pdf)

To perform bandwith 125khz test, please use DR0 to DR5 for SF12 to SF7 test.

To perform bandwith 500khz test, please use DR6, and DR8 to DR13 for SF12 to SF7 test.

### Gateway Downlink for AU915

|Frequency|Data Rate(DR) and Bandwidth(BW)|
|---|---|
|923.3|SF7BW500 to SF12BW500 (RX1)|
|923.9|SF7BW500 to SF12BW500 (RX1)|
|924.5|SF7BW500 to SF12BW500 (RX1)|
|925.1|SF7BW500 to SF12BW500 (RX1)|
|925.7|SF7BW500 to SF12BW500 (RX1)|
|926.3|SF7BW500 to SF12BW500 (RX1)|
|926.9|SF7BW500 to SF12BW500 (RX1)|
|927.5|SF7BW500 to SF12BW500 (RX1)|
|923.3|SF12BW500 (RX2)|

## An Example of sensor EM400-MUD

We are using the CertificationTools software for execute the LAB procedures.
In general way, the EM400 must execute de test procedure with a bandwidth 500 Khz, and the time transmission must be down to 140ms using the SF between 7 and 12.

You can use the v3 version method, the fix frequency tool with "扩频因子" which is Data Rate DR0 to DR5 for SF12 to SF7 test, or use DR6, and DR8 to DR13 for SF12 to SF7 test.

You can use the v2 version method, use command `fixed_enable -freq 902300000` with corresponding `-dr 6` or others. 