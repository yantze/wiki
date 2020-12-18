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

## NVRAM
是一个在电脑启动的时候，读取配置的内存。比如音量在之前设置为静音，重启就不会有声音了。

如果是因为volume or screen resolution settings 问题，清除 nvram 是一个好的解决方案

通过`nvram -xp` 显示，和 `nvram -c` 清除。也可以在启动时按住 `Command, Option, P, and R` 重置


## 查看系统信息
- `system_profiler SPUSBDataType`
- 如果使用 nodejs，可以通过包 [systeminformation](https://github.com/sebhildebrandt/systeminformation/) 获取系统信息

## Ref
- https://apple.stackexchange.com/questions/271252/disconnect-connect-usb-device-from-command-line
- https://www.howtogeek.com/284948/what-is-nvram-and-when-should-i-reset-it-on-my-mac/
