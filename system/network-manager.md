---

author: yantze

---

Network Manager

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

