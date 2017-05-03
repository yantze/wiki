# vsftpd server

装vsftpd 安全ftp服务器
设置user_list_deny = NO
设置同目录下user_list添加用户，linux的用户，比如 vsftp
在shell下
useradd -d /var/www/html/login vsftp
passwd 
chown vsftp /var/www/html/login
就好了
