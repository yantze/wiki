# EdgeOS Notes

## Show dhcp leases
> 显示所有链接路由器的用户
```
show dhcp leases
```

## Show contected clients
> 显示当前连接路由器的用户
```
show arp | sed '/incomplete/d'
```

## Dnsmasq
> 使用 Dnsmasq 管理本地 DNS
```
/etc/init.d/dnsmasq status
/usr/sbin/dnsmasq
# 查看配置
ps -ef | grep dnsmasq
```

