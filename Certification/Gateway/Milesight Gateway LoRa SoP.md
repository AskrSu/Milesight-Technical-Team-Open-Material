# Milesight Gateway LoRa SoP for Certification

Author: Askr (<askr.su@milesight.com>)  
Last Update: 2024/1/22

---

## Clarification

1. The current certification material applicable products include: `UG65, UG67, UG63, UG56`, these products LoRa frequency operation and WiFi frequency operation are the same.  
2. LoRa frequency operation, need to change the command parameters according to the specific product, the document has explained the meaning of the specific parameters. When you use it, you need to modify the corresponding parameters according to the antenna configuration and LoRa Resion of the specific product.

---
In Certification like FCC, RF testing is required, different district or region has regulartion on the max TX power of Radio Freqency. So we need some command to configure the TX power of RF test, and make sure the shipment to that area obey the RF regulation.

Total TX power = TX power on LoRa Chip + Antenna Gain

---

### Configure TX Power on LoRa Chip

1. Login the gateway's web interface, **enable the SSH access** iwth in System->General Settings -> Access Service, then Click Save.
2. Login into gateway backend using **Putty**, or other ssh tools.
3. Using the following info to access system
   - IP: `192.168.23.150`
   - Username: `root`
   - Password: Contact our Technical Support Team
4. Once access the system, use the following commands to operate RF test:
   1. Stop the lora packet forwarder process before start testing.

   ```
   /etc/init.d/lora_pkt_fwd stop
   ```

   2. Set the parameter and start TX testing

   ```
   test_loragw_hal_tx -c 0 -r 1250 -f 868.1 -m LORA -s 12 -b 125 -n 10 -z 255 --ant OTXRX -p 27
   ```

   - Frequency Plan:
     - `-f XXX` with unit MHz.
     - For 868.1MHz, `-f 868.1`
     - For 915MHz, change to `-f 915`.
   - TX Power: Transmission Power
     - `-p XX` with unit DB
       - 915M, default is 27db;
       - 868M, default is 16db.
     - For Korean Certification KC: `-p 22` TX power = 22 DB.
     - For Brazil Annatel Certification: `-p 8` TX power = 8 DB.
   - Antenna Mode: `--ant`:
     - `I`for Inner Antenna, `O`for Outer Antenna, `TX` and `RX` for receive and transmit.
     - `ITXIRX`: Both transmit and receive use inner.
     - `OTXIRX`: Transmit outer, receive inner.
     - `ITXORX`: Receive inner, transmite outer.
     - `OTXRX`: AUTO mode
       - When transmit:Transmit outer, receive inner
       - When no transmit: Receive outer

### Note

1. Make sure stop the packet forwarding process before the frequency hopping test.
2. When the frequency hopping is performed, it is fixed in 200khz steps forward or backward.
3. The frequency used in the frequency hopping test is random and irregular.
4. If the transmission frequency is set to 902.3, 200khz step, has been increased 1000 times, if you want to limit it to 928.1, modify the command `-n 1000` >> `-n 130`

### Commands of test_loragw_hal_tx_fss

| Command | Description                                                                                                |
| ------- | ---------------------------------------------------------------------------------------------------------- |
| -h      | Print Help                                                                                                 |
| -u      | Set COM type to USB(SPI in default)                                                                        |
| -d      | To connect to concentrator<br>Default COM path:/dev/spidev0.0                                              |
| -k      | Concentrator clock source                                                                                  |
| -c      | For TX                                                                                                     |
| -r      | Radio type (1255, 1257, 1250)                                                                              |
| -f      | Radio TX frequency in MHz                                                                                  |
| -m      | modulation type ['CW', 'LORA', 'FSK']                                                                      |
| -o      | Continuous wave frequency deviation in kHz from radio TX frequency\*                                       |
| -s      | LoRa datarate 0:random, [5..12]                                                                            |
| -b      | LoRa bandwidth in khz 0:random, [125, 250, 500]                                                            |
| -l      | FSK/LoRa preamble length, [6..65535]                                                                       |
| -z      | Packet Size sent<br>`-z 10` is smaller size with faster speed<br>`-z 255` is bigger size with slower speed |
| -t      | TX mode timestamp in ms                                                                                    |
| -p      | TX power in db                                                                                             |
| -i      | Sending LoRa packets using reverse modulation polarity\*                                                   |
| -j      | Setting radio to single input mode (SX1250 only)\*                                                         |
| -n      | number of packet send                                                                                      |
| --loop  | number of loop                                                                                             |
| --jump  | packet send with hopping mode                                                                              |

---

### Configure Antenna Gain

This is a method of configure the TX power in the Packet Forwarder Level.

Antenna Gain is  

1. Login the gateway's web interface, enable the SSH access in System->General Settings -> Access Service, then Click Save.
2. Login into gateway backend using **Putty**, or other ssh tools.
3. Using the following info to access system
   - IP: `192.168.23.150`
   - Username: `root`
   - Password: Contact our Technical Support Team
4. Enter the `vi /etc/quagga/lora/local_conf.json` command to enter file.
5. Enter "`i`" to enter **write mode**, and then modify the `antenna_gain` parameter.
   - Write a non-negative value only, so the TX power from chip interface will minus this value.
   - For example, For US915, default LoRa Chip TX Power is 27db, we can write 19, and the transmit power is **27-19=8dbi**.
6. Click "Esc"on the keyboard and enter `:wq` to save the file.
7. Reboot the gateway using `reboot`.
