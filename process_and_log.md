# Process and Log


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



日志监控软件
```
vmstat sysstat iostat # 是一个软件包
top //shift+p 进程排序 /shift+m 内存排序, <,> 选择哪个排序, r reverse, top -a start sort by mem
atop #同top,集成了iostat, vmstat, netstat 
htop / sp htop
glances #这个很好用,可以监控温度
goaccess #for apache/nginx/lighttp
dstat  # yum install dstat, repoforge repo
ngtop
```

glances
```
su root
# rpm -ivh http://fr2.rpmfind.net/linux/epel/6/x86_64/epel-release-6-7.noarch.rpm
# yum install python-pip python-devel
# pip-python install glances
more info:http://www.vpsee.com/2013/07/a-new-system-monitoring-tool-glances-installation-and-usage/
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


## See Also
- [free](./soft/free.md)
