
# nc使用 - Emmoblin Blog

发送端  
`cat backup.iso | nc -l 3333`  
接收端  
`nc 192.168.0.1 3333 > backup.iso`  

  
显示传送进度，可以使用管道监控,pv命令  
以上命令修改为：  
`cat backup.iso | pv -b | nc -l 3333`  
`nc 192.168.0.1 3333 | pv -b > backup.iso`  

  
本地打包文件，传送到远端  
`tar -czf - /etc/ | nc -l 3333`  
接收端  
`nc 192.168.0.1 3333 | pv -b > mybackup.tar.gz`  

端口扫描
扫描端口，并返回相关信息
nc -z 192.168.0.1 80-90

资料
http://www.sans.org/security-resources/sec560/netcat\_cheat\_sheet\_v1.pdf
http://www.g-loaded.eu/2006/11/06/netcat-a-couple-of-useful-examples/

[Source](http://emmoblin.github.io/blog/2013/02/27/netcat/ "Permalink to nc使用 - Emmoblin Blog")
