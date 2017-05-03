Centos6.5标准步骤
---

```
vi /etc/sysconfig/network-config/cfgf-eth0  OnBoot为Yes
yum -y install make kernel-devel gcc perl gcc-c++

yum -y install mysql mysql-server mysql-devel mysql-libs
yum install php php-cli php-common php-fpm php-gd php-imap php-ldap php-mbstring php-snmp php-xml php-soap php-pdo php-mysql
yum -y install httpd
yum -y install freeradius freeradius-utils freeradius-server freeradius-mysql
yum -y install git
#install git-core mercurial subversion

## php7
yum-config-manager --enable remi-php70
sudo yum install php70 php70-php-fpm php70-php-devel php70-php-gd php70-php-pdo php70-php-common php70-php-cli php70-runtime

## mysql
sudo yum install mariadb-devel mariadb-libs mariadb-server mariadb
mysqladmin -u root password 回车输入密码
mysqladmin -u user-name -p oldpassword newpass
more

## nginx
出现 403 错误，很可能是 nginx 自身的html 文件夹目录没有权限阅读，可以取消这个网站即可

## other
sudo yum install readline-devel sqlite3-devel -y

配置php.ini
确认安装了php-mysql
设置 date.timezone = "PRC"

配置httpd.ini
ServerName localhost:80

修改/etc/sysconfig/network
HOSTNAME=AY130902223942331ba2Z
同步/etc/hosts



启动mysql要设置root密码：
数据库字符集设置
          mysql配置文件/etc/my.cnf中加入default-character-set=utf8
/usr/bin/mysqladmin -u root password '1z1z1z'
/usr/bin/mysqladmin -u root -h localhost.localdomain password '1z1z1z'

mysql data的位置：


参考：cinnotes：mysql

chkconfig httpd on
chkconfig mysqld on

mysql安装之后
要先sudo mysql_secure_installtion来重设一下mysql的密码等参数



设置外网访问
mysql>GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '123456' WITH GRANT OPTION;

出现
[root@localhost ~]# /etc/init.d/mysqld start
Another MySQL daemon already running with the same unix socket.
正在启动 mysqld：                                          [失败]

mv mysql.sock mysql.sock.bak
service mysqld start

时间同步：
显示时区：date -R
cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
ntpdate us.pool.ntp.org
#ntpdate time.windows.com
hwclock -w #写入bios  / 可以通过hwclock -s 来从bios写入系统
也可以手动设置时间
date -s '2014-06-23 18:51:00'


如果作为自己用的编译环境可以
$ sudo yum update -y
$ sudo yum groupinstall -y "Development Tools"
$ sudo yum install -y \
        autoconf automake19 libtool gettext \
        git scons cmake flex bison \
        libcurl-devel curl-devel curl \
        ncurses-devel ruby bzip2-devel expat-devel

linux必装软件
yum install git hg ntpdate zsh tmux bind-utils man-pages man-pages-zh-CN

添加repo_rpmforge
First, if you haven't already, import the key ->
sudo rpm --import http://apt.sw.be/RPM-GPG-KEY.dag.txt
Note : The imported GPG key stored under /etc/pki/rpm-gpg directory as a file RPM-GPG-KEY-rpmforge-dag.
Then 'yum install' ->
sudo yum install http://pkgs.repoforge.org/rpmforge-release/rpmforge-release-0.5.3-1.el7.rf.x86_64.rpm
The RPMForge repository will be installed under /etc/yum.repod directory as a file rpmforge.repo.
# yum --enablerepo=rpmforge install aria2

快速添加epel在centos7中
yum install epel-release
```
