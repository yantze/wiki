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
# 添加自己的解析文件
/etc/dnsmasq.d
```

## Show
```
show interfaces
show firewall
```

## Port forward
Firewall NET -> Port Forwarding

## Reset edgeMAX
长按十秒，接到 WAN 口，手动设置网卡 192.168.1.1，打开 192.168.1.1 进入设置向导

## 编辑配置
```
configure # 进入配置模式
set port-forward auto-firewall enable
commit
save # 保存到了 /etc/config
# exit discard # 不保存刚刚的配置
```

```
edit port-forward rule 1
exit
# 类似于 set port-forward rule 1 xxx xxx
```

最后，查看 /config/config.boot 中 `port-forward` 部分如下
```
port-forward {
    auto-firewall enable
    hairpin-nat enable
    lan-interface eth1
    lan-interface switch0
    rule 1 {
        description "webui http"
        forward-to {
            address 192.168.2.38
            port 8000
        }
        original-port 8000
        protocol tcp
    }
    wan-interface eth0
}
```


## Res
- Port-forward 图示概念: http://support.hornington.com/kb/question.php?ID=451
