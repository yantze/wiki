[Source](http://ifreedomlife.com/2015/01/19/Setup-Cisco-IPSec-VPN-on-CentOS-7/ "Permalink to 在 Centos 7 上安装 Cisco Ipsec Vpn | ifreedomlife")

# 在 Centos 7 上安装 Cisco Ipsec Vpn | ifreedomlife

#  [ifreedomlife][1]

* [Home][1]
* [Archives][2]
* * [ Jan 19 2015 ][3] Kun Wang

[Comments][4]

#  在 Centos 7 上安装 Cisco Ipsec Vpn

因为最近自建的 OpenVPN 不太稳定，所以重新搭建了稳定性更好的 Cisco IPSec VPN 给身边的 IOS 设备使用，原有的 OpenVPN 废弃。

服务器搭建在 linode 上，因为系统使用的是最新的 CentOS 7，在 Google 上挑选了关键字后仍然无法找到直接可用的博文，所以才写了这篇博文用于记录自己的操作。

下面是具体的步骤：

### 1\. 安装 IPSec-tools/racoon

1. 启用 epel 仓库

         yum install epel-release

2. 安装 ipsec-tools

         yum install ipsec-tools

### 2\. 配置 IPSec-tools/racoon

yum 安装后默认的配置文件路径是 `/etc/racoon`，一共需要关注三个文件，racoon.conf， psk.txt 和 motd。

1. 修改 racoon.conf

```
path pre_shared_key "/etc/racoon/psk.txt";
path certificate "/etc/racoon/certs";
listen {
    isakmp xx.xx.xx.xx [500]; #服务器IP
    isakmp_natt xx.xx.xx.xx [4500]; #服务器IP
}

remote anonymous {
    exchange_mode aggressive, main, base;
    mode_cfg on;
    proposal_check obey;
    nat_traversal on;
    generate_policy unique;
    ike_frag on;
    passive on;
    dpd_delay 30;

    proposal {
        lifetime time 28800 sec;
        encryption_algorithm 3des;
        hash_algorithm md5;
        authentication_method xauth_psk_server;
        dh_group 2;
    }
}

sainfo anonymous {
    encryption_algorithm aes, 3des, blowfish;
    authentication_algorithm hmac_sha1, hmac_md5;
    compression_algorithm deflate;
}

mode_cfg {
    auth_source system;
    dns4 8.8.8.8; //DNS
    banner "/etc/racoon/motd"; #欢迎字符的路径
    save_passwd on;
    network4 10.12.0.1; #VPN内网IP
    netmask4 255.255.255.0;
    pool_size 100;
    pfs_group 2;
}
```

1. 修改 psk.txt

```
    # VPN组名 VPN密钥
    vpn 123456
```

1. 创建 motd

```
    Welcome To VPN
```


### 3\. 添加系统的用户名和密码

```
    useradd -MN -b /tmp -s /sbin/nologin USER
    passwd USER
```

### 4\. 设置iptables的规则

1. 添加 iptables 配置

```
     iptables -A INPUT -p udp -–dport 500 -j ACCEPT
     iptables -A INPUT -p udp --dport 4500 -j ACCEPT
     iptables -t nat -A POSTROUTING -s 10.12.0.0/24 -o eth0 -j MASQUERADE
     iptables -A FORWARD -s 10.12.0.0/24 -j ACCEPT
```

2. 保存 iptables 的设置

```
         iptables-save
```

3. 确认一下 iptables 的设置

```
         iptables -L
```

### 5\. 设置ipv4 forward

修改 `/etc/sysctl.conf` 里的 `ipv4 forward` 字段值
    
    net.ipv4.ip_forward=1

生效

    sysctl -p

### 6\. 测试

用调试模式启动 racoon。

    racoon -F

然后客户端连接测试下，如果没有报错，就能顺利连接。

### 7\. 开启 racoon 自启动

    service racoon start
    chkconfig racoon on

* [VPN][5]
* [服务器][6]

[ **Older**

谈中心化插件系统的设计（三）

][7]

Please enable JavaScript to view the [comments powered by Disqus.][8]

#  [ifreedomlife][1]

© 2015 Kun Wang  
Modify from [Apollo][9] theme, designed by [SANOGRAPHIX.NET][10]  
Powered by [Hexo][11]

[1]: /
[2]: /archives
[3]: /2015/01/19/Setup-Cisco-IPSec-VPN-on-CentOS-7/
[4]: http://ifreedomlife.com/2015/01/19/Setup-Cisco-IPSec-VPN-on-CentOS-7/#disqus_thread
[5]: /tags/VPN/
[6]: /tags/服务器/
[7]: /2014/12/17/The-Design-of-Plugin-System-3/
[8]: //disqus.com/?ref_noscript
[9]: http://sanographix.github.io/tumblr/apollo/
[10]: http://www.sanographix.net/
[11]: http://hexo.io/
  
