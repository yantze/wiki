With less code you get more done.
---

```
w3m -dump https://github.com
lynx --dump https://github.com # not support unicode
```

```
tree -I "node_modules|dist" # 生成树形目录
tree -L 2 # 生成前面两级目录
```


```
yes | cp -rf xxx yyy # 设置默认的输入值
\cp # use the non-aliased version 


cat << EOF >> output.txt
heredoc> type what you want append
heredoc> EOF

cat <<< a <<< b #显示a，然后换行，显示b

cat <<-EOF
heredoc> type what you want to echo
heredoc> <<EOF
```

```
printf "%x\n" 111
locale 查看当前语言区的设置, locale -v
paste -sd, 1.txt 合并单个文件
paste 1.txt 2.txt 按Tab合并两个文件
cut -d: -f1 /etc/passwd | head -2 //打印第一列前两行
cut -c2- //删除空格
tty | tr '/' '_' //替换前面你的字符串'/'为'_'
cp /your/path/to/file.list{,.20121106} //备份文件
cp -af file tofile //用原来文档的用户名
Ctrl+x Ctrl+e //编辑当前的命令到编辑器，可以在zshrc中export EDITOR='vim'
Ctrl+R   来搜索历史命令
Ctrl+W  来删除最后一个单词
Ctrl+U  来删除一行命令
```

```
echo $'\x41'  //输出A
echo "`ls -l`" || echo `ls -l` //shell用IFS定义的分隔符来分隔字符串，包括、n，所以再传给echo就是，"line 1" "line 2"
nl || cat -n || cat -d //给文件加行号，中间的会给空行加行号，其它的不会
nl等同于cat -b
uptime //查看计算机登陆信息，负载均衡等
od -c file / od file //显示文件内容，如果没有c显示其它进制
fc //这个是可以在命令行输入文字到vim中编辑的内置命令
time command // 这个可以查看当前命令执行的时间
```

```
groupadd sftpgroup
useradd username -g sftpgroup -s /bin/bash -d home_dir
usermod -a -G groupA user //添加用户到用户组
su www -c 'php xxx.php' //命令下行指定用户组来执行命令
groupadd, chown, chgrp, chmod // relations
```

```
ifconfig
ifconfig -a //显示所有网卡接口
ifconfig eth0 down //禁用eth0网卡
ifconfig eth0 up//启用eth0网卡
ifdown eth0; ifup eth0; //同上
```

route
```
如果你有两个以上的网卡，那么很不幸的是默认网关是内部网，现在需要删除默认的再添加自己设定的默认
ip route del default
ip route add default via 192.168.100.1
其中default来自centos的/etc/networks文件
参考资料：
http://tldp.org/HOWTO/Adv-Routing-HOWTO/lartc.rpdb.multiple-links.html
http://unix.stackexchange.com/questions/22770/two-interfaces-two-addresses-two-gateways
http://www.thomas-krenn.com/en/wiki/Two_Default_Gateways_on_One_System
```

```
sha  //输入这三个字母后会自动有几个选项，可以自己选吧
```

```
!!上一条指令
!hist //执行历史命令中hist开头的最后一条指令
!?hist //执行历史命令中包含hist开头的命令
!10  //执行第十条的历史命令
echo filename haha !#:1  //显示当前第1个参数!#:1的位置
!$  //上一条历史命令的最后一条参数
[ALT+.]  //按这个组合键可以获取最后一条参数
!:2   //获取上一个参数的第二个位置
!:2-4   //获取上一个参数的第二到第四个参数
!:2*    //获取上一个历史参数第二个位置和之后的所有位置
!*  //获取上一个历史命令的所有参数
!!:gs/old/new
^old^new   // 替换前一条命令里的部分字符串。
eg.
$ ls code src
$ cp -r !*
$_ //you can use to access the last argument in the last command, putty have another efficient key is 'Alt+.'
```

```
^hits^hist  //替换上一条指令
^hits^hist^:G  //替换上一条命令的所有string
```

解压 more in extract()
```
xz://有时候出现tar.xz要分开解压
xz -zk //要压缩的文件，k保留源文件
xz -dk //要解压的文件，k保留源文件

tar 解压指定文件
tar zxvf package.tar.gz -C new_dir
```

