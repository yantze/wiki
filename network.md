---
author: yantze
os: darwin, linux

---


# Network

> 影响系统解析 DNS 的路径

- `/etc/hosts`
- `/etc/resolv.conf`
- `/etc/resolver` [**darwin only**]
    - `echo '127.0.0.1' > /etc/resolver/local` 可以让系统重定向 `xxx.xxx.local` 到 127.0.0.1，但`xxx.local`无效，因为是 darwin 的保留域名
- dnsmasq.conf
- router dns and dnsmasq.conf etc.


常见 ip 查询服务
```
ip.gs # @Showfom
ifconfig.me / ifconfig.co
ip138.com  # web

废：cip.cc, 
```

## See Also
- [darwin](./osx_darwin.md)
