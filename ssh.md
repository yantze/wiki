# About SSH

### ssh登陆
我使用远程的方法：
```
ssh-gen
ssh-copy-id -i ~/.ssh/id_rsa.pub user@localhost
# 取出private key,然后用 puttygen转换成 putty的 private key，登陆的时候导入
```

same with ssh-copy-id
```
`ssh user@host "mkdir -p .ssh && cat >> .ssh/authorized_keys" < ~/.ssh/id_rsa.pub`
mkdir -p to avoid failing if .ssh already exists.
# `ssh-copy-id` not work in mac can use :
brew install ssh-copy-id
```

### ssky-keygen + ssh-copy-id 无密码登陆远程LINUX主 机

使用下例中ssky-keygen和ssh-copy-id，仅需通过3个步骤的简单设置而无需输入密码就能登录远程Linux主机。
- ssh-keygen 创建公钥和密钥。
- ssh-copy-id 把本地主机的公钥复制到远程主机的authorized_keys文件上。
- ssh-copy-id 也会给远程主机的用户主目录（home）和~/.ssh, 和~/.ssh/authorized_keys设置合适的权限 。

步骤1: 用 ssh-key-gen 在本地主机上创建公钥和密钥
```
ligh@local-host$ ssh-keygen -t  rsa
Enter file in which to save the key (/home/jsmith/.ssh/id_rsa):[Enter key]
Enter passphrase (empty for no passphrase): [Press enter key]
Enter same passphrase again: [Pess enter key]
Your identification has been saved in /home/jsmith/.ssh/id_rsa.
Your public key has been saved in /home/jsmith/.ssh/id_rsa.pub.
The key fingerprint is: 33:b3:fe:af:95:95:18:11:31:d5:de:96:2f:f2:35:f9
```

步骤2: 用 ssh-copy-id 把公钥复制到远程主机上
```
ligh@local-host$ ssh-copy-id -i ~/.ssh/id_rsa.pub  root@192.168.0.3
ligh@remote-host‘s password:
Now try logging into the machine, with ―ssh ?remote-host‘‖, and check in:
.ssh/authorized_keys to make sure we haven‘t added extra keys that you weren‘t expecting.
```
> [注: ssh-copy-id 把密钥追加到远程主机的 .ssh/authorized_key 上.]

步骤3: 直接登录远程主机
```
ligh@local-host$ ssh remote-host
Last login: Sun Nov 16 17:22:33 2008 from 192.168.1.2
```
> [注: SSH 不会询问密码.]



## SSH反向连接及Autossh
detail:http://www.cnblogs.com/eshizhan/archive/2012/07/16/2592902.html

ssh连接主机两种方法:
- 被动连接:C访问公网IP地址服务器S
- 主动连接:C访问S已经联通本地的网络:
> 内网主机主动连接到外网主机，又被称作反向连接（Reverse Connection），这样NAT路由/防火墙就会在内网主机和外网主机之间建立映射，自然可以相互通信了。但是，这种映射是NAT路由自动维持的，不会持续下去，如果连接断开或者网络不稳定都会导致通信失败，这时内网主机需要再次主动连接到外网主机，建立连接。

1.理论的介绍完了，下面实际操作：

A要控制B

A主机：外网，ip：123.123.123.123，sshd端口：2221

B主机：内网，sshd端口：2223

无论是外网主机A，还是内网主机B都需要跑ssh daemon

 

1.1.首先在B上执行

$ ssh -NfR 1234:localhost:2223 user1@123.123.123.123 -p2221
这句话的意思是将A主机的1234端口和B主机的2223端口绑定，相当于远程端口映射（Remote Port Forwarding）。

这里每次需要输入A主机user1的登陆密码，后面会讲到解决办法。

 

1.2.这时在A主机上sshd会listen本地1234端口

$ ss -ant

State      Recv-Q Send-Q        Local Address:Port          Peer Address:Port
LISTEN     0      128               127.0.0.1:1234                     *:*
1.3.像平时一样连接到A主机的1234端口就可以控制内网B主机了

$ ssh localhost -p1234
 

2.一开始提到，这种反向连接（Reverse Connection）不稳定，可能随时断开，需要内网主机B再次向外网A发起连接，这时需要个“朋友”帮你在内网B主机执行这条命令。它就是Autossh。

在此之前还要解决之前的一个问题，那就是每次内网主机B连接外网主机A时都需要输入密码，这个问题ssh本身是提供另外一种验证方式——通过密钥验证用户身份，实现自动登录。

 

2.1.在内网B主机上生产公钥和私钥

$ ssh-keygen
...(一直按Enter，最后在~/.ssh/下生成密钥)
$ ls ~/.ssh/
id_rsa id_rsa.pub known_hosts
 

2.2.复制B主机上生成的id_rsa.pub公钥到外网A主机上，并将内容加入到~/.ssh/authorized_keys中

$ cat id_rsa.pub >> ~/.ssh/authorized_keys
试下，内网B主机连接外网A主机，就不再输入密码验证了

补充：今天了解到ssh-copy-id这个命令，上面这个操作就变的简单了

$ ssh-copy-id user1@123.123.123.123
 

2.3.再来看看Autossh的用法

$ autossh -M 5678 -NR 1234:localhost:2223 user1@123.123.123.123 -p2221
比之前的命令添加的一个-M 5678参数，负责通过5678端口监视连接状态，连接有问题时就会自动重连，去掉了一个-f参数，因为autossh本身就会在background运行。

 

3.终极方案：当重启内网B主机，谁来自动Autossh呢，加入daemon吧

以daemon方式执行，相当于root去执行autossh, ssh，这时刚才普通用户目录下的.ssh/authorized_keys文件会不起效。有两种办法解决，一种是用autossh的参数指定.ssh路径；另外一种是以普通用户身份执行daemon，下面是第二种方式。

/bin/su -c '/usr/bin/autossh -M 5678 -NR 1234:localhost:2223 user1@123.123.123.123 -p2221' - user1
autossh还有很多参数，用来设置重连间隔等等。

将上面命令放入下面各启动方式中，根据自己系统自己配置：

SysV：/etc/inid.d/autossh

Upstart: /etc/init/autossh.conf

systemd: /usr/lib/systemd/system/autossh.service

change the login message motd(message of today)
```
/etc/motd
```

