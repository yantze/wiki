Syslog
---

## Linux
- Red Hat family distributions (including CentOS and Fedora) use /var/log/messages and /var/log/secure
- Debian-family distributions use /var/log/syslog and /var/log/auth.log.
- 使用了 `systemd`，日志保存在了二进制文件格式中，可能需要 `journalctl` 查看

RedHat 系 `/var/log` 日志分析
- `less /var/log/secure` 系统安全日志
- `last -f /var/log/btmp` 系统登录日志
- `utmpdump /var/log/wtmp` 系统账户登录记录, 还有可能由 utmp, 具体`man wtmp`
- `/var/log/lastlog` 直接用 `lastlog` 就可以读取, 记录所有用户的登录情况
- `vim /var/log/dmesg` 系统监视器弹出的那些启动内容
- `vim /var/log/secure` 比如用 `sudo command` 执行命令，就会在这里面记录详细的命令，或者外部登录 sshd 也会有记录

## macOS
- command
    ```
    tail /var/log/system.log
    ```
- GUI app: console
    ```
    open /Applications/Utilities/Console.app --args arg1 arg2
    ```
- Activity Monitor [GUI]


## ios device
- Apple Configurator 2 from Mac App Store
- brew install libimobiledevice ; idevicesyslog
> 如何获取系统 syslog 日志：https://trello.com/c/3tYMsz5g/30-syslog
