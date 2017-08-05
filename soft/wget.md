# Wget

```
wget -r -np -nd --accept=iso http://example.com/centos-5/i386/
-np 的作用是不遍历父目录
-nd 表示不在本机重新创建目录结构
--accept=iso 选项，这指示 wget 仅下载 i386 目录中所有扩展名为 iso 的文件。你也可以指定多个扩展名，只需用逗号分隔即可。
```

## REF
- https://linuxtoy.org/archives/wget-tips.html
