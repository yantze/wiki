netstat
---

## Practical case
```
netstat -anv | grep $PORT # [darwin]
netstat -pntl | grep $PORT # [linux]
netstat -an # 本机所有网络连接
netstat -rn # 本机路由表
```

参数
```
-t TCP
-u UDP
-l 监听
-n ip和端口
-r 路由
-p 程序名列 [linux]
```

查看http的并发请求数及其TCP连接状态
```
netstat -n | awk '/^tcp/ {++S[$NF]} END {for(a in S) print a, S[a]}'
```

查看IP连接数
```
netstat -n | awk '/^tcp/ {print $5}'| awk -F: '{print $1}' | sort | uniq -c | sort -rn
```

## See Also
- [lsof](./lsof.md)
- [fuser](./fuser.md)
