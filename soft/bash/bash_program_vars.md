# Bash 一些变量的操作

获取最后一个字符
```
str='abc'

echo ${str: -1}

# 或者这样
i=$((${#str}-1))
echo ${str:$i:1}

echo -n $str | tail -c 1
```

## See Also
- [parameter expansion](http://mywiki.wooledge.org/BashFAQ/073)


2015-01-16 左耳朵耗子

> 有时候我们需要对变量进行一些操作，比如截取，替换，删除等操作，很多同学会使用awk, sed 或cut等命令来干这事，其实，bash的内置的变量操作就可以干这个事。下面说明一些常用的方法：

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
> echo ${var::1}
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

