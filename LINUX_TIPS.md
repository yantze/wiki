With less code you get more done.
---

内置命令
```
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
dmesg //查看软硬件配置
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
ldconfig //刷新当前系统的动态链接库
pkg-config // 查看当前系统中lib的编译选项
```

```
awk  //格式化输出 http://coolshell.cn/articles/9070.html
sed  //
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
# 用tcpdump嗅探80端口的访问看看谁最高
sudo tcpdump -i eth7 -tnn dst port 80 -c 1000 | awk -F "." '{print $1"."$2"."$3"."$4}' | sort | uniq -c | sort-nr |head -20
```


查找一个域名的真实ip地址
```
# TXT/spf records
# A TXT record is a type of DNS record that provides text information to sources outside your domain.
# Sender Policy Framework (SPF) records allow domain owners to publish a list of IP addresses or subnets that are authorized to send email on their behalf.
nslookup google.com 8.8.8.8
nslookup -vt google.com 8.8.8.8
# _netblocks.google.com describes ipv4 ranges
# _netblocks2.google.com describes ipv6 ranges
nslookup -debug -type=AAAA www.example.com.
nslookup -vc -q=txt _netblocks.google.com 8.8.4.4
nslookup -q=TXT _netblocks.google.com 8.8.4.4
dig @ns1.nameserver1.com domain.com txt
dig domain.com txt
traceroute -n -w 2 -q 2 -m 30 8.8.4.4
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
top //shift+p 进程排序 /shift+m 内存排序
ntpdate cn.pool.ntp.org //更新时间
hell将正常时间转为unix时间
date -d "2011-10-18 14:00:00" +%s //转换为unix时间：1318917600。
date -d @1314583003  // unix时间转换为正常时间
make 2>&1 | tee make.log //可以直接把显示的内容保存在make.log文件中
lsof //列出当前正在使用的文件
fuser //列出当前打开的文件和socket
sha... // 哈希值，sha<tab>可以查看所有的hash值
md5sum filename //计算文件的大小
pushd $LFS/sources;md5sum -c md5sums;popd  //检查md5sums里面的md5值
```


```
ag keychar  //直接查看当前目录下包含keychar的字符
ag -g pattern  //查看当前目录下的所有文件名
grep -r "some_text" /path/to/dir //递归查找grep的目录
grep -w "name" test.txt  //查找完整的字符串
grep pattern files
grep -r pattern dir
grep -o "SEARCH.*/usr/bin" dummy.log //Print  only  the  matched  (non-empty) parts of a matching line, with each such part on a  separate output line.
grep -L/l "str" a.txt b.txt //-L, --files-without-match; -l, --files-with-matches
grep -c "str" a.txt  // only output the number of result
grep -x "hole line" a.txt // only output that exactly match the whole line
ps -ef | grep 'httpd\|vsftpd' //find 'httpd' or 'vsftpd'
rsync -arvuzp --chmod=g+rx -e "ssh -p 22333" ./db.txt 172.31.195.91:/home/yantze/test/
rsync -ah --progress --append
chmod -v a+wt dir  //Make this directory writable and sticky. “Sticky” means that even if multiple users have write permission on a directory, only the owner of a file can delete the file within a sticky directory.
```

```
lex=flex / yacc / bison
bison是GUN版的语法分析器，yacc是Berkeley版的语法分析器，两者实现功能类似，可能会有微小的语义差别
```


```
curl
curl -u "yantze" -d '{"scopes":["public_repo"]}' https://api.github.com/users/yantze\?callback\=haha
curl -u "yantze" -H "Accept: application/vnd.github.v3.text+json"  https://api.github.com/users/yantze
curl -i/-I -u "username":"password"
```

