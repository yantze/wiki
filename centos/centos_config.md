# Centos Config
> Main is centos 6

```
# 网络默认参数
/etc/sysconfig/network
```

```
# dns
/etc/resolv.conf
```

```
# 单个网卡
/etc/sysconfig/network-scripts/ifcfg-eth*
```

```
# 登录系统时的提示信息
/etc/issue
```

```
# 登陆后的提示信息
/etc/motd
```

```
# 系统版本
/etc/redhat-release
/etc/centos-release
rpm -q centose-release
```

```
# 时区
/etc/localtime
/usr/share/zoneinfo/*
/etc/sysconfig/clock
```

```
# 在/etc/sysctl.conf中添加下面几行，屏蔽掉ping和broadcast请求。

# Ignore ICMP request:
net.ipv4.icmp_echo_ignore_all = 1

# Ignore Broadcast request:
net.ipv4.icmp_echo_ignore_broadcasts = 1

# 运行下面这一行加载修改或更新
sysctl -p
```

```
#一些系统级的配置
/etc/inittab
```

参考：http://www.oschina.net/translate/linux-server-hardening-security-tips
