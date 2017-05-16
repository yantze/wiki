# Windows Command Prompt


## Case

通过端口找程序，后面的id就是程序的进程
```
netstat-aon | findstr "3306"
```

通过tasklist | findstr PID可以找到相应的程序
```
tskill pid
```

转换 Prompt 输出格式 cp936 转换为 utf8
1. 使用 chcp 命令将当前的内码修改为 UTF-8，UTF-8 的内码在 Windows 中为 65001
2. 在控制台的标题栏上单击右键，选择“默认值->字体”，将字体修改为“新宋体”

通过wmic管理程序
- 在cmd中输入wmic,再输入process,可以显示进程

## mklink
> 类似 linux 的 软链

## Plugin: [Clink](http://mridgers.github.io/clink)
> 使得操作行为类似 Bash


