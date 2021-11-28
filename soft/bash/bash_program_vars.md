# Bash 一些变量的操作

fallback 字符
```shell
# 使用默认字符串
echo ${VAR1:=defaultVar}
# 如果没有设置，就设置 defaultVar
: ${VAR1:=defaultVar}

```

获取最后一个字符
```
str='abc'

echo ${str: -1}

# 或者这样
i=$((${#str}-1))
echo ${str:$i:1}

echo -n $str | tail -c 1
```

删除最后一个字符
```
echo ${str: : -1} # only zsh
echo ${str%?}
```



这些操作需要使用 ${var} 这种变量的写法（用花括号）。

```
${#var} 输出 var的字符串长度

${var:pos:len} 你可以理解为变量的切片操作。如：

> var=0123456789
> echo ${var:2}
23456789
> echo ${var:2:2}
23
> echo ${var:2:3}
234
> echo ${var::1} # zsh 不支持
0
> echo ${var::-2}
01234567
或许需要这样
echo $get_url[-4,-1]

${var#word} 或 ${var##word} 删除匹配word的前缀，#为最短匹配，##为最长匹配

${var%word} 或 ${var%%word} 删除匹配word的后缀，%为最短匹配，%%为最长匹配

> var=ababcdcd
> echo ${var#a*b}
abcdcd
> echo ${var##a*b}
cdcd
> echo ${var%c*d}
ababcd
> echo ${var%c*d}
ababcd
> echo ${var%%c*d}
abab
${var/pattern/replacement} 替换第一个匹配

${var//pattern/replacement} 替换所有的匹配

var=ababcdcd
> echo ${var/ab/01}
01abcdcd
> echo ${var//ab/01}
0101cdcd
```

## See Also
- [parameter expansion](http://mywiki.wooledge.org/BashFAQ/073)

## Ref
- 左耳多耗子《Bash 一些变量的操作》(原文失效)
