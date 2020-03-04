# MacOS 系统信息

```bash
# 版本信息
sw_vers

# 安装的软件列表
/usr/sbin/pkgutil --packages
```

## ioreg
```
# 列出所有 usb 列表
ioreg -p IOUSB -l -w 0
```

## sysctl
通过 Tab 自动补全，自动显示 sysctl 的列表。比如查看 CPU 型号:
```
sysctl -n machdep.cpu.brand_string
```

## 查看系统信息
- `system_profiler SPUSBDataType`
- 如果使用 nodejs，可以通过包 [systeminformation](https://github.com/sebhildebrandt/systeminformation/) 获取系统信息

## Ref
- https://apple.stackexchange.com/questions/271252/disconnect-connect-usb-device-from-command-line
