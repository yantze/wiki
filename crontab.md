# Crontab参数详解

> Linux定时任务命令 crontab——操作每个用户的守护程序和该执行的时间表。
author: 蜂巢  /  yadgen

## Format
crontab文件的格式：M H D m d cmd.
```
时程表的基本格式 :
*   *   *   *   *   program
分　时　日　月　周　命令
```

```
第1列表示分钟1～59 每分钟用*或者 */1表示
第2列表示小时1～23（0表示0点）
第3列表示日期1～31
第4列表示月份1～12
第5列标识号星期0～6（0表示星期天）
第6列要运行的命令
当第1列 为 * 时表示每分钟都要执行 program,第2列为 * 时表示每小时都要执行程式,其余类推
当第1列为 a-b 时表示从第 a 分钟到第 b 分钟这段时间内要执行,第2列为 a-b 时表示从第 a 到第 b 小时都要执行,其余类推
当第1列为 */n 时表示每 n 分钟个时间间隔执行一次,第2列 为 */n 表示每 n 小时个时间间隔执行一次,其余类推
当第1列为 a, b, c,… 时表示第 a, b, c,… 分钟要执行,第2列 为 a, b, c,… 时表示第 a, b, c…个小时要执行,其余类推
```

## Argument
具体的部分参数说明如下：
```
crontab file [-u user]-用指定的文件替代目前的crontab。 
crontab-[-u user]-用标准输入替代目前的crontab. Crontab –
crontab- l[user]-列出用户目前的crontab. 
crontab-e[user]-编辑用户目前的crontab. 
crontab-d[user]-删除用户目前的crontab. 
crontab-c dir- 指定crontab的目录。 
```

服务器不重启的情况下定时自动重启apache及mysql服务，其实也大同小异。具体步骤如下：

1. 每天的12点及16点重启apache及mysql服务
```bash
# cd /opt/
# vim reboot.txt
```
在reboot.txt文件中输入下面的内容后保存
```
0 12 * * * service httpd restart
0 12 * * * service mysqld restart
0 16 * * * service httpd restart
0 16 * * * service mysqld restart
```


2. 把新建的文件加入到cron服务中
```bash
# crontab reboot.txt
# crontab -l
0 12 * * * service httpd restart
0 12 * * * service mysqld restart
0 16 * * * service httpd restart
0 16 * * * service mysqld restart
```


3. 重启cron服务
```
# /sbin/service crond restart
```


> 补充说明：
cron是一个linux下的定时执行工具，可以在无需人工干预的情况下运行作业。由于Cron 是Linux的内置服务，但它不自动起来，可以用以下的方法启动、关闭这个服务：
```
/sbin/service crond start //启动服务
/sbin/service crond stop //关闭服务
/sbin/service crond restart //重启服务
/sbin/service crond reload //重新载入配置
```

crontab文件的一些例子：
```
# 每晚的21:30重启lighttpd 。
30 21 * * * /usr/local/etc/rc.d/lighttpd restart

# 每月1、10、22日的4 : 45重启lighttpd 。
45 4 1,10,22 * * /usr/local/etc/rc.d/lighttpd restart

# 每周六、周日的1 : 10重启lighttpd 。
10 1 * * 6,0 /usr/local/etc/rc.d/lighttpd restart

# 每天18 : 00至23 : 00之间每隔30分钟重启lighttpd 。
0,30 18-23 * * * /usr/local/etc/rc.d/lighttpd restart

# 每星期六的11 : 00 pm重启lighttpd 。
0 23 * * 6 /usr/local/etc/rc.d/lighttpd restart

# 每一小时重启lighttpd
* */1 * * * /usr/local/etc/rc.d/lighttpd restart

# 晚上11点到早上7点之间，每隔一小时重启lighttpd
* 23-7/1 * * * /usr/local/etc/rc.d/lighttpd restart

# 每月的4号与每周一到周三的11点重启lighttpd
0 11 4 * mon-wed /usr/local/etc/rc.d/lighttpd restart

# 一月一号的4点重启lighttpd
0 4 1 jan * /usr/local/etc/rc.d/lighttpd restart
```

## /etc/crontab 文件
在/etc目录下有一个crontab文件，这里存放有系统运行的一些调度程序。每个用户可以建立自己的调度crontab。
```
[root@dave ~]# cat /etc/crontab
SHELL=/bin/bash
PATH=/sbin:/bin:/usr/sbin:/usr/bin
MAILTO=root
HOME=/
# run-parts
01 * * * * root run-parts /etc/cron.hourly
02 4 * * * root run-parts /etc/cron.daily
22 4 * * 0 root run-parts /etc/cron.weekly
42 4 1 * * root run-parts /etc/cron.monthly
```

## /etc/cron.deny 和 /etc/cron.allow 文件
```
/etc/cron.deny 表示不能使用crontab 命令的用户
/etc/cron.allow 表示能使用crontab的用户。
如果两个文件同时存在，那么/etc/cron.allow 优先。
如果两个文件都不存在，那么只有超级用户可以安排作业。
```

每个用户都会生成一个自己的crontab 文件。这些文件在/var/spool/cron目录下：
```
0,5,10,15,20,25,30,35,40,45,50,55  * * * * php app/Console/cake.php send_emails

# equal

*/5  * * * * php app/Console/cake.php send_emails
```
