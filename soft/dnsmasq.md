# dnsmasq
dnsmasq 在本地建立 DNS 服务器的作用是，缓存 DNS 结果，自定义 DNS 解析值，是 `/etc/resolv.conf` 和 `/etc/hosts` 的增强版

## 配置文件
默认在 `/etc/dnsmasq.conf` 或者在 `/usr/local/etc/dnsmasq.conf` 或者通过 `ps -ef | grep dnsmasq` 查找
```
port=
# dnsmasq 监听端口，默认 53，推荐 5353

listen-address=
# dnsmasq 监听地址，默认 监听所有，可只监听本地 127.0.0.1

address=
# 指定单独的域名解析
# address=/project-a.dev/127.0.0.1
# 将会解析 project-a.dev 到 ip地址 127.0.0.1

server=
# 添加上游 DNS 服务器
# 例如 server=8.8.8.8
# 或者 server=xxx.xxx.xxx.xxx#5353

cache-size=
# 缓存解析结果
# 例如 cache-size=1000

local-ttl=
# 缓存时间(秒)
```


## macOS 遇到的一些问题
- 不能 handle xxx.local 的域名，需要指定二级域名，比如 xxx.xxx.local 才行。 *.local 是 mac 的保留域名
- 可以通过在 /etc/resolve 文件夹里面添加 dev 和 local 空白文件自动指定到本地ip，不需要 dnsmasq
- 需要重启才能让 dnsmasq.conf 生效
- 如果 `nslookup custom.domain.local 127.0.0.1` 可以解析，但是 其它接口不行有两个可能解决的方法
    - 在 dnsmasq.conf 中添加多个 listen-address ，然后重启 dnsmasq ，然后再测试
    - 直接 `sudo pkill dnsmasq` 然后 `brew services restart dnsmasq`，再测试
    - 如果不是本地配置的，需要指定上游的 dns server

## 解析指定的 dns server
```
nslookup custom.domain.local 127.0.0.1
dig custom.domain.local @127.0.0.1 -p dns_server_port
```

## 获取 解析的结果
```
ping custom.domain.local
traceroute custom.domain.local
```


## REF
- https://www.nanqinlang.com/dnsmasq.html
