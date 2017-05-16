# SELinux

## 中文叙述
SELinux 就是一个强制访问控制系统(Security-Enhanced Linux)，一般有两个策略，一个是 NSA 用的 mls(restrict)，一个是普通 linux 的用的 targed，默认说的都是targed的策略。
 
### 常用情况

#### 新装的 apache 服务器启动之后，只能本机访问，其它网络不能访问
这个是 iptable 或者 centos7 的 firewall 没有开放 80 端口。

if use iptables

    iptables -A INPUT -p tcp --dport 80 -j ACCEPT
    service iptables save

or firewall

    firewall-cmd --zone=dmz --add-port=80/tcp --permanent

网站可以访问后，但是页面是 apache 的引导页，不是网站目录下的内容。
如果你在你的网站目录放的是从 windows 或者网络上拷贝下来的文件，很有可能 selinux 判断为 httpd 无权限读取这些文件，导致 apache 一直指向的是 /var/www/error/noindex.html 或者 /usr/share/httpd/noindex 目录下的内容
有三个解决方法

第一个是设置 selinux 的等级

    setenforce 0

第二个方法是

    给网站目录下的文件设置httpd_sys_content_t域
    chcon -t default_t -R /var/www/html

第三个方法是

如果你换了一个网站目录，或者想做成一个安装包，还想使用 selinux，最好用这个方法是把规则添加给 selinux。

    semanage fcontext --add --type httpd_sys_content_t "/www(/.*)?"
    semanage fcontext --add --type httpd_sys_content_t "/www/html(/.*)?"

这个时候，应该有生成一个 policy 文件，里面包含了目录相关的权限设置

    cat /etc/selinux/targeted/contexts/files/file_contexts.local

是时候用 restorecon 了

    restorecon -Rv /www/html

这个时候系统已经告诉你，已经转换成 selinux 认可的类型或者域了

#### 限制用户对自己文档的不可操作
比如说我安排一个日志检查员，我不想让他执行程序，只是想让他看日志

    sebool allow_guest_exec_content off

这样，那些默认的账户都是不能执行脚本文件的了。

### 一个有 sudo 权限的人，如何对他进行限制呢
当然可以在 visudo 中有个列表显示这个用户的执行程序名，也可以用这种 selinux 限制好了规则的方法，这里的 restricteduser 就是一个拥有 sudo 权限的账户

    semanage login -a -s user_u restricteduser

这里说明一个就是 user_u 是 user_r 和 user_t 的合体，user_r 代表的是可以执行哪些程序，user_t 代表的是那些程序它有什么权限.
比如说这个用户拥有启动 httpd 服务的权限，但是他对这个网站的内容确是不可编辑的。

### 简明运作
selinux 是构建在 linux 系统权限控制之上的一套系统，linux 权限控制明显的一个问题就是，只分 user/group/other，这个 other 有很多不同的用户，如果 other 的权限过大，会导致很多的问题出现。
selinux 要的就是，user 的权限是整个 selinux 系统中最小权限的存在。selinux 也有一个天生缺陷，就是总有一个 GOD 可以操控一切.
在 redhat 系的文件系统中，文件属性后面有个小点或者加号，这个就是 selinux 和 acl 的设置:
当文件或者文件夹只使用了 selinux context 的属性，在`ls -l`时，文件后面会是一个点，但是使用了`setfacl`(set file access control lists)后，点号就会变成加号。


### 简单的方法
远离这一切，可以直接关闭 iptables 和 selinux，很明显很不安全 :)

    systemctl mask firewalld
    systemctl stop firewalld  #关闭防火墙(centos7)
    iptables -F               #暂时清除所有的规则
    service iptables stop     #关闭防火墙(centos6和otherlinux系统)
    setenforce 0              #关闭selinux


如果你想从头学起，请看扩展阅读的第一个链接。
更详细的说明，请看我下面的笔记。

---
## SELINUX DETAIL
selinux has two policy for targeted and stricted,CentOS apply targeted.


    # selinux config file:/etc/sysconfig/selinux
    $ getenforce
    Enforcing/Permissive/Disabled

    $ sestatus
    SELinux status:                 enabled
    SELinuxfs mount:                /sys/fs/selinux
    SELinux root directory:         /etc/selinux
    Loaded policy name:             targeted
    Current mode:                   enforcing
    Mode from config file:          enforcing
    Policy MLS status:              enabled
    Policy deny_unknown status:     allowed
    Max kernel policy version:      28



