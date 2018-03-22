# Virtual Box

## Control by Terminal
不启动画面
```
VBoxManage startvm "Ubuntu Server" --type headless
```
暂停系统
```
VBoxManage controlvm "Ubuntu Server" pause --type headless
```
## 其它特性
- 可以不用启动虚拟机就复制里面的文件
