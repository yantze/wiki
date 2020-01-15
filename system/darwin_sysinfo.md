# MacOS 系统信息

```bash
# 版本信息
sw_vers

# 安装的软件列表
/usr/sbin/pkgutil --packages
```

## sysctl
通过 Tab 自动补全，自动显示 sysctl 的列表。比如查看 CPU 型号:
```
sysctl -n machdep.cpu.brand_string
```