wget
```
1) use –quiet option to surpress download progress indicator
wget --quiet http://host_name_of_the_server/path/to/afile.doc

2) use -N to get file only when timestamp or size of the file downloaded has changed
wget -N http://host_name_of_the_server/path/to/somefile.dat

3) when running wget under bash, one can take advantage of Bash curl braces expansion and do something like this
wget http://host_name_of_the_server/path/to/{file1.txt,file2.txt,file3.txt}
wget http://host_name_of_the_server/path/to/{file1,file2,file3}.txt
wget http://host_name_of_the_server/path/to/file{1,2,3}.txt

Each of the above commands is equivalent to the following
wget http://host_name_of_the_server/path/to/file1.txt
wget http://host_name_of_the_server/path/to/file2.txt
wget http://host_name_of_the_server/path/to/file3.txt
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


glances
```
su root
# rpm -ivh http://fr2.rpmfind.net/linux/epel/6/x86_64/epel-release-6-7.noarch.rpm
# yum install python-pip python-devel
# pip-python install glances
more info:http://www.vpsee.com/2013/07/a-new-system-monitoring-tool-glances-installation-and-usage/
```

```
sysstat
iostat #这个软件中包含了这个软件
```

日志监控软件
```
iostat
vmstat
atop #同top,集成了iostat, vmstat, netstat 
htop / sp htop
glances #这个很好用,可以监控温度
goaccess #for apache/nginx/lighttp
dstat  # yum install dstat, repoforge repo
```

linux帮助命令
```
man/page
whereis
type -a #这个可以查找所以的命令位置
whatis #这个可以解释一组命令
which #查找当前path里面的可执行文件
type file #如果用whereis找不到可以先看看文件类型
nm  #查看.o文件中调用了哪些程序
```

history
```
HISTFILE stores the path to the history file
HISTSIZE stores the maximum number of events to save in the internal history
SAVEHIST stores the maximum number of events to save in the history file
# 最常用的10个命令
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
set 和 typeset 的区别
set 显示当前系统的环境变量
typeset 还显示这些系统变量的类型
typeset -aU path 可以去掉重复的 PATH
```

vimdiff
```
vimdiff =(gcc -march=native -Q --help=target) =(gcc -march=core2 -Q --help=target) #比较两个非文件不同
diff =(typeset) =(set) #也是可以比较的，但是不够vimdiff详细
sdiff # diff的垂直展示
```

xargs
```
echo 'a.json' | > newfile.txt
echo 'a.json' | xargs cat
echo 'a.json' | cat
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
二进制 text2bin test2hex
//有格式的解释二进制文件: [ [iteration_count]/byte_count ] "format"
hexdump -e '1/1 "%i " 1/2 "%i " 2/4 "%i "  "\n"' data2bin
xxd
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
killall
killall -TERM mysqld #关闭mysql进程
kill -TERM/15 PID
kill -KILLL/9 PID
killadd5
pkill progress_name
pgrep progress_name # return the progress pid
pstree -p 查看当前进程
ps -ef f  # 显示ascii进程图
jobs -l(列出id)查看后台运行情况
fg [%]id 把id拿到前台来
bg 显示fg要放在前面的,其中一个功能是
```

top的参数理解
```
NI 代表的是niceless, "-19/-20"(highest priority, 耗资源多) and "19/20"(lowest priority)
use "nice -n 15 command_to_execute" when start
use "renice 0 PID_to_prioritize" when already executing
```


常见的日志位置
```
/var/log/message      – 记录系统日志或当前活动日志。
/var/log/auth.log     – 身份认证日志。
/var/log/kern.log     – 内核日志。
/var/log/cron.log     – Crond 日志 (cron 任务).
/var/log/maillog      – 邮件服务器日志。
/var/log/boot.log     – 系统启动日志。
/var/log/mysqld.log   – MySQL数据库服务器日志。
/var/log/secure       – 认证日志。
/var/log/wtmp or wtmp – 登录日志。
/var/log/yum.log      – Yum 日志。

/usr unix shared resources
/opt editable text configuration
```

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

####### vim: set expandtab:
