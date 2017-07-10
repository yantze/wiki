# windows command helpper

type [drive:][path]filename
```
Displays the contents of a text file or files.
```

find a str in all file
```
grep str . -r
```

make a link use mklink
```
rem Jump, may case command line or posix program wrong
mklink /J destdir srcdir

rem Syslinked, can use on command
mklink /D destdir srcdir
```
