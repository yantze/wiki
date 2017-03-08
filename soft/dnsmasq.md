# dnsmasq

## macOS 遇到的一些问题
- 不能 handle xxx.local 的域名，需要指定二级域名，比如 xxx.xxx.local 才行。 应该是 xxx.local 是 mac 的保留名称
- 可以通过在 /etc/resolve 里面添加 dev 和 local 自动指定到本地，不需要 dnsmasq
- 需要重启才能让 dnsmasq.conf 生效
- 如果 `nslookup custom.domain.local 127.0.0.1` 可以解析，但是 其它接口不行有两个可能解决的方法
    - 在 dnsmasq.conf 中添加多个 listen-address ，然后重启 dnsmasq ，然后再测试
    - 直接 `sudo pkill dnsmasq` 然后 `brew services restart dnsmasq`，再测试

## 解析指定的 dns server
```
nslookup custom.domain.local 127.0.0.1
dig custom.domain.local @127.0.0.1
```

## 获取 解析的结果
```
ping custom.domain.local
traceroute custom.domain.local
```
