# Windows 日志查询和分析

注册表中的信息
```
regedit
计算机\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\EventLog

```
里面写了日志存储在： `%SystemRoot%\system32\winevt\Logs\`


## 第三方日志查看器
- [FullEventLogView - Event Log Viewer for Windows 10 / 7](https://www.nirsoft.net/utils/full_event_log_view.html)
- [Event Log Explorer](https://eventlogxp.com/download.html)

**软件活动查**

- 查看最近软件活动情况 [LastActivityView](https://www.nirsoft.net/utils/computer_activity_view.html)

## 蓝屏

- 1. 拿到 crash dump
C:\windows\minidump

- 2. 下载 WinDBG ，然后打开 crash dump 文件

- 3. 在 WinDBG 中输入，!analyze -v , 可能会显示某个驱动引起

- 4. 查看驱动目录
```
lmvm sentinel
```


## Res
- [Windows 和 Linux 日志分析](https://bypass007.github.io/Emergency-Response-Notes/LogAnalysis/%E7%AC%AC2%E7%AF%87%EF%BC%9ALinux%E6%97%A5%E5%BF%97%E5%88%86%E6%9E%90.html)
- [Windows系统日志被删除的其实可以恢复](https://www.freebuf.com/vuls/175560.html)

## Ref
- https://www.cnblogs.com/aspirant/p/9114936.html
- https://mos86.com/23765.html
