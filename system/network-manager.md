---

author: yantze

---

# Network Manager

## Connect to wifi from a terminal
Ensure network manager is start:
```
sudo service NetworkManager start
```

View all network connection info:
```
nmcli
```

Change SSID to your network name, and change PASSWORD to your password or passphrase:
```
sudo nmcli device wifi connect 'SSID' password 'PASSWORD'
```

## Traffic control


linux: `tc` --- show / manipulate traffic control settings
```
设置超时 （这里的1000ms可以改成你想要的）
tc qdisc add dev eth0 root netem delay 1000ms
删除超时
tc qdisc del dev eth0 root
查看超时设置
tc qdisc show dev eth0
```


darwin: `pfctl` --- control the packet filter (PF) and network address translation (NAT) device