```
grep MemTotal /proc/meminfo
grep MemFree /proc/meminfo # 查看空闲内存量

id username  #显示用户信息
last # 查看用户登录日志
passwd -l accountName #锁定一个特定用户
passwd -u accountName #解锁一个被锁定的账号
#被锁定的用户仅对root用户仍然可见。这个锁定是通过将加密过的密码替换成（！）来实现的
```

```
在putty下
alt+.
在vim下
Ctrl+Y
```

```
ldd exefile //查找这个程序需要的动态链接库
otool -L out.gn/x64.release/d8 // 类似 ldd ，用于 mac 中
ldconfig //刷新当前系统的动态链接库
pkg-config // 查看当前系统中lib的编译选项
```

```
watch command //实时监视命令结果变动，可以调节更新频率
```


生成十六随机数, n是多少位
```
openssl rand -hex n
```


显示inode和blocks数量
```
stat file/dirname
```


软件使用：
```
显示inode和blocks数量
sp mem 查看内存使用，与free一样
lsmod //查看使用的模块
iotop //查看磁盘，与top结合
ss //another utily socket viewer

```



```
ab -c 20 -n 2000 http://baidu.com/ //查看这个网站的并发量等功能，一个httpd的附属软件
ab 太旧了，不适宜用来测试 web 性能。现在应该用 wrk, siege
lsblk 这个可以查看整个磁盘的逻辑位置
lsb_relase 这个在centos图形界面才可以用
uname -a //这个也可以现实电脑的详细信息，但是显示不了发行版本
uptime //当前电脑时间/系统已经运行时间/目前有多少用户/系统过去1、5、15分钟内的平均负载 //也可以用cat /proc/loadavg
du -ah //查看文件列表的大小
du -sh //查看所有文件的大小总和
cmp file1 file2 //查找当前文件第一个不同的位置
wc -l //统计行数/ -w 统计单词
chattr +i file//让文件为只读 /用lsattr 查看
vmstat 5 //每五秒显示系统的cpu,memory,i/o
ntpdate cn.pool.ntp.org //更新时间
hell将正常时间转为unix时间
date -d "2011-10-18 14:00:00" +%s //转换为unix时间：1318917600。
date -d @1314583003  // unix时间转换为正常时间
make 2>&1 | tee make.log //可以直接把显示的内容保存在make.log文件中
sha... // 哈希值，sha<tab>可以查看所有的hash值
md5sum filename //计算文件的大小
pushd $LFS/sources;md5sum -c md5sums;popd  //检查md5sums里面的md5值
```


```
rsync -arvuzp --chmod=g+rx -e "ssh -p 22333" ./db.txt 172.31.195.91:/home/yantze/test/
rsync -ah --progress --append
chmod -v a+wt dir  //Make this directory writable and sticky. “Sticky” means that even if multiple users have write permission on a directory, only the owner of a file can delete the file within a sticky directory.
```

```
lex=flex / yacc / bison
bison是GUN版的语法分析器，yacc是Berkeley版的语法分析器，两者实现功能类似，可能会有微小的语义差别
```


ssh使用技巧
```
ssh-keygen 生成id_rsa,id_rsa.pub
cat id_rsa.pub>>authorized_keys
如果是linux使用ssh-copy-id，自动就会把id_rsa添加到目的linux主机
如果是windows，使用puttygen转换为putty使用的格式，然后用putty登陆即可
+++进阶,authorized_keys使用command
下面是authorized_keys内容，command可以设置ssh端登陆后的操作
command="$HOME/bin/hello",no-port-forwarding,no-X11-forwarding,no-agent-forwarding,no-pty ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEA
```


linux帮助命令
```
man/page
whereis #  locates the source, binary and manual files for a program, searching a list of standard places.
type -a # 这个可以查找所以的命令位置
what # searches a given file for SCCS identification information (Source Code Control System), such as what compiler was used to create it.
whatis # 这个可以解释一组命令
which # 查找当前path里面的可执行文件
type file # 如果用whereis找不到可以先看看文件类型
whence # 译名「根源」, `whence -v` 几乎等同于 `type`，同样 whence 是 type 的干净输出

nm  # 查看.o文件中调用了哪些程序
```

