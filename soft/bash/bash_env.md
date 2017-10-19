在 Terminal 类似编辑文件一样编辑命令
```
export VISUAL=vim
Ctrl+x e
# or
export EDITOR=vim
fc
```
> VISUAL 和 EDITOR 环境变量的区别是，在现代 Terminal 中可以使用全屏编辑器，优先使用 VISUAL ，如果未设置，才获取 EDITOR 变量。EDITOR 其实是兼容以前只有一行编辑窗口的 Terminal。


通过上下键来搜索
```
$ vim ~/.inputrc
"\e[A": history-search-backward
"\e[B": history-search-forward
set show-all-if-ambiguous on
set completion-ignore-case on
```

添加 bash 自动补全
```
cp completefile /usr/share/bash-completion/completions/
```


`$*` 和 `$@` 的区别
```
$* 和 $@ 都表示传递给函数或脚本的所有参数，不被双引号(" ")包含时，都以"$1" "$2" … "$n" 的形式输出所有参数。

当它们被双引号(" ")包含时，"$*" 会将所有的参数作为一个整体，以"$1 $2 … $n"的形式输出所有参数；"$@" 会将各个参数分开，以"$1" "$2" … "$n" 的形式输出所有参数。


echo "print each param from \"\$*\""
for var in "$*"
do
    echo "$var"
done

echo "print each param from \"\$@\""
for var in "$@"
do
    echo "$var"
done

```

附录
```
$0	当前脚本的文件名
$n	传递给脚本或函数的参数。n 是一个数字，表示第几个参数。例如，第一个参数是$1，第二个参数是$2。
$#	传递给脚本或函数的参数个数。
$*	传递给脚本或函数的所有参数。
$@	传递给脚本或函数的所有参数。被双引号(" ")包含时，与 $* 稍有不同
$?	上个命令的退出状态，或函数的返回值。
$$	当前Shell进程ID。对于 Shell 脚本，就是这些脚本所在的进程ID。
```

去掉重复的 PATH
`typeset -aU path`

出现重复 PATH 的原因
```
常见是在 tmux，原因是不管是 login shell 还是在 Interacitvie shell ，都会运行 `/etc/zshenv`、`~/.zshenv` ，而之后运行的 `/etc/zprofile` 只在 login shell 运行，里面有个命令 zsh_helper ，所以导致zshenv 里面运行的 PATH 会被重复声明。

解决方法：
在 tmux.conf 中添加，让 tmux 不用 login shell 方式进入，就不会读取 zprofile
set -g default-command $SHELL
```

记录root登录的次数
`last | grep root | cut -d “ “ -f 1 | wc -l`

列出头十个最耗内存的进程
`ps aux | sort -nk +4 | tail`

## Reference
- [ref](http://c.biancheng.net/cpp/view/2739.html)
- [duplicate PATH](http://chenyufei.info/blog/2014-03-04/zsh-tmux-osx-set-correct-path/)
