Syslog
---

## Linux
- Debian-family distributions use /var/log/syslog and /var/log/auth.log.
- 使用了 `systemd`，日志保存在了二进制文件格式中，可能需要 `journalctl` 查看

Red Hat family distributions (including CentOS and Fedora) `/var/log` 日志分析
- `less /var/log/secure` 系统安全日志
- `last -f /var/log/btmp` 系统登录日志
- `utmpdump /var/log/wtmp` 系统账户登录记录, 还有可能由 utmp, 具体`man wtmp`
- `/var/log/lastlog` 直接用 `lastlog` 就可以读取, 记录所有用户的登录情况
- `vim /var/log/dmesg` 系统监视器弹出的那些启动内容,也有插入 usb 会有热插拔的信息, 也可以用 `dmesg | tail -n 20`
- `vim /var/log/secure` 比如用 `sudo command` 执行命令，就会在这里面记录详细的命令，或者外部登录 sshd 也会有记录
- /var/log/messages `/etc/rsyslog.conf` 里面说是，Log anything (except mail) of level info or higher. Global system messages.

> 日志文件名是在 `/etc/rsyslog.conf` 文件里面配置的。

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
- 如果是 macOS Sierra + iOS 10 系统，直接用 Mac 上的 Console.app 可以查看


## References

- 如何获取系统 syslog 日志：https://trello.com/c/3tYMsz5g/30-syslog
