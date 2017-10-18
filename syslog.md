Syslog
---

## Linux
- Red Hat family distributions (including CentOS and Fedora) use /var/log/messages and /var/log/secure
- Debian-family distributions use /var/log/syslog and /var/log/auth.log.
- 使用了 `systemd`，日志保存在了二进制文件格式中，可能需要 `journalctl` 查看

## macOS
- command
    ```
    tail /var/log/system.log
    ```
- GUI app: console
    ```
    open /Applications/Utilities/Console.app
    ```
- Activity Monitor [GUI]


## ios device
- Apple Configurator 2 from Mac App Store
- brew install libimobiledevice ; idevicesyslog
> 如何获取系统 syslog 日志：https://trello.com/c/3tYMsz5g/30-syslog
