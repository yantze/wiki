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
列出当前目录，会遍历所有文件，变得很长
```
ls dir
```

可以用 lsd ，不会遍历, 类似的还有 lsf, lsjson
```
rclone lsd custom-name: --max-depth 1
```

## Others
使用 b2 上传只写权限的命令（ rclone 还不支持只写，所以权益用这个了）
```
b2 upload-file ./bin b2:/bucket_name/folder/bin
```

## Ref
https://rclone.org/docs/
