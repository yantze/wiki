# Grep & ag & rg

类似 rg 的命令，不找二进制文件，也可以在我的 [.dotfiles](https://github.com/yantze/dotfiles/blob/master/zshrc/zsh_func) 中找到
```bash
function rg() {
    # 这里可以使用正则，类似 egrep 预发，也可以查找多个字符串 httpd\|vsftpd
    search_string="$1"
    # 如果没有第二个参数，就在当前文件夹查找
    search_path=`[[ $2 == "" ]] && echo "." || echo "$2"`
    grep -RI --byte-offset --exclude-dir={dist,node_modules,.bzr,CVS,.git,.hg,.svn} -E $search_string $search_path
}
# example: -E "^lsof.*abc.{1,20}"
```


常见使用:
```bash
# Search in case-insensitive mode:
grep -i search_string path/to/file

# Search recursively (ignoring non-text files) in current directory for an exact string. -R 比 -r 多了跟随软链:
grep -RI search_string .

# Use extended regular expressions (supporting `?`, `+`, `{}`, `()` and `|`):
grep -E ^regex$ path/to/file

# Print 3 lines of [C]ontext around, [B]efore, or [A]fter each match:
grep -C|B|A 3 search_string path/to/file

grep -o "SEARCH.*/usr/bin" dummy.log # 只显示匹配行

grep -Hn search_string path/to/file # 添加行号

grep -v "name" # 反转搜索结果
```

经验：
```bash
grep -w "name" test.txt  # 查找完整的字符串

grep -r "name" dir # 递归查找grep的目录

grep -r . -e "regex str" # 用 regex 格式查找

# 显示包含字段的文件名和反转. -L, --files-without-match; -l, --files-with-matches
grep -L/l "str" a.txt b.txt

grep -c "str" a.txt  // only output the number of result file

grep -x "hole line" a.txt // only output that exactly match the whole line 匹配整行

ps -ef | grep 'httpd\|vsftpd' //find 'httpd' or 'vsftpd'


```

其它应用场景
```bash
git grep

# 目录结构[linux only]
find | grep -v ".git"
```

## Ag
```bash
ag keychar  //直接查看当前目录下包含keychar的字符
ag -g pattern  //查看当前目录下的所有文件名
```

## See More
```bash
curl cheat.sh/grep
```
