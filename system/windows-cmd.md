# windows command helpper

## 设置环境变量
```
# PowserShell
$env:ENABLE_TOOL="true"

# cmd
set ENABLE_FLUTTER_DESKTOP=true
```

## Command Setting
设置活动页，也就是设置当前内容的编码, 如果是中文系统，就是 936，如果想正常显示其它字体，就可以用 65001 应该是 unicode 的代码
```
chcp 65001
```

## alias
```
DOSKEY n=npm run $*
```

## type [drive:][path]filename
```
Displays the contents of a text file or files.
```

## find a str in all file
```
grep str . -r
```

## make a link use mklink
```
rem Jump, may case command line or posix program wrong
mklink /J destdir srcdir

rem Syslinked, can use on command
mklink /D destdir srcdir

rem link a file
mklink destfile srcfile
```
删除 symbolic link  要小心，如果用 del 会删除原目录，使用 rmdir 可以只删除 symbolic link

## Copy and Paste
自带 C:\Windows\system32\clip.exe
```
echo Hello | clip # copy Hello to clip
clip < example.txt # 类似 cat example.txt | clip
echo | clip # 清空
```


## Res
- @henix 提供的版本非常完善 https://blog.henix.info/blog/windows-cmdbasic/_.html
