# 包管理的对比和共同作用

## 查找可执行文件对应的包名
yum & rpm
```bash
# 找到对应的包是 alien
rpm -qf /usr/bin/alien
rpm -q --whatprovides /etc/hosts

# 就算本地没有这个包，也可以找
yum provides /usr/bin/alien
yum whatprovides */ls

# repoquery 也有类似的功能
repoquery -f /bin/ls

# [ec2-user@ip-172-31-7-0 ~]$ repoquery -f /bin/ls
# coreutils-0:8.22-24.amzn2.x86_64
# coreutils-0:8.22-21.amzn2.x86_64
# coreutils-0:8.22-18.amzn2.x86_64
# [ec2-user@ip-172-31-7-0 ~]$ type uptime
# uptime is /usr/bin/uptime
# [ec2-user@ip-172-31-7-0 ~]$ repoquery -f /usr/bin/uptime
# procps-ng-0:3.3.10-17.amzn2.2.2.x86_64
# procps-ng-0:3.3.10-26.amzn2.x86_64
# procps-ng-0:3.3.10-16.amzn2.x86_64
# procps-ng-0:3.3.10-17.amzn2.2.x86_64
# procps-ng-0:3.3.10-17.amzn2.2.2.i686
# procps-ng-0:3.3.10-26.amzn2.i686
# [ec2-user@ip-172-31-7-0 ~]$ 
```


apt & dkpg
```bash
pkdg -S /usr/bin/uptime
```

## Ref
- https://serverfault.com/questions/973621/is-there-a-yum-command-equivalent-to-rpm-qf-filename-repo
- https://peteris.rocks/blog/htop/
