# Korean Certification KC

Thank you for reading this document. 

If you need any more content, please reach us via iot.support@milesight.com

## KR920 is used in Korea

In Korean, the KR920 channel plan is used, you can refer to the below table to find the corresponding power limit with the frequency point.  

### KC Certification Requirement

|Channel|A reference value|Note|
|---|---|---|
|1,3,4,6,7,9,10,12,13,15,16,18|Less than 3mW||
|2,5,8,11,14,17,19,20,21,22,23,24,25|Less than 10mW||
|26,27,28,29,30,31,32|Less than 25mW||
|20,21,22,23,24,25,26,27,28,29,30,31,32|Less than 200mW|*outdoor stationary point-to-point wireless device only|

However, the radio wave format is NON and the frequency sweep method is less than 3mW for device.

|Channel|Frequency|Note|
|---|---|---|
|1|917.1|Less than 3mW|
|2|917.3|Less than 10mW|
|3|917.5|Less than 3mW|
|4|917.7|Less than 3mW|
|5|917.9|Less than 10mW|
|6|918.1|Less than 3mW|
|7|918.3|Less than 3mW|
|8|918.5|Less than 10mW|
|9|918.7|Less than 3mW|
|10|918.9|Less than 3mW|
|11|919.1|Less than 10mW|
|12|919.3|Less than 3mW|
|13|919.5|Less than 3mW|
|14|919.7|Less than 10mW|
|15|919.9|Less than 3mW|
|16|920.1|Less than 3mW|
|17|920.3|Less than 10mW|
|18|920.5|Less than 3mW|
|19|920.7|Less than 10mW|
|20|920.9|Less than 10mW<br>Less than 200mW*|
|21|921.1|Less than 10mW<br>Less than 200mW*|
|22|921.3|Less than 10mW<br>Less than 200mW*|
|23|921.5|Less than 10mW<br>Less than 200mW*|
|24|921.7|Less than 10mW<br>Less than 200mW*|
|25|921.9|Less than 10mW<br>Less than 200mW*|
|26|922.1|Less than 25mW<br>Less than 200mW*|
|27|922.3|Less than 25mW<br>Less than 200mW*|
|28|922.5|Less than 25mW<br>Less than 200mW*|
|29|922.7|Less than 25mW<br>Less than 200mW*|
|30|922.9|Less than 25mW<br>Less than 200mW*|
|31|923.1|Less than 25mW<br>Less than 200mW*|
|32|923.3|Less than 25mW<br>Less than 200mW*|

Please note that the power has 2 unit, the dbm and mW, the calculation is as below:

dBm=10*lg(mW)

There is a quick sheet for your reference:

|dbm|mW|
|---|---|
|0|1|
|4.8|3|
|10|10|
|14|25|
|23|200|

### LoRa Alliance Technical Speicification v1.0.3 Definition of LoRaWAN KR920

Noted that only channel **20 to 32** should be tested in LoRa compliance channel plan, and the 10db of power output is the limit. You can check on: [LoRaWAN Region 1.0.3 Parameters, pg.53](https://lora-alliance.org/wp-content/uploads/2020/11/lorawan_regional_parameters_v1.0.3reva_0.pdf)

|Center frequency (MHz)|Bandwidth (kHz)|Max EIRP<br>output power(dBm)<br>For end-device|Max EIRP<br>output power(dBm)<br>For gateway|
|---|---|---|---|
|920.9|125|10|23|
|921.1|125|10|23|
|921.3|125|10|23|
|921.5|125|10|23|
|921.7|125|10|23|
|921.9|125|10|23|
|922.1|125|14|23|
|922.3|125|14|23|
|922.5|125|14|23|
|922.7|125|14|23|
|922.9|125|14|23|
|923.1|125|14|23|
|923.3|125|14|23|

|DataRate|Configuration|Indicative physical bit rate \[bit/s\]|
|---|---|---|
|0|LoRa: SF12 / 125 kHz|250|
|1|LoRa: SF11 / 125 kHz|440|
|2|LoRa: SF10 / 125 kHz|980|
|3|LoRa: SF9 / 125 kHz|1760|
|4|LoRa: SF8 / 125 kHz|3125|
|5|LoRa: SF7 / 125 kHz|5470|
|6..15|RFU||

|TXPower|Configuration (EIRP)|
|---|---|
|0|Max EIRP|
|1|Max EIRP – 2dB|
|2|Max EIRP – 4dB|
|3|Max EIRP – 6dB|
|4|Max EIRP – 8dB|
|5|Max EIRP – 10dB|
|6|Max EIRP – 12dB|
|7|Max EIRP – 14dB|
|8..15|RFU|

## Gateway

For Gateways, If you want to test the RF power test with `Frequency Channel = 920.9`, with `SF=7` to `SF=12`, `bandwidth = 125khz`.

So by the LoRa definition, power should be within 23db, and data rate from DR0 to DR5, means SF12 to SF7.

Take SF8 for example, the data rate is DR4.

Refer to the command: `test_loragw_hal_tx -c 0 -r 1250 -f 920.9 -m LORA -s 4 -b 125 -n 10 -z 255 --ant OTXRX -p 4.8`

Check the `-p` parameter, it is dbm should be placed.

So for the limit of 3mW, is equivalant as 4.8dbm, so you should use `-p 4.8` or `-p 4` to test this frequency point.

You can check [here](../Gateway/Milesight%20Gateway%20LoRa%20SoP.md) for further information. 

## Sensors

For Sensors, refer to the command in method 2: `fixed_enable -freq 920100000` with parameter `-power` where the power is the TX power parameter, you should select based on the table below:


For KR920, the TX power setting has below relation:
|TX Power parameter|Power in dbm|Power in mW|
|---|---|---|
|0|14|25|
|1|12|16|
|2|10|10|
|3|8|6|
|4|6|4|
|5|4|2.5|
|6|2|1.6|
|7|0|1.0|

So for the minimum limit of 3mW requirement for the example 920.1, you can use: `fixed_enable -freq 920100000 -power 5` since power 5 is in 2.5mW.

This method could be somehow in accurate, please try in lower power sometimes.

You can check [here](../Sensor/Sensor%20Certificatipm%20SOP.md) for further information. 