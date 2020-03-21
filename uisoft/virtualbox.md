# Virtual Box

## Control by Terminal
系统控制
```
# 不启动画面
VBoxManage startvm "Win10D" --type headless

# 暂停
VBoxManage controlvm "Win10D" pause

# 继续
VBoxManage controlvm "Win10D" resume

# Poweroff
VBoxManage controlvm "Win10D" poweroff
```

## 其它特性
- 可以不用启动虚拟机就复制里面的文件
