# 同步文件夹

> Make file 格式

```
# author:yantze

# 原理:
# 如果有外网主机A,内网主机B
# A: www.example.com 22333
# B: 192.168.137.121 22333
# B sync to A: 普通的方法就可以了
# A rsync to B: 外网访问内网使用反向代理
# 反代说明:B先通过rproxy把A中的22334映射成B中的22333,然后A就可以通过
# ssh localhost:22334访问主机B了

# 使用方法
# B sync to A: make put/get/sync
# A rsync to B: 先在B中执行make rproxy, 然后在A中执行make rput/rget/rsync

# 文件冲突说明
# 如果目标主机中有文件更新,源主机不会覆盖文件
# 如果目标主机和源主机先后更新了同一个文件A,B,则A覆盖B,B备份在同目录下,并且不会提示

# 远程主机(主机A)
dhost=xxxx.com
# dhost=vt-cn5.vnet.link

# 目标端口
dport=22333
# 反代端口
rport=22334

rproxy:
	ssh -NfR $(rport):localhost:$(dport) $(dhost) -p $(dport)

# B sync to A
sync: get put
get:
	rsync -avuzb --exclude '*~' -e "ssh -p $(dport)" $(dhost):~/cloud ~/
put:
	rsync -Cavuzb -e "ssh -p $(dport)" . $(dhost):~/cloud

# A rsync to A
rsync: rget rput
#reverse get
rget:
	rsync -avuzb --exclude '*~' -e "ssh -p $(rport)" localhost:: ~/cloud
#reverse put
rput:
	rsync -Cavuzb -e "ssh -p $(rport)" . localhost:~/cloud

```
