# Samba

Linux挂载samba
```
# apt-get install cifs-utils 
$ mount -t cifs -o username="guest",password="guest" //192.168.11.1/download /root/download/
```

