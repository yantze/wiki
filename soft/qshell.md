# qshell 七牛云储存

```
# 保存单用户鉴权
qshell account ak sk

# 上传本地文件到指定空间, 可指定上传入口地址，比如北美
qshell fput bucket-name qiniu.jpg /Users/jemy/Documents/qiniu.jpg

# 同fput，但上传大文件，分片上传
# https://github.com/qiniu/qshell/blob/master/docs/rput.md
qshell rput bucket-name qiniu.mp4 /Users/jemy/Documents/qiniu.mp4

```
