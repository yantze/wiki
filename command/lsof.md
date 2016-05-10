```
lsof list open file 可以使用lsof -i 查看网络的信息
lsof -i:22 //查看22端口在运行什么程序
lsof -c abc //查看abc进程现在在打开的文件
lsof -p 12 //查看进程号为12的打开了什么文件
```

```
# List all IPv4 network files
sudo lsof -i4

# List all IPv6 network files
sudo lsof -i6

# To find listening ports:
lsof -Pnl +M -i4

# To find which program is using the port 80:
lsof -i TCP:80

# List all processes accessing a particular file/directory
lsof </path/to/file>

# List all files open for a particular user
lsof -u <username>

# List all files/network connections a given process is using
lsof -c <command-name>

# See this primer: http://www.danielmiessler.com/study/lsof/
# for a number of other useful lsof tips
```
