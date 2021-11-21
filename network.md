---
author: yantze
os: darwin, linux
---

# Networking Tools

## 网络信息

Linux 通过 `ifconfig` 获取 RX/TX 网络 throughput 信息。也可以通过 `cat /proc/net/dev` 查看。

## DNS

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

ping

```
ttl: time to live, 常见的值有 255(unix, linux), 128(windows), 64(linux, darwin)
比如 `ping amazom.com` icmp 返回 ttl=230, 看起来就像是 unix, 并且 255 - 230 = 25， 从本地路由到 amazon 网关，总共跳了 25 下，经过了 25 个网关
```

## Proxy

```
set HTTP_PROXY=http://proxy_userid:proxy_password@proxy_ip:proxy_port
set HTTPS_PROXY=%HTTP_PROXY%
```

https://stackoverflow.com/questions/26992886

## 各个工具介绍

> ss, nmap, dig, netcat, ping, tcpdump, socat, top, ethtool, ngrep, ip, ifconfig

### ss

> Displaying network socket related information

- 常用命令
  显示当前运行的所有服务以及端口，类似 `netstat -tunapl` 但 ss 更新（推荐）

```shell
# tuna, please!
ss -tunapl
# -a 没有任何作用
# -n 用数字端口（80 不是 http)
# -p 用的 socket 用 pid 显示
```

### ngrep

> 有点类似 wiresharp 和 tcpdump 但简单方便
> 搜索到所有 HTTP GET 的请求

```shell
sudo ngrep GET
# -d interface/any
# -W byline 不要 '\n'
# -I file.pcap
# -O file.pcap
```

语法 `ngrep [options] [regular expression] [BPF filter]( BPF 和 tcpdump 格式一样）`

### nmap

> scan IPs & ports in a nw & to detect installed apps

1. find which hosts are up

```shell
nmap -sn 192.168.1.0/24
# -sn means ping scan not -s + -n, it's -sn
```

2. aggressive scan

```shell
nmap -v -A scanme.nmap.org
# -A aggressive 搜索所有的 port server version even OS
```

3. fast port scan

```shell
nmap -sS -F 192.168.1.0/24
```

发送 SYN packet 检查所有的 port 是否开启

### ping & traceroute

> Traceroute is a nw diagnostic tool used to track in realtime d pathway taken by a pkt on an IP nw from src to dest,reporting d IPaddr of all d routers it pinged in b/n
> ping 发送 ICMP 包，如果没有回应就认为 down 了，所以用 traceroute 部分显示 '...' 就是没有回应 ICMP 而已。

- mtr 能更好的显示

### ethtool

> 显示指定网卡是否连接，其它的最好用 iw

```shell
ethtool eth0
```

## See Also

- [darwin](./osx_darwin.md)
- [nslookup dig mtr](/soft/nslookup_dig_mtr.md)
- [Linux Networking tools](https://twitter.com/devops_tech/status/1446683409644851201)
