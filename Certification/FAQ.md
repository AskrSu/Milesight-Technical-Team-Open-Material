# 认证类QA
## 科普类
UL认证和CSA认证是什么，能做吗？  
是强电类认证，目前都没有做。价格很贵，认证流程复杂，但是又会有不少项目强制要求。不仅要缴纳一次性费用，还需要每季度过检测，单台设备额外缴费，非常不划算  
建议客户自己做，或者尝试用ISED代替，否则很难合适  
市面上绝大多数强电类设备都没有，除了某些价格死贵的那种  
例如：Winnie-NervaEnergy-WS523*2500，让客户自己做，最后也在材料投递出问题做不下来，项目搁置。  
一般非强电类设备不应该强制要求，可能是标书有问题或者客户理解有问题。  

## 通用类
### Power Spectral Density
Q: 若设备有功率谱密度(Power Spectral Density)要求, 实测高于要求, 如何处理?  
A: 功率谱密度高于地区的RF规范是很正常的事情, 因为LoRa射频芯片的功能很强大, 为了满足市面上绝大多数地区的射频需求, 从最大功率角度出发是一定会超过的.  
为了保障认证的顺利进行, Milesight遵守当地无线电射频法规, 会在出货和当地分销的时候从软件层面对射频进行限制, 从而确保射频符合当地法规.  
功率谱密度和TX power参数是高度正相关的, 软件上的限制也是通过对可选择的TX Power进行选择限制, 从而保障在当地的使用中功率谱密度合法.  
若在认证过程中出现该问题, 首先需要和客户声明立场, 其次通过沟通获取合法功率谱密度, 并通过研发对固件修改后快速打一个版本, 支持认证.  


1. Login the gateway's web interface, enable the SSH access in System->General Settings -> Access Service, then Click Save.
2. Open the Xshell/ putty software or any other import tools, input the gateway's IP and the port 22, and input the default credentials of SSH access, which is
Username: root
Password: LoRaWAN@2018
3. Enter the “vi /etc/quagga/lora/local_conf.json” command to enter file.Enter "i" to enter write mode,and then modify the antenna_gain parameter. Write a positive value meaning minus, for example, write 19, and the transmit power is 27-19=8dbi. Click "Esc "on the keyboard and enter :wq to save the file
4.	reboot the gateway

### Frequency Hopping and Fix Software and Commands

## 区域类
巴西Anatel认证
