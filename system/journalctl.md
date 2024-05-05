# Journalclt
> see log with systemctl

## 关于系统启动
1. 重演你的系统启动的所有消息
```shell
journalctl -b
```
通过命令 journalctl -b -1 可以复审前一次启动，journalctl -b -2 可以复审倒数第 2 次启动，以此类推

2. 过滤器
```shell
journalctl _PID=1
```

3. 启动耗时分析
```shell
systemd-analyze blame
```

## 关于应用
Just use the journalctl command, as in:
```
journalctl -u service-name.service
```

Or, to see only log messages for the current boot:
```
journalctl -u service-name.service -b
```

For things named <something>.service, you can actually just use <something>, as in:
```
journalctl -u service-name
```
But for other sorts of units (sockets, targets, timers, etc), you need to be explicit.

更新日志跟随(follow)
```
journalctl -u xxx -f
```


## Service path
```
/lib/systemd/system
```
