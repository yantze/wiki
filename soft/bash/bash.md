通过上下键来搜索
```
$ vim ~/.inputrc
"\e[A": history-search-backward
"\e[B": history-search-forward
set show-all-if-ambiguous on
set completion-ignore-case on
```

终端程序进程化
```
nohup php myprog.php > log.txt &
// 单独 php myprog.php， ctrl + c 会中断程序执行，并终止子进程
// php myprog.php &，这样执行程序虽然也是转为后台运行，实际上是依赖终端的，当用户退出终端时进程就会被杀掉。
```

