杀掉进程
```
ps -ef | grep glances | grep -v grep | awk '{print $2}' | xargs kill -9
```

列出 ip 地址
```
ifconfig | awk '/eth0/{getline;gsub(/addr:/,"",$2);print $2}'
```

便捷函数
```
function jz() {
echo "hahah"
echo $*
}

~$ jz hahha
```

终端程序进程化
```
nohup php myprog.php > log.txt &
// 单独 php myprog.php， ctrl + c 会中断程序执行，并终止子进程
// php myprog.php &，这样执行程序虽然也是转为后台运行，实际上是依赖终端的，当用户退出终端时进程就会被杀掉。
```
