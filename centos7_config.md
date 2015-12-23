# Centos7 Config

## Small Things

### restart network
```bash
systemctl restart NetworkManager
```


### Install yum-axelget
yum-axelget是EPEL提供的一个yum插件。使用该插件后用yum可以并行下载:
```
sudo yum install yum-axelget
```
> 同时安装axel,axel是一个并行下载工具，在下载http、ftp等简单协议的文件时非常好用。

### time
```bash
timedatectl list-timezones # 列出所有时区
timedatectl set-local-rtc 1 # 将硬件时钟调整为与本地时钟一致, 0 为设置为 UTC 时间
timedatectl set-timezone Asia/Shanghai # 设置系统时区为上海

cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
```

## Repo

### install remi repository
http://www.unixmen.com/install-remi-repository-rhel-centos-scientific-linux-76-x5-x-fedora-201918/
