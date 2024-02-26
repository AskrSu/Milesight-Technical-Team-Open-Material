# Frequency fix and hop SoP

- [Frequency fix and hop SoP](#frequency-fix-and-hop-sop)
  - [Device support list](#device-support-list)
  - [~~V1 version~~](#v1-version)
    - [PC](#pc)
    - [Phone](#phone)
  - [V2 Version](#v2-version)
  - [V3 Version](#v3-version)
    - [Preparation](#preparation)
    - [STEP1](#step1)
    - [STEP2](#step2)
    - [STEP3](#step3)
    - [STEP4](#step4)
    - [STEP5](#step5)

---

## Device support list

Those are the devices known support V3 certification Tool:

- UC500
- EM320-TH
- EM300 firmware version above V1.8
- WS50X
- WS301
- WS202
- EM500 V2
- AM103

Those are the devices known not support V3, only V2.

- UC100
- EM320-TILT

Those are the devices know only support V1

- AM103
- AM102

---

## ~~V1 version~~

Version V1 has been deprecated and all devices do not support version V1 fixed frequency.

### PC

1. Connect to the computer via USB or the provided serial cable. If the driver cannot be installed automatically, [Click me](https://www.silabs.com/documents/public/software/CP210x_VCP_Windows.zip)
2. Open the provided **Toolbox PC**：

> Type: General  
> Serial Port: COMX  
> Login Password: 123456  
> Baud Rate: 115200  
> Data Bits:8  
> Parity Bits:None
> Stop Bits: 1  

**Note:**  
If you can't connect normally, it may be that the debugging mode is turned on, please send commands through the serial port tool as follows respectively (ASCII format) 

    ```@DISABLE UNXX UART DEBUG@ ```  
    ```@DISABLE UNXX USB DEBUG@ ```

3. If you need to upgrade the device, prepare the appropriate image file (e.g. xxx.bin) and perform the upgrade operation as follows:  
    1. `Maintaince` Sidebar
    2. `Upgrade` Page
    3. `Browse` and select bin file
    4. `Upgrade`
4. Turn on the device, **poweron** button control in the upper right corner of the interface (skip if it is the word **reboot**)
5. Modify the corresponding frequency, Data Rate(DR or SF Spreading Factor), and transmit power(TX Power).

868MHz

915MHz

    > 1. `LoRaWAN settings` Sidebar
    > 2. `Channel` Page
    > 3. Set `Enable Channel Index` to `0`
    > 4. Click `Save`

6. According to the relevant configuration, the signal has been sent continuously at this point

### Phone

1. Install the supplied Toolbox mobile app, look for the device NFC icon and approach to read the data.
2. If you need to upgrade the device, prepare the appropriate image file (e.g. xxx.bin) and perform the upgrade operation.
   1. `Maintaince` Topbar
   2. `Upgrade` Page
   3. `Browse` and select bin file
   4. `Upgrade`
3. Power on the device, read the button control of the interface, display the word "power on" that is the state of the power on (without the word "switch on" is skipped)
4. Modify the corresponding frequency, Data Rate(DR or SF Spreading Factor), and transmit power(TX Power).After completing the modifications perform the write at the bottom and approach the device to complete the write operation.  
5. 868MHz  
   1. `Settings` Topbar
   2. Disable first three frequency option(`868.1/868.3/868.5` for EU868 for example)
   3. Enable forth frequency option(`867.1` for EU868 for example)
   4. Select `Data Rate` to `SF10-DR2`
   5. Select `TXPower` to `TXPower 0-16 dBm`  
6. 915MHz
   1. `Settings` Topbar
   2. Set `Channel Index` to `0`
   3. Select `Data Rate` to `SF10-DR2`
   4. Select `TXPower` to `TXPower 0-16 dBm`
7. After the write configuration is complete, the signal has been continuously sent at this time

---

## V2 Version

1. Connects to PC via USB or supplied serial cable，If the driver cannot be installed automatically，[Click me](https://www.silabs.com/documents/public/software/CP210x_VCP_Windows.zip)
2. Open a serial port tool (just be able to send strings, such as xshell, SecureCRT, ~~putty~~, etc.)
3. Fixed frequency commands, such as`fixed_enable -freq 902300000`, Where 902300000 is in Hz, i.e., the transmission frequency is 902.3MHz.
4. Frequency hopping commands, such as`fixed_enable -hopping 902300000 914900000 200000`
   - 902300000 is in Hz, i.e., the begin transmission frequency is 902.3MHz.
   - 914900000 is in Hz, i.e., the end transmission frequency is 914.9MHz.
   - 200000 Hz is step size, 200KHz
5. If there is a transmission power requirement, recommended commands such as `-power 0`, the higher the value the lower the transmit power, adjust accordingly as needed.
   - `-power 16` is the min.
   - `-power 0` is the default max, which should be used in certification process.
6. If there is a transmission data rate requirement, recommended commands such as `-dr 0`, the larger the value the smaller the spreading factor, adjust accordingly as required
   - Where the US915 needs to transmit 500KHz, select `-dr 4`.
   - AU915 needs to transmit 500KHz, select `-dr 6`.
7. If there is a need to send time, optional commands such as `-interval 10000`, time in ms, adjust accordingly if needed.
8. Wait 10s for stable transmission

Note

1. Note that the above commands are case sensitive and only lowercase commands are supported.
2. Note that debugging mode is enabled after sending a command and is restored after a reboot or power failure. To enter this mode again, you need to resend the command.
3. Note that if there is a need to change the firmware, the process of upgrading the firmware is shown in V1.
4. If there is a need to view the logs, you can send the command to open.

```
@ENABLE UNXX UART DEBUG@  
@ENABLE UNXX USB DEBUG@  
```

Note that when no longer needed **must** send a command to close the tool.

```
@DISABLE UNXX UART DEBUG@  
@DISABLE UNXX USB DEBUG@
```

---

## V3 Version

How to use the certificate tool from Milesight Certification?

### Preparation

1. Device
2. USB cable
3. Milesight **Certificate Tool** Software [Find me here](/Certification/Sensor/Sensor%20Certification%20Tool/)

### STEP1

Download the ZIP file: **Certification Tool**

![img](/Certification/Sensor/img/1.png)

Open the file and find the **.exe** program: **certificationTools.exe**

![img](/Certification/Sensor/img/2.png)

![img](/Certification/Sensor/img/3.png)

### STEP2

Connect the device’s USB port with your computer via a USB cable
In the Windows Page, press `Ctrl+R` in the keyboard to call up the execute page, and input: `devmgmt.msc`

![img](/Certification/Sensor/img/4.png)

You will find out a Port in the Device Management, when the USB cable is connected, there’s a corresponding COMx which stands for the serial port.

![img](/Certification/Sensor/img/5.png)

### STEP3

Open the CertificateTools. The left area is recorded the parameters you’re gonna to choose.

![img](/Certification/Sensor/img/6.png)

![img](/Certification/Sensor/img/7.png)

![img](/Certification/Sensor/img/8.png)

You can download [Milesight Toolbox](https://www.milesight.com/iot/resources/download-center/#software-platform) in your PC and check the **Spreading Factor** and the **TXpower**, or you can refer to [LoRa Alliance Regional Parameters](https://resources.lora-alliance.org/home/rp002-1-0-4-regional-parameters) or [download](https://content.cdntwrk.com/files/aT0xNDc5NTI1JnY9MSZpc3N1ZU5hbWU9cnAwMDItMS0wLTQtcmVnaW9uYWwtcGFyYW1ldGVycyZjbWQ9ZCZzaWc9NzE5M2I2ZTJjOTNhYWJlNDgwOTg0MDZjMTc5NGNlNmM%253D).

![img](/Certification/Sensor/img/9.png)

Here are the translation:
|Chinese|English|Explanation|Input/Select|
|---|---|---|---|
|串口连接|serial port connection|||
|串口号|COMx|Depends on your device connection|Select|
|波特率|Baud Rate|Milesight Serial Setting Parameter|115200|
|数据位|Data Bit|Milesight Serial Setting Parameter|8|
|停止位|Stop Bit|Milesight Serial Setting Parameter|1|
|校验位|Parity Bit|Milesight Serial Setting Parameter|0|
|连接|Connect|Click after physical connection||
|关闭|isconnect|Click before disconnection||
|定频设置|Fixed Frequency Setting|||
|扩频因子|Spreading Factor/Data Rate||0 as DR 0<br>Refer to Regional Paramater|
|发射功率|Transmit Power TXpower|Number of db reduced<br>0 means full transmit power|0 in default|
|发射频率|Transmit Frequency/Fixed||Depend of your Channel Plan<br>e.g.,923300000 for 923.3MHz|
|发射间隔|Transmit interval(ms)||Recommend to be more than 5000ms|
|跳频设置|Frequency Hopping Settings|||
|扩频因子|Spreading Factor/Data Rate||0 as DR 0<br>Refer to Regional Paramater|
|发射功率|Transmit Power TXpower|Number of db reduced<br>0 means full transmit power|0 in default|
|跳频模式|Frequency Hopping Mode|0 for random hopping<br>1 for sequential hopping|0 in default<br>Depends on need|
|发射间隔|Transmit interval(ms)||Recommend to be more than 5000ms|
|开始频率|Start Frequency||Depend of your Channel Plan<br>e.g.,923100000 for 923.1MHz|
|结束频率|Stop Frequency||Depend of your Channel Plan<br>e.g.,923500000 for 923.5MHz|
|跳频间隔|Frequency Hopping Interval(Hz)|Step Size of Hopping|200000 in default|

### STEP4

After finishing the parameter settings, we can start the certificate mode and fixed frequency.

![img](/Certification/Sensor/img/10.png)

1. Click **启动认证模式**: `Start-certified` to turn on this tool.
2. Click **开启定频**: `freq-fixed  -dr 0 -power 0 -freq 923300000 -interval 1000` to start sending packet with a fixed frequency.
3. You can see the left settings will show in the freq-fixed page.
4. Click **开启跳频**: `freq-hopping  -dr 0 -power 0 -interval 5000 -mode 0 -step_freq 200000 -start_freq 923400000 -stop_freq 923400000` if you need to send packets with frequency hopping.
5. Click **退出认证模式**: `stop-certificated` after certification process is done.


### STEP5

Especially, you can check the log via clicking “查看日志”

![img](/Certification/Sensor/img/11.png)

![img](/Certification/Sensor/img/12.png)

-END-
