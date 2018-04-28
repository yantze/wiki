# windows command helpper

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