最常用的10个命令
```
history | awk '{a[$2]++}END{for(i in a){print a[i] " " i}}' | sort -n | tail
```

```
do
    newName=`echo $i |cut -d_ -f3`
    mv $i $newName
done
zmv 'glyphicons_*_(*).png' '$1.png'
rename 's/^glyphicons_[0-9]+_//' glyphicons_*.png
ls -1 glyphicons_[0-9]*.png|sed "s/glyphicons_\([0-9][0-9]*\)_\(.*\).png/mv & \2.png/"|sh -v
rm !(*.php) // 删除当前目录下不是扩展名php的文件。
```


```
env 环境变量
set 和 typeset 的区别
set 显示当前系统的环境变量
typeset 还显示这些系统变量的类型
typeset -aU path 可以去掉重复的 PATH
printenv 显示当前 shell 的环境变量

另外 `set -e` 在脚本中表示，`-e  Exit immediately if a command exits with a non-zero status.`

另外 `alias` 输出的列表更具有可读性 :)
`lang/bash/zsh-lovers.1.txt` 里面业界少了 `alias -g` 的一些运用
```

vimdiff
```
vimdiff =(gcc -march=native -Q --help=target) =(gcc -march=core2 -Q --help=target) #比较两个非文件不同
diff =(typeset) =(set) #也是可以比较的，但是不够vimdiff详细
sdiff # diff的垂直展示
meld dir1 dir2
```


sshfs
```
sshfs -o allow_other root@192.168.9.109:/opt /opt/s109 #挂载(如配上ssh key可完全自动化)
添加allow_other是因为执行这条命令的人可能需要其它人使用，所以添加这个参数后就可以用用其它的用户了
fusermount -u /opt/s109 #卸载
也可以用umount /opt/s109 来卸载
mount -o remount,rw /
mount -t tmpfs tmpfs /tmpram -o size=512m  //创建ramdisk
# 映射widnows的共享文件建，cifs与smb同义
mount -t cifs //192.168.100.10/share /mnt/share -o username="domain\user"="passwd"
# 指定映射文件归属
mount -t cifs //192.168.1.100/share /mnt/share -o username="domain\user",uid="618",gid="618"
# smb客户端
smbclient //192.168.1.50/share -U domain\user
e2fsch -p //检测并自动修复文件系统
```




dev
```
/dev/urandom
/dev/zero
```



```
dirs 的命令
d  //d is an alias for dirs -v | head -10
po //popd , popd is pop dir
pp //pushd , put the current dir
在zsh中输入d命令下面的数字，可以直接进入
```


valgrind
```
c检查错误工具，编译需要加上'-g'
valgrind ./execufile
```

mosh
```
一个比ssh快很多倍和稳定强的terminal,需要先连上ssh,同时安装mosh:
https://mosh.mit.edu
但是我测试一下显示的环境，用这里连接DigtalOcean的三番服务器，但是mosh-server由于长时间丢包，导致一直不能访问，很明显ssh要稳定得多。

较少使用的命令
```
shred - overwrite a file to hide its contents, and optionally delete it
python -m SimpleHTTPServer 8888 & //python 2+
python -m http.server 8888 & //python 3+
python -m pyftpdlib -w //后面的-w是添加写权限，更多可看-h
gpg -c file件加密
gpg file.gpg件解密
```

有一个命令参考比较齐全，之后再消化一下
- http://www.pixelbeat.org/cmdline_zh_CN.html

```
phabricator 这个软件没有完成,dirctory定位到/home/yantze/phabricator/phabricator/webboot,打开phabricator系统的ip地址，提示无权限
如果成功解决，打开url：http://www.phabricator.com/docs/phabricator/article/Configuring_Accounts_and_Registration.html
```


## 一些问题

- home 建立的网站 apache 默认是不允许读取的，就算有777也不行，与 selinux 有关
```
getsebool -a |grep httpd_enable_homedirs
httpd_enable_homedirs --> off
所以要运行：
setsebool httpd_enable_homedirs on
重启可正常
```

## log
- usermod 问题
