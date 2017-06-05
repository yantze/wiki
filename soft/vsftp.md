# vsftpd server

## Install

vsftpd.conf:
```
anonymous_enable=NO
# user_list_deny = NO
```

add user:
```
# 设置同目录下user_list添加用户，linux的用户，比如 vsftp
useradd -d /var/www/html/login vsftp
passwd 
chown vsftp /var/www/html/login
```
就好了, /var/www/html/login 可以是网站的根目录
