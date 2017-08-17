# Grep & ag & rg

```

grep -r "some_text" /path/to/dir //递归查找grep的目录
grep -w "name" test.txt  //查找完整的字符串
grep pattern files
grep -r pattern dir
grep -r . -ie xxx
grep -o "SEARCH.*/usr/bin" dummy.log //Print  only  the  matched  (non-empty) parts of a matching line, with each such part on a  separate output line.
grep -L/l "str" a.txt b.txt //-L, --files-without-match; -l, --files-with-matches
grep -c "str" a.txt  // only output the number of result
grep -x "hole line" a.txt // only output that exactly match the whole line
ps -ef | grep 'httpd\|vsftpd' //find 'httpd' or 'vsftpd'

grep -i -R "xxx"
git grep

# 目录结构[linux only]
find | grep -v ".git"
```

## Ag
```
ag keychar  //直接查看当前目录下包含keychar的字符
ag -g pattern  //查看当前目录下的所有文件名
```
