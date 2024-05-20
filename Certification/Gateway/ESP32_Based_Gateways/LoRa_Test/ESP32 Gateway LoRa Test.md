# How to do LoRa Frequency Test on ESP32 Based like UG63v2 and SG50?

[Click me](http://ursalink-resource-center.oss-us-west-1.aliyuncs.com/Gateway_RFtest/ESP32/LoRa/Flash_Download_Tool.zip)

## Pre-test preparation

### UG63-V2

Remove the screws from the housing.

![img1](http://ursalink-resource-center.oss-us-west-1.aliyuncs.com/Gateway_RFtest/ESP32/LoRa/img/1.png)

Press the clasp inward to remove the top cover.

![img2](http://ursalink-resource-center.oss-us-west-1.aliyuncs.com/Gateway_RFtest/ESP32/LoRa/img/2.png)

Success!

![img3](http://ursalink-resource-center.oss-us-west-1.aliyuncs.com/Gateway_RFtest/ESP32/LoRa/img/3.jpg)

### SG50

Please use typeC power supply or battery power (battery may be dead). When you use it, you can connect the power cable of the solar panel, the way to judge whether the device has started or not: the system light of the device is on, and the green light is on.


![img4](http://ursalink-resource-center.oss-us-west-1.aliyuncs.com/Gateway_RFtest/ESP32/LoRa/img/4.png)

## Enter LoRa constant frequency mode

Use USB Type-C to connect the device to the test computer.

### For UG63-V2

Keep holding button 1, then short press button 2 to enter the constant frequency test mode.

![img5](http://ursalink-resource-center.oss-us-west-1.aliyuncs.com/Gateway_RFtest/ESP32/LoRa/img/5png.png)

### For SG50

To enter the frequency test, make sure the device is not powered. Then long press the button and power the device for a while. Release the button , the device will enter the mode.

![img6](http://ursalink-resource-center.oss-us-west-1.aliyuncs.com/Gateway_RFtest/ESP32/LoRa/img/6.png)

How to make sure the device is not powered:

If the DC cable of solar panel is not connected, you can use type-C to power the device.

|按键处|Press Button|
|---|---|
|Type-C接口|Type-C Interface|

![img7](http://ursalink-resource-center.oss-us-west-1.aliyuncs.com/Gateway_RFtest/ESP32/LoRa/img/7.png)

If the device is connected to the DC cable of solar panel, the device will be powered even if you unplugged the type-C, so you can rotate remove the DC cable of solar to unpowered the device.

![img8](http://ursalink-resource-center.oss-us-west-1.aliyuncs.com/Gateway_RFtest/ESP32/LoRa/img/8.png)

## Open the constant frequency test software

File:Flash_Download_Tool(LoRa Frequency Test)\Flash_Download_Tool\flash_download_tool_3.9.4.exe

![img9](http://ursalink-resource-center.oss-us-west-1.aliyuncs.com/Gateway_RFtest/ESP32/LoRa/img/9.png)
![img10](http://ursalink-resource-center.oss-us-west-1.aliyuncs.com/Gateway_RFtest/ESP32/LoRa/img/10.png)

Choose `ChipType = ESP32-S3;`

`WorkMode = Factory;`

Clikc `OK` to enter the software.

![img11](http://ursalink-resource-center.oss-us-west-1.aliyuncs.com/Gateway_RFtest/ESP32/LoRa/img/11.png)

Success!

![img12](http://ursalink-resource-center.oss-us-west-1.aliyuncs.com/Gateway_RFtest/ESP32/LoRa/img/12.png)

## Download the LoRa Frequency Test firmware to device

Unlock the settings.

![img13](http://ursalink-resource-center.oss-us-west-1.aliyuncs.com/Gateway_RFtest/ESP32/LoRa/img/13.png)

Configure the SPIFlashConfig as the same(SPI SPEED = 80MHz; SPI MODE = DIO).

![img14](http://ursalink-resource-center.oss-us-west-1.aliyuncs.com/Gateway_RFtest/ESP32/LoRa/img/14.png)

Configure the download path.

Choose the path of firmware.

File:Flash_Download_Tool(LoRa Frequency Test)\Flash_Download_Tool\bin\lora\64.0.0.3-u2-stability-test.ext2

PS: Change the file filter to `All files (*.*)`.

Enable the download path and fill the 0x0.

![img15](http://ursalink-resource-center.oss-us-west-1.aliyuncs.com/Gateway_RFtest/ESP32/LoRa/img/15.png)

Choose the right COM and BAUD = 115200.

![img16](http://ursalink-resource-center.oss-us-west-1.aliyuncs.com/Gateway_RFtest/ESP32/LoRa/img/16.png)

Click “ERASE” to erase the old firmware.

![img17](http://ursalink-resource-center.oss-us-west-1.aliyuncs.com/Gateway_RFtest/ESP32/LoRa/img/17.png)

Success!

![img18](http://ursalink-resource-center.oss-us-west-1.aliyuncs.com/Gateway_RFtest/ESP32/LoRa/img/18.png)

Then click “START” to start download new firmware.

![img19](http://ursalink-resource-center.oss-us-west-1.aliyuncs.com/Gateway_RFtest/ESP32/LoRa/img/19.png)

Success!

![img20](http://ursalink-resource-center.oss-us-west-1.aliyuncs.com/Gateway_RFtest/ESP32/LoRa/img/20.png)

UG63-V2: Press the “reset” button on the device to restart the system.

![img21](http://ursalink-resource-center.oss-us-west-1.aliyuncs.com/Gateway_RFtest/ESP32/LoRa/img/21.png)

SG50 need to be reset as well, press the button for more than 5 seconds.

![img22](http://ursalink-resource-center.oss-us-west-1.aliyuncs.com/Gateway_RFtest/ESP32/LoRa/img/22.png)

Note: Unplug the power could work as well for UG63v2 and SG50 without connecting to solar DC.

## Establish a connection with the device

Open the PuTTY Software.
File:Flash_Download_Tool(LoRa Frequency Test)\PuTTY_0.67.0.0.exe

![img23](http://ursalink-resource-center.oss-us-west-1.aliyuncs.com/Gateway_RFtest/ESP32/LoRa/img/23.png)

Choose the Connection type = Serial, fill in the correct Serial Line number and Speed = 115200.

![img24](http://ursalink-resource-center.oss-us-west-1.aliyuncs.com/Gateway_RFtest/ESP32/LoRa/img/24.png)

Open the Connection, the window won't show anything.

PS: There may be a gateway message pop-up, do not pay attention to it.

![img25](http://ursalink-resource-center.oss-us-west-1.aliyuncs.com/Gateway_RFtest/ESP32/LoRa/img/25.png)

Click the “Enter” on Keyboard, The command character “Gateway>” will be displayed.

![img26](http://ursalink-resource-center.oss-us-west-1.aliyuncs.com/Gateway_RFtest/ESP32/LoRa/img/26.png)

Enter “cell_stop” command to stop cell printing information.
Enter “pkt_stop” command to stop packet forwarding program printing information.

## LoRa Constant Frequency Test Command

Use `test_tx` command to start the lora constant frequency test.
For example, `test_tx -c 0 -r 1250 -f 868.1 -m LORA -s 10 -b 125 -n 1 -z 10 --ant OTXRX -p 16`. The following are some parameters.

Available options
|Parameters|Type|Description|
|---|---|---|
|-h||print this help|
|-u||Set COM type as USB (default is SPI)|
|-d|\<path\>|COM path to be used to connect the concentrator=> default path: /dev/spidev0.0|
|-k|\<uint\>|Concentrator clock source (Radio A or Radio B) \[0..1\]|
|-c|\<uint\>|RF chain to be used for TX (Radio A or Radio B) \[0..1\]|
|-r|\<uint\>|Radio type (1255, 1257, 1250)|
|-f|\<float\>|Radio TX frequency in MHz|
|-m|\<str\>|modulation type ['CW', 'LORA', 'FSK']|
|-o|\<int\>|CW frequency offset from Radio TX frequency in kHz \[-65..65\]|
|-s|\<uint\>|LoRa datarate 0:random, \[5..12\]|
|-b|\<uint\>|LoRa bandwidth in khz 0:random, \[125, 250, 500\]|
|-l|\<uint\>|FSK/LoRa preamble length, \[6..65535\]|
|-n|\<uint\>|Number of packets to be sent|
|-z|\<uint\>|size of packets to be sent 0:random, \[9..255\]|
|-t|\<uint\>|TX mode timestamped with delay in ms. If delay is 0, TX mode GPS trigger|
|-p|\<int\>|RF power in dBm|
|-i||Send LoRa packet using inverted modulation polarity|
|-j||Set radio in single input mode (SX1250 only)|
||||
|--fdev|\<uint\>|FSK frequency deviation in kHz \[1:250\]|
|--br|\<float\>|FSK bitrate in kbps \[0.5:250\]|
||||
|--pa|\<uint\>|PA gain SX125x:\[0..3\], SX1250:\[0,1\]|
|--dig|\<uint\>|sx1302 digital gain for sx125x \[0..3\]|
|--dac|\<uint\>|sx125x DAC gain \[0..3\]|
|--mix|\<uint\>|sx125x MIX gain \[5..15\]|
|--pwid|\<uint\>|sx1250 power index \[0..22\]|
||||
|--nhdr||Send LoRa packet with implicit header|
||||
|--loop||Number of loops for HAL start/stop (HAL unitary test)|
||||
|--fdd||Enable Full-Duplex mode (CN490 reference design)|

Command returned non-zero error code: 0xffffffff (ESP_FAIL)

## LoRa Frequency-Hopping Test Command

Use `test_tx_fss` command to start the lora constant frequency test.

For example, `test_tx_fss -c 0 -r 1250 -f 868 -m LORA -s 7 -b 125 -n 5 -z 10 --ant OTXRX -p 16`.
The following are some parameters.

Available options
|Parameters|Type|Description|
|---|---|---|
|-h||print this help|
|-u||Set COM type as USB (default is SPI)|
|-d|\<path\>|COM path to be used to connect the concentrator=> default path: /dev/spidev0.0|
|-k|\<uint\>|Concentrator clock source (Radio A or Radio B) \[0..1\]|
|-c|\<uint\>|RF chain to be used for TX (Radio A or Radio B) [0..1]|
|-r|\<uint\>|Radio type (1255, 1257, 1250)|
|-f|\<float\>|Radio TX frequency in MHz|
|-m|\<str\>|modulation type ['CW', 'LORA', 'FSK']|
|-o|\<int\>|CW frequency offset from Radio TX frequency in kHz \[-65..65\]|
|-s|\<uint\>|LoRa datarate 0:random, \[5..12\]|
|-b|\<uint\>|LoRa bandwidth in khz 0:random, \[125, 250, 500\]|
|-l|\<uint\>|FSK/LoRa preamble length, \[6..65535\]|
|-n|\<uint\>|Number of packets to be sent|
|-z|\<uint\>|size of packets to be sent 0:random, \[9..255\]|
|-t|\<uint\>|TX mode timestamped with delay in ms. If delay is 0, TX mode GPS trigger|
|-p|\<int\>|RF power in dBm|
|-i||Send LoRa packet using inverted modulation polarity|
|-j||Set radio in single input mode (SX1250 only)|
||||
|--fdev|\<uint\>|FSK frequency deviation in kHz \[1:250\]|
|--br|\<float\>|FSK bitrate in kbps \[0.5:250\]|
||||
|--pa|\<uint\>|PA gain SX125x:\[0..3\], SX1250:\[0,1\]|
|--dig|\<uint\>|sx1302 digital gain for sx125x \[0..3\]|
|--dac|\<uint\>|sx125x DAC gain \[0..3\]|
|--mix|\<uint\>|sx125x MIX gain \[5..15\]|
|--pwid|\<uint\>|sx1250 power index \[0..22\]|
||||
|--nhdr||Send LoRa packet with implicit header|
||||
|--loop||Number of loops for HAL start/stop (HAL unitary test)|
||||
|--fdd||Enable Full-Duplex mode (CN490 reference design)|

Command returned non-zero error code: 0xffffffff (ESP_FAIL)



