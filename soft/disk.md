Disk tools
---

- df
- dd
- diskutil

## Diskutil
```
diskutil list [disk0]
diskutil info [disk0]
diskutil umount [disk1] # `unmountDisk` all volumes, `eject` a disk


```

## Linux 分区、格式化和挂载磁盘

### 分区
`fdisk -l` 查看是否有新的无分区磁盘，并且拿到未分区的磁盘路径 `/dev/sdb`
```
fdisk -l # disk info
df -T # check filesystem type

# 使用一个磁盘一个分区
fdisk /dev/sdb
n # 建一个新的分区
p # 选择主分区
# 回车，选择默认创建一个分区
# 回车，选择默认开始扇区
wq # 写入并且退出

fdisk -l # disk info
```

### 格式化并设置文件系统
```
mkfs.ext3 /dev/sdb1

# 让 Windows 和 Mac 共享写入读取，使用 vfat 系统：
mkfs.vfat
```

### 挂载磁盘
- fstab
> `/etc/fstab` 每个系统都不一样，一般
```
cp /etc/fstab /etc/fstab.bak
echo /dev/sdb1 /mnt ext3 defaults 0 0 >> /etc/fstab
mount /dev/sdb1 /mnt
```

- systemd
> https://blog.fpmurphy.com/2014/04/system-d-and-etcfstab.html

### 扩容磁盘
可以实现无损资料扩容，不过最好备份
```
umount /mnt
df -hl # 确认是否被卸载
fdisk /dev/sdb1 # 删除原来的分区
e2fsck -f /dev/sdb1 # d, n, 其它默认, wq
resize2fs /dev/sdb1
mount /dev/sdb1 /mnt
df -hl
```
https://bbs.aliyun.com/read/240088.html

### 修复磁盘
```
fsck
```



## more
- mount - check mounted disk
- drutil - dvd tools