注释：
MLS: Multi-LevelSecurity(MLS) and non-MLS

常用命令：

    sestatus -v                 # more detail
    sestatus -b                 # display current system soft selinux status
    getsebool -a | grep httpd   # same as sestatus -b
    semodule -l                 # list all selinux module
    ls -l /etc/selinux/targeted/modules/active/modules/ # same as semodule -l


    id                          #show cur user context
    ls -Z/--context
    cp -Z/--context
    ps -Z/--context
    chcon -t etc_t test.txt
    setfiles
    restorecon


    # SELINUX=enforcing would disable sshd non-22 port access until:
    semanage port -a -t ssh_port_t -p tcp 12345
    
    # copy file from other where,can not open by browser
    restorecon -R -v /var/www/html
    
    # check httpd_disable_trans, ftpd_anon_write
    getsebool ftpd_anon_write
    getsebool httpd_disable_trans
    # httpd_disable_trans is off,we could open it by:
    setsebool httpd_disable_trans=1
    # or just:
    setsebool httpd_disable_trans on



#Advance
## Basic
system_u:object_r:locale_t:s0
- Each Linux user account maps to an SELinux user
- the root user that owns the file is mapped to the system_u SELinux user. This mapping is done by the SELinux policy.
- In Linux, a user runs a process. This can be as simple as the user jo opening a document in the vi editor (it will be jo's account running the vi process) or a service account running the httpd daemon. In the SELinux world, a process (a daemon or a running program) is called a subject.
- An object in SELinux is anything that can be acted upon. This can be a file, a directory, a port, a tcp socket, the cursor, or perhaps an X server. The actions that a subject can perform on an object are the subject's permissions.
- third section,This is the part that defines what type the file or directory belongs to.
- The fourth part of the security context, s0, has to do with multilevel security or MLS. Basically this is another way of enforcing SELinux security policy, and this part shows the sensitivity of the resource (s0)

SELinux Users are suffixed by "u", roles are suffixed by "r" and types (for files) or domains (for processes) are suffixed by "_t".

### Permernet store
chcon is a temporary measure, a file system relabel or running the restorecon command will revert the file back to its original context.
But if you don't know the file's correct context, how does the system know which context to apply when it runs restorecon?
Conveniently, SELinux "remembers" the context of every file or directory in the server. In CentOS 7, contexts of files already existing in the system are listed in the /etc/selinux/targeted/contexts/files/file_contexts file. It's a large file and it lists every file type associated with every application supported by the Linux distribution. Contexts of new directories and files are recorded in the /etc/selinux/targeted/contexts/files/file_contexts.local file.

## the SELinux domain

    cat /etc/selinux/targeted/contexts/files/file_contexts


    >[root@fly files]# ll -h
    total 1.7M
    -rw-r--r--. 1 root root 346K Dec 26 02:52 file_contexts
    -rw-------. 1 root root 1.3M Dec 26 02:52 file_contexts.bin
    -rw-r--r--. 1 root root  13K Dec 26 02:52 file_contexts.homedirs
    -rw-------. 1 root root  42K Dec 26 02:52 file_contexts.homedirs.bin
    -rw-r--r--. 1 root root    0 Dec 16 23:31 file_contexts.local
    -rw-------. 1 root root   16 Dec 26 02:52 file_contexts.local.bin
    -rw-r--r--. 1 root root    0 Dec 16 23:30 file_contexts.subs
    -rw-r--r--. 1 root root  435 Dec 16 23:30 file_contexts.subs_dist
    -rw-r--r--. 1 root root  139 Dec 16 23:30 media


### two-step process

    semanage fcontext --add --type httpd_sys_content_t "/www(/.*)?"
    semanage fcontext --add --type httpd_sys_content_t "/www/html(/.*)?"

tips:if show

    semanage: command not found

you may install full selinux distribution

    yum install policycoreutils policycoreutils-python selinux-policy selinux-policy-targeted libselinux-utils setroubleshoot-server setools setools-console mcstrans


To make sure, we can check the file context database (note that we are using the file_contexts.local file):

    cat /etc/selinux/targeted/contexts/files/file_contexts.local
You should see the updated contexts:

    # This file is auto-generated by libsemanage
    # Do not edit directly.
    /www(/.*)?    system_u:object_r:httpd_sys_content_t:s0
    /www/html(/.*)?    system_u:object_r:httpd_sys_content_t:s0


Next, we will run the restorecon command. This will relabel the file or directory with what's been recorded in the previous step:
There is a nifty tool called matchpathcon that can help troubleshoot context-related problems.
matchpathcon -V /www/html/index.html
/www/html/index.html has context unconfined_u:object_r:default_t:s0, should be system_u:object_r:httpd_sys_content_t:s0

    restorecon -Rv /www
    matchpathcon -V /www/html/index.html

    /www/html/index.html verified.


## Domain Transition
So far we have seen how processes access file system resources. We will now see how processes access other processes.

This transition is not something the application or the user can control. This has been stipulated in the SELinux policy that loads into memory as the system boots. In a non-SELinux server a user can start a process by switching to a more powerful account (provided she or he has the right to do so). In SELinux, such access is controlled by pre-written policies. And that's another reason SELinux is said to implement Mandatory Access Control.

    sesearch -s init_t -t ftpd_exec_t -c file -p execute -Ad
The result shows that processes within initt domain can read, get attribute, execute, and open files of ftpdexec_t context:

Found 1 semantic av rules:
   allow init_t ftpd_exec_t : file { read getattr execute open } ;
Next, we check if the binary file is the entrypoint for the target domain ftpd_t:

    sesearch -s ftpd_t -t ftpd_exec_t -c file -p entrypoint -Ad
And indeed it is so:

Found 1 semantic av rules:
   allow ftpd_t ftpd_exec_t : file { ioctl read getattr lock execute execute_no_trans entrypoint open } ;
And finally, the source domain initt needs to have permission to transition to the target domain ftpdt:

    sesearch -s init_t -t ftpd_t -c process -p transition -Ad
As we can see below, the source domain has that permission:

Found 1 semantic av rules:
   allow init_t ftpd_t : process transition ;

### the SELinux user
 Multi Category Security (MLS / MCS)
SELinux users are defined in the policy that's loaded into memory at boot time, and there are only a few of these users.
When SELinux is enforced, each regular Linux user account is mapped to an SELinux user account. There can be multiple user accounts mapped to the same SELinux user. This mapping enables a regular account to inherit the permission of its SELinux counterpart.
to seee mapping

    semanage login -l
system_u is a different class of user, meant for running processes or daemons.
to see what SELinux users are available in the system

    semanage user -l
So what this really means is that any Linux user that maps to the unconfined_u user will have the privileges to run any app that runs within the unconfined_t domain.
id -Z


## Other
restorecond - daemon that watches for file creation and then sets the default SELinux file context

#### Further Reading:
[intro selinux by DO](https://www.digitalocean.com/community/tutorials/an-introduction-to-selinux-on-centos-7-part-2-files-and-processes)
[redhat selinux offical](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/7-Beta/html/SELinux_Users_and_Administrators_Guide/chap-Security-Enhanced_Linux-Introduction.html)
[redhat selinux offical pdf version](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/6/pdf/Security-Enhanced_Linux/Red_Hat_Enterprise_Linux-6-Security-Enhanced_Linux-en-US.pdf)









## 故障问题

端口未授权
```
Permission denied: make_sock: could not bind to address [::]:843
Permission denied: make_sock: could not bind to address 0.0.0.0:843
no listening sockets available, shutting down 
Unable to open logs
```
解决方法：
- 前提是SELinux 类型必须是targeted的：cat /etc/selinux/config|grep SELINUXTYPE;
- 也可以直接把selinux禁用掉；直接修改/etc/selinux/config找到SELINUX=enforcing 修改为SELINUX=disable，然后reboot即可。
- 一次性的执行命令setenforce 0，这样不用重启，也可以生效。
- 软解决就是：增加selinux中http的端口
