# Systemctl

## enable / disable
service / target 开机启动和禁止启动

## mask / unmask
会直接禁用整个服务，手动启用都不行的


### 在 Ubuntu 中修改配置
```
/lib/systemd/system
/etc/systemd/system
```

如果要更新一个 system service 文件，可以
- 拷贝 `/lib/systemd/system/xxx.service` to `/etc/systemd/system`
- 或者路径是 `/usr/lib/systemd/system/xxx.service`

或者使用 override 方式
- 创建文件夹 `/etc/systemd/system/xxx.service.d`
- 拷贝 `/lib/systemd/system/xxx.service` to `/etc/systemd/system/xxx.service.d/override.conf`
- override.conf 只需要需要改的值

然后重载 daemon
```
sudo systemctl daemon-reload
```

### 日志
一般可以通过status 查看
```
systemctl status xxx.service
```

但碰到一些看不到错误的地方，可以通过查看对应的日志
```
journalctl -u xxx
```
最后实在找不到原因，可以通过 [syslog](./syslog.md) 实现问题的查找

## See Also
- [syslog](./syslog.md)
- [journalctl](./journalctl.md)

