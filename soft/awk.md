# AWK

awk 格式化输出 http://coolshell.cn/articles/9070.html


## SYNOPSIS
```
awk [-F 分隔符] ‘commands’ input-file(s)
```
```
awk -f awk-script-file input-file
```

## Basic

```
cat file | awk '/something/ {print $2}'
cat file | awk '/something/'

# -v: invert match in grep
cat file | awk '! /something/'

awk -F ':' '{print "filename:" FILENAME ",linenumber:" NR ",columns:" NF ",linecontent:"$0}' /etc/passwd
```

- last col
```
echo -e 'one two three\nfour five six\nseven eight nine' | awk '{print $NF}'
```

## Res
- http://www.isjian.com/linux/awk-format-print/


## Ref
- https://blog.gslin.org/archives/2017/07/07/7431/%e7%94%a8-awk-%e5%8f%96%e4%bb%a3-grep-%e7%9a%84%e5%b7%a5%e4%bd%9c/
- http://wiki.jikexueyuan.com/project/shell-learning/awk-command.html
