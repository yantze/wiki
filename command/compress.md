Compress
---

### Bored with "tar -zxvf" for .tar.gz, "tar -xvjf" for .tar.bz2 or something else?
```bash
extract () {
  if [ -f $1 ] ; then
      case $1 in
          *.tar.bz2)   tar xvjf $1    ;;
          *.tar.gz)    tar xvzf $1    ;;
          *.tar.xz)    tar -Jxvf $1   ;;
          *.tar.Z)     tar zxvf $1    ;;
          *.bz2)       bunzip2 $1     ;;
          *.rar)       unrar x $1     ;;
          *.gz)        gunzip $1      ;;
          *.tar)       tar xvf $1     ;;
          *.tbz2)      tar xvjf $1    ;;
          *.tgz)       tar xvzf $1    ;;
          *.zip)       unzip $1       ;;
          *.Z)         uncompress $1  ;;
          *.7z)        7za x $1        ;;
          *.cab)       cabextract $1  ;;
          *.arj)       unarj $1       ;;
          *.lzh)       lha e $1       ;;
          *)           echo "don't know how to extract '$1'…" ;;
      esac
  else
      echo "'$1' is not a valid file!"
  fi
}
```
> oh-my-zsh 添加插件extract提供同样的功能。

### some useful compress command[^1]
```
.tar (僅打包，無壓縮)
套件名稱：tar。
打包：
$ tar cvf FileName.tar DirName
解包：
$ tar xvf FileName.tar

.gz
套件名稱：gzip。
壓縮
$ gzip FileName
解壓縮 1：
$ gunzip FileName.gz
解壓縮 2：
$ gzip -d FileName.gz


.tar.gz
套件名稱：gzip。
壓縮：
$ tar zcvf FileName.tar.gz DirName
解壓縮：
$ tar zxvf FileName.tar.gz


bz
壓縮：unkown。
解壓縮 1：
$ bzip2 -d FileName.bz
解壓縮 2：
$ bunzip2 FileName.bz


.tar.bz
壓縮：unkown。
解壓縮：
$ tar jxvf FileName.tar.bz


.bz2
套件名稱：bzip2。
壓縮：
$ bzip2 -z FileName
解壓縮 1：
$ bzip2 -d FileName.bz2
解壓縮 2：
$ bunzip2 FileName.bz2


.tar.bz2
套件名稱：bzip2。
壓縮：
$ tar jcvf FileName.tar.bz2 DirName
解壓縮：
$ tar jxvf FileName.tar.bz2


.xz
套件名稱：xz-utils。
壓縮：
$ xz -z FileName
解壓縮：
$ xz -d FileName.xz


.tar.xz
套件名稱：xz-utils。
壓縮：
$ tar Jcvf FileName.tar.xz DirName
解壓縮：
$ tar Jxvf FileName.tar.xz


.Z
壓縮：compress FileName
解壓縮：
$ uncompress FileName.Z


.tar.Z
壓縮：
$ tar Zcvf FileName.tar.Z DirName
解壓縮：
$ tar Zxvf FileName.tar.Z


.tgz
套件名稱：gzip。
壓縮：
$ tar zcvf FileName.tgz FileName
解壓縮：
$ tar zxvf FileName.tgz


.tar.tgz
套件名稱：gzip。
壓縮：
$ tar zcvf FileName.tar.tgz FileName
解壓縮：
$ tar zxvf FileName.tar.tgz


.7z
套件名稱：p7zip-full。
壓縮：
$ 7z a FileName.7z FileName
使用密碼 (PASSWORD) 壓縮：
$ 7z a FileName.7z FileName -pPASSWORD
解壓縮：
$ 7z x FileName.7z


.zip
套件名稱：zip。
壓縮：
$ zip FileName.zip DirName
解壓縮：
$ unzip FileName.zip


.rar
套件名稱：rar, unrar。
壓縮：
$ rar a FileName.rar DirName
解壓縮 1：
$ rar e FileName.rar
解壓縮 2：
$ unrar e FileName.rar
解壓縮 3：在指定目錄內解壓縮。
$ rar x FileName.rar DirName


.lha
套件名稱：lha。
壓縮：
$ lha -a FileName.lha FileName
解壓縮：
$ lha -e FileName.lha
```

### benchmark[2]
```
### Compression ratio
    gzip    bzip2   lzma    lzma -e xz      xz -e   lz4     lzop
1   26.8%   20.2%   18.4%   15.5%   18.4%   15.5%   35.6%   36.0%
2   25.5%   18.8%   17.5%   15.1%   17.5%   15.1%   35.6%   35.8%
3   24.7%   18.2%   17.1%   14.8%   17.1%   14.8%   35.6%   35.8%
5   22.0%   17.6%   14.9%   14.6%   14.9%   14.6%   -       35.8%
7   21.5%   17.2%   14.4%   14.3%   14.4%   14.3%   -       24.9%
9   21.4%   16.9%   14.1%   14.0%   14.1%   14.0%   -       24.6%

### Compression time
    gzip    bzip2   lzma    lzma -e xz      xz -e   lz4     lzop
1   8.1s    58.3s   31.7s   4m37s   32.2s   4m40s   1.3s    1.6s
2   8.5s    58.4s   40.7s   4m49s   41.9s   4m53s   1.4s    1.6s
3   9.6s    59.1s   1m2s    4m36s   1m1s    4m39s   1.3s    1.5s
5   14s     1m1s    3m5s    5m      3m6s    4m53s   -       1.5s
7   21s     1m2s    4m14s   5m52s   4m13s   5m57s   -       35s
9   33s     1m3s    4m48s   6m40s   4m51s   6m40s   -       1m5s

### Decompression time
    gzip    bzip2   lzma    lzma -e xz      xz -e   lz4     lzop
1   3.5s    3.4s    6.7s    5.9s    7.2s    6.5s    0.4s    1.5s
2   3s      15.7    6.3s    5.6s    6.8s    6.3s    0.3s    1.4s
3   3.2s    15.9s   6s      5.6s    6.7s    6.2s    0.4s    1.4s
5   3.2s    16s     5.5s    5.4s    6.2s    6s      -       1.5s
7   3s      15s     5.3s    5.3s    5.9s    5.8s    -       1.3s
9   3s      15s     5s      5.1s    5.6s    5.6s    -       1.2s

so gzip is the best
```


[^1] from: http://note.drx.tw/2008/04/command.html
[^2] from: http://catchchallenger.first-world.info//wiki/Quick_Benchmark:_Gzip_vs_Bzip2_vs_LZMA_vs_XZ_vs_LZ4_vs_LZO
