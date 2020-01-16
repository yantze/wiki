# watch

监听程序输出内容变化


```bash
watch command # 实时监视命令结果变动，可以调节更新频率
watch -d -n 2 'ls -rtlh | tail'  # 检查某个文件夹中文件的改变
watch -d -n 2 ifconfig en0 # 在排查 WiFi 设置故障时要监测网络设置的更改
```

## See Also
- [https://github.com/jlevy/the-art-of-command-line/blob/master/README-zh.md](https://github.com/jlevy/the-art-of-command-line/blob/master/README-zh.md)
