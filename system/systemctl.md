# Systemctl

### 在 Ubuntu 中修改配置
```
/lib/systemd/system
```

如果要更新一个 system service 文件，可以
- 拷贝 `/lib/systemd/system/xxx.service` to `/etc/systemd/system`
- 或者路径是 `/usr/lib/systemd/system/xxx.service`


或者使用 override 方式
- 创建文件夹 `/etc/systemd/system/xxx.service.d`
- 拷贝 `/lib/systemd/system/xxx.service` to `/etc/systemd/system/xxx.service.d/override.conf`
- override.conf 只需要需要改的值
