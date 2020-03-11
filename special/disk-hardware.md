# 硬件查看和操作工具

## 磁盘信息
```
df -Th      可以查看已经挂载的分区的文件系统类型
lsblk -f    磁盘信息
```

## 温度检测
CPU 温度,返回值除1000，即为摄氏温度
```
cat /sys/class/thermal/thermal_zone0/temp
```

使用传感器软件，一般能检测风扇和 WiFi 温度
```
apt-get install lm-sensors
sensors-detect
sensors
```


- [查看分区格式和硬件查询命令](https://jtree.cc/post/linux%E4%B8%8B%E6%9F%A5%E7%9C%8B%E7%A3%81%E7%9B%98%E5%88%86%E5%8C%BA%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F%E6%A0%BC%E5%BC%8F/)
