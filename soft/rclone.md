# rclone

> 备份数据到云端，可以本地透明加密后备份，支持大部分云端存储。

## config file
```
~/.config/rclone/rclone.conf
```

## rclone mount
如果是 mac 需要先安装 FUSE
```
rclone mount b2:dir ~/b2
umount ~/b2
```

## encrypt sync
```
rclone sync ./document b3:yantze
```

## ls dir
```
rclone ls b2_code:bucket-name
```
