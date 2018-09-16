# rclone

> 备份数据到云端，可以本地透明加密后备份，支持大部分云端存储。

## config file
```
~/.config/rclone/rclone.conf
```

## rclone mount
```
rclone mount b2:dir ~/b2
umount ~/b2
```

## encrypt sync
```
rclone sync ./document b3:yantze
```

## Basic
列出当前目录
```
rclone lsd custom-name: --max-depth 1
```

## Ref
https://rclone.org/docs/
