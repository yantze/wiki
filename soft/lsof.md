---

author: yantze
os: linux, darwin

---


lsof: list open file
====================

Practical case
--------------

显示 pid/process_name 开的端口(darwin)
```
sudo lsof -i4 | grep LISTEN | grep TCP | grep process_id/process_name  // 查看监听的端口
# 不需要 -n -P 都只是让 lsof 运行得快一些
```

显示指定端口运行的 pid(darwin)
```
# lsof -i [46][protocol][@hostname|hostaddr][:service|port]
lsof -i:22 //查看22端口在运行什么程序

sudo lsof -i 4@127.0.0.1:80=8888   // List all IPv4 network files with port ranges
sudo lsof -i6                   // List all IPv6 network files
sudo lsof -i TCP:80             // To find which program is using the port 80:
sudo lsof -Pnl +M -i4           // To find listening ports

lsof -c processname // 查看processname进程现在在打开的文件
lsof -p pid         // 查看进程号pid的打开了什么文件
lsof /var           // 指定目录/文件
lsof +D <dirname>   // 看看目录下有那些打开的文件
#extend: lsof -c $processname | egrep 'w.+REG' | awk '{print $9}' | sort | uniq # only list all files

# List all files open for a particular user
lsof -u <username> # lsof -u^root 非 root 用户

# Kill all Activity of Particular User
kill -9 `lsof -t -u tecmint`

# check process port (red hat)
netstat –nltp | grep pid

# check process port (ubuntu)
netstat -anp | grep pid
```

Other
-----
[linux only] file was deleted  when the file was opened by other pid. lsof will display the fd with `(deleted)` flag. this can recovery.
```
cp /proc/<PID>/fd/<fd> ~/recovery_file
```

network
```
sudo lsof -PiTCP -sTCP:LISTEN
lsof -Pn -i4
```


Output description
------------------
```
FD - File Descriptor
lsof 输出有 FD 列，由两部分组成。
第一部分：文件解释器，用来记录文件打开的结构体。比如`1`就是记录`/dev/pts/4`的FD.还有很多其它的数字，还有其它的一些 FD ，它们并没有代表其它的意思，也没有代表其作用。
第二部分：
u - File open with Read and Write permission
r - File open with Read permission
w - File open with Write permission
W - File open with Write permission and with Write Lock on entire file
...
```
NODE
```
inode number in filesystem
```

Ref
---
* http://www.danielmiessler.com/study/lsof/

See Also
--------
* [fuser](./fuser.md)
* [netstat](./netstat.md)
