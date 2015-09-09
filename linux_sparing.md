#少用的一些命令
常用的命令在LINUX_TIPS.md文件中

###解压/boot目录下的img文件
先用file initramfs.xxx.img查看文件类型，是gzip文件
改名initramfs.xxx.img.gz,使用gzip -d initramfs.xxx.img.gz
再检查文件类型file initramfs.xxx.img.gz，是ASCII cpio文件
使用cpio -idvm < initramfs.xxx.img解压文件

这样也可以
```
# 提取
zcat ../initrd.gz | cpio -iv
# 创建
find . -print0 | cpio -0 -H newc -ov | gzip -c > ../initrd.gz
```

###把源格式文件shift-jis轉換爲utf-8
iconv -f shift-jis -t utf-8 file1.cue >  file2.cue


###
ps -ef/ c column means the cpu utilization, please RTFM

###内存不够,外加添加虚拟内存方法
g++: internal compiler error: Killed (program cc1plus)
Please submit a full bug report,
 
主要原因大体上是因为内存不足,有点坑 临时使用交换分区来解决吧
 
sudo dd if=/dev/zero of=/swapfile bs=64M count=16
sudo mkswap /swapfile
sudo swapon /swapfile

After compiling, you may wish to

Code:
sudo swapoff /swapfile
sudo rm /swapfile

# linux找出两个文件中相同的行(diff相反)
grep -f file.a file.b

# extundelete 文件恢复工具
yum install e2fsprogs-devel e2fsprogs-static
http://extundelete.sourceforge.net/
# 查看删除的目录，ls -id /， 一般根目录inode为2
extundelete  /dev/sdc1  --inode 2
extundelete  /dev/sdc1  --restore-file passwd 
extundelete  /dev/sdc1  --restore-directory /ganglia-3.4.0
extundelete  /dev/sdc1  --restore-all
# 按时间恢复
[root@cloud1 ~]#cd /data/
[root@cloud1 data]# cp /app/ganglia-3.4.0.tar.gz  /data
[root@cloud1 data]# date +%s
1379150309
[root@cloud1 data]# rm -rf ganglia-3.4.0.tar.gz
[root@cloud1 data]# cd /mnt
[root@cloud1 mnt]# umount /data
[root@cloud1 mnt]# date +%s
1379150340
[root@cloud1 mnt]# extundelete  --after 1379146740 --before 1379150555 --restore-all /dev/sdc1

【如何找回一个误删除、但还在被进程打开的文件？】 到/proc目录下找打开这个文件的pid下的fd目录，然后ls -l /proc/<pid>/fd/ 你会看到哪个fd是link到了这个被误删除的文件，然后：cp /proc/<pid>/fd/<fd> ~/myfile.txt 。这个方法对于一些执行中的shell脚本同样有效。
