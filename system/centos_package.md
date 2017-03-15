包管理工具 yum update和yum upgrade 的区别
```
yum upgrade 会升级包到最新的版本，举个例子，foo 新版改名为 foo2，那么它会安装 foo2 并且把 foo 删除，而 yum update 只会升级 foo，不会将包更新到 foo2。
其实 yum upgrade = yum --obsoletes update。
因此，yum update 可以更保守地管理包，但 yum upgrade 才会将所有的包保持最新，虽然可能改名会引起一起麻烦。
```

### package manager
```
rpm -qa | grep php
可以查看一些没有yum没有清理干净的东邪
rpm -e 需要卸载的软件名

yum erase 需要卸载的软件名
yum provides '*/radtest'  #这个可以查找的某个未安装命令的位置
find / | fgrep radtest 

rpm -ql freeradius-mysql
查找这个软件安装了什么

rpm -qf /usr/lib/freeradius/rlm_sql_mysql-2.1.1.so
查找这个动态库来自哪个安装包
```

### must installed package
```
yum install git hg ntpdate the_silver_searcher
yum install zsh tmux bind-utils man-pages
bind-utils:包含dig, nslookup等网络工具
man-pages man-pages-zh-CN:kernel源代码等手册

yum groupinstall -y "Development Tools"
**for pip3**
yum install openssl-devel
```


```
locate now is mlocate in Centos&RHEL
yum install mlocate
After that either wait for tomorrow :-) or give command "updatedb". This collects folder and file names to a database, which is the reason everyone wants to use locate instead of find: it is dozens of times faster.
yum install the_silver_searcher
```

```
# mount ntfs
yum install ntfs-3g
```

```
# 7zip and unrar support(command 7za/unrar)
yum install p7zip unrar
# or use this version:Nux Dextop
sudo yum localinstall http://li.nux.ro/download/nux/dextop/el7/x86_64/unrar-5.0.12-2.el7.nux.x86_64.rpm
```

```
#only valid in centos7
yum install clang-devel
```


### python3
```
wget http://www.python.org/ftp/python/3.4.2/Python-3.4.2.tar.bz2
./configure
./make
./make altinstall
sudo ln -n /usr/local/bin/python3.4 /usr/local/bin/python3
sudo ln -n /usr/local/bin/pip3.4 /usr/local/bin/pip3
```

**python dependency**
```
sudo yum install readline readline-devel readline-static
sudo yum install openssl openssl-devel openssl-static
sudo yum install sqlite-devel
sudo yum install bzip2-devel bzip2-libs
```

**instal pyenv**(python version control)
```
git clone git://github.com/yyuu/pyenv.git ~/.pyenv
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(pyenv init -)"' >> ~/.bashrc
exec $SHELL -l
the download file in ~/.pyenv/cache
more detail:http://seisman.info/python-pyenv.html
```

ELRepo 包含了一些硬件相关的驱动程序，比如显卡、声卡驱动。
```
sudo rpm --import https://www.elrepo.org/RPM-GPG-KEY-elrepo.org
sudo rpm -Uvh http://www.elrepo.org/elrepo-release-7.0-2.el7.elrepo.noarch.rpm
```
## Remi repo
http://blog.remirepo.net/pages/Config-en

## 镜像网站
- http://mirror-status.centos.org/
- http://mirrors.163.com/
- http://mirror.sohu.com/
- http://mirrors.ustc.edu.cn/
- http://mirror.bjtu.edu.cn/cn/
- http://mirrors.tuna.tsinghua.edu.cn/
