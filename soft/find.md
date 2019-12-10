---
author: yantze
os: linux, darwin

---


# find Command

> mac 可以不用斜杠

## Basic
删除 vim 的 un~
```
find . -type f -name "*.un~" -exec rm {} \;
```

搜索和过滤一部分结果，看一个 wiki 搜索例子：
```
WIKIHOME="/Users/yantze/wiki"
keyword="*progra*"
filepath=$(find "$WIKIHOME" -type f \
    \( -iname "$keyword" -not -iname "*.js" \) \
    -not -path "$WIKIHOME/node_modules/*" | \
    grep -v "un~" | \
    grep -v "\.git/" | \
    head -n 1)
```
- 这里是搜索 "*progra*" 的文件名，但不包括 .js 结尾的文件
- `grep -v` 不要显示 grep 查找的内容

了解一点这个命令的基本知识：

| expr | desc      |
|---|---|
| ( expr )      | Force precedence. True if expr is true      |
| expr -not expr <br>或者 ! expr     | True if expr is false. In some shells, it is necessary to protect the ‘!’ from shell interpretation by quoting it.      |
| expr1 -and expr2      | expr2 is not evaluated if expr1 is false.      |
| expr1 -or expr2      | expr2 is not evaluated if expr1 is true.      |


## Advance
```
find . -name "*.log" -mtime +5 -ok rm {} \;
find . -name "passwd*" -exec grep "root" {} \;
find . -name "*.log" -exec mv {} .. \;
find . -name "*.log" -exec cp {} test3 \;
find . -name "*.log" -print0 | xargs -0 cat | wc -l
find . -name '*.JPG' -exec rename "s/.JPG/.jpg/g" \{\} \; //修改文件扩展名

find . -type f -exec ls -l {} \;
find . -type f -mtime +14 -exec rm {} \;

find . -depth; 这个可以不让find输出文件夹

find . -perm /u+x -type f -exec rm {} \;  //删除可执行文件
find . -perm /u+x -maxdepth 1 -type f -exec ag xxx {} \;  //查找当前目录的文件

# 批量重命名
find . -type f -name 'file*' -exec sh -c 'x="{}"; mv "$x" "${x}_renamed"' \;
find . -type f | sed -e "p;s/jade/pug/" | xargs -n2 mv

for filename in '*eee*'; do newname=`echo $filename|sed -n 's/eee/EEE/p'`; mv $filename $newname;done
for  i in `ls|grep glyphicons` ; echo $i

# recent file
-mtime -2 修改时间在2天内
-mtime +3 修改时间在3天前
```

大文件
```
find . -type f -size +100M
```

Syntax `not`
```
find . -not -name 'xxx'
```

Pretty list
```
find . -path "*/\.*" -prune -o -type f -print -o -type l -print | sed s/^..//
```


## Reference
- http://www.cnblogs.com/peida/archive/2012/11/14/2769248.html
- https://stackoverflow.com/questions/4793892/recursively-rename-files-using-find-and-sed
- https://www.cyberciti.biz/faq/find-command-exclude-ignore-files/
