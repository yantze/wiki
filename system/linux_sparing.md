# Low frequency commands
> 常用的命令在LINUX_TIPS.md文件中

### 重啓的方法
```
sudo reboot
sudo shutdown -r now
sudo shutdown -r -f now # sudo shutdown -r -F now 

sudo su - # 先切成 root，不然下述命令寫不進去
echo 1 > /proc/sys/kernel/sysrq
echo b > /proc/sysrq-trigger # 立刻關掉電源。 o 直接開機。

echo 1 | sudo tee /proc/sys/kernel/sysrq # 不用進入root賬戶
echo b | sudo tee /proc/sysrq-trigger
```

### 开启 coredump
- 查看各个参数 ulimit -a
- 设置coredump ulimit -c unlimit
- 运行错误的程序
- 查看生成 coredump
    - linux 会在当前程序运行目录生成 core.<pid> 文件
    - osx 会在 /cores/core.<pid> 生成
- 查看信息用 gdb php -c core.<pid>
- osx 用户用 lldb 才能查看 lldb php -c core.<pid>

### 解压/boot目录下的img文件
- 先用file initramfs.xxx.img查看文件类型，是gzip文件
- 改名initramfs.xxx.img.gz,使用gzip -d initramfs.xxx.img.gz
- 再检查文件类型 `file initramfs.xxx.img.gz`，是ASCII cpio文件
- 使用 `cpio -idvm < initramfs.xxx.img` 解压文件

这样也可以
```
# 提取
zcat ../initrd.gz | cpio -iv
# 创建
find . -print0 | cpio -0 -H newc -ov | gzip -c > ../initrd.gz
```

把源格式文件shift-jis轉換爲utf-8
```
iconv -f shift-jis -t utf-8 file1.cue >  file2.cue
```
或者卸载脚本里面
```
iconv -f GB2312 -t UTF-8 $1 > $1.tmp
rm -f $1
mv $1.tmp $1
```

what is col 'C'
```
ps -ef
# c column means the cpu utilization, please RTFM
```

extundelete 文件恢复工具
```
yum install e2fsprogs-devel e2fsprogs-static
http://extundelete.sourceforge.net/
# 查看删除的目录，ls -id /， 一般根目录inode为2
extundelete  /dev/sdc1  --inode 2
extundelete  /dev/sdc1  --restore-file passwd 
extundelete  /dev/sdc1  --restore-directory /ganglia-3.4.0
extundelete  /dev/sdc1  --restore-all
```
按时间恢复
```
#cd /data/
# cp /app/ganglia-3.4.0.tar.gz  /data
# date +%s
# rm -rf ganglia-3.4.0.tar.gz
# cd /mnt
# umount /data
# date +%s
# extundelete  --after 1379146740 --before 1379150555 --restore-all /dev/sdc1
```

如何找回一个误删除、但还在被进程打开的文件？
- 到/proc目录下找打开这个文件的pid下的fd目录
- ls -l /proc/<pid>/fd/ # 你会看到哪个fd是link到了这个被误删除的文件
- cp /proc/<pid>/fd/<fd> ~/myfile.txt
> 这个方法对于一些执行中的shell脚本同样有效。


生成 core dump: gcore PID
https://github.com/zendtech/ZendOptimizerPlus/issues/176
https://ma.ttias.be/generate-php-core-dumps-segfaults-php-fpm/

Linux 死机时的重启方法
```
Sys Rq 是一种叫做系统请求的东西，按住Alt-Print 的时候就相当于按住了Sys Rq 键，这个时候输入的一切都会直接由Linux 内核来处理，它可以进行许多低级操作。这个时候 reisub 中的每一个字母都是一个独立操作，他们分别表示：

unRaw       将键盘控制从Server 那里抢回来
tErminate   给所有进程发送SIGTERM 信号，让他们自己解决善后
kIll        给所有进程发送SIGKILL 信号，强制他们马上关闭
Sync        将所有数据同步至磁盘
Unmount     将所有分区挂载为只读模式
reBoot      重启

顺序固定，倒过来方便记忆 busier
```

linux屏幕亮度
```
# method 1
xbacklight -set 50

# method 2
echo 2800 > /sys/class/backlight/intel_backlight/brightness
```

## Reference
- https://major.io/2009/01/29/linux-emergency-reboot-or-shutdown-with-magic-commands/
