# Bash 常见snip
http://type.so/linux/bash-tips-2.html
取出文件列表
```
# 防止WordSplitting，避免使用$(ls *.txt)
for file in *.txt
do
    # 防止文件名以-开头
    cp "./$file" /path/to/target
done
```

按行读取文件
```
while read line
do
    echo "$line"
done < text.txt
```

拷贝文件
```
cp -- "$file" "$target"
# -- 防止文件名以-开头
# " 防止文件名中含有空格
```

字符串比较
```
[[ $foo == "$bar" ]]
```

cd到目录
```
# -P prefix
cd -P -- "$(dirname -- "$f")"
```

数字比较
```
((foo > 7))
# 或者
[ "$foo" -gt 7 ]
```

判断文件中是否包含某个字符串
```
if grep -q fooregex /path/to/file; then
    # do something here
fi
```

多条件判断
```
if [ a = b ] && [ c = d ]
# 或者
if [[ a = b && c = d ]]
```

多行字符串
```
# 不要使用echo
cat <<EOF
  Hello world
  How's it going?
EOF
```

对cd命令是否成功的判断
```
cd /foo && bar
# 或者有很多依赖于cd之后的命令
cd /foo || exit 1
# ...
# ...
# 或者顺便说点什么 
cd /foo || { echo "hi, man!"; exit 1; }
```

for循环
```
for ((i=1; i<=n; i++)); do
    # do something here
done
```

错误重定向
```
# 先重定向到文件，再定向到标准输出(标准输出已经到tty了)
somecmd >>logfile 2>&1
```

不显示终端的输入(stty)
```
echo "Please enter your password:"
stty -echo
read PASSWORD
stty echo
```

# 输出刚才输入的内容
```
echo $PASSWORD
```

交互式选择(select)
```
# 江山和美人，你更喜欢那个？
echo "Which do you prefer?"
select result in "beauty" "land"
do
    break
done
echo $result
```

得到当前脚本的绝对路径
```
echo $(cd "$(dirname "$0")"; pwd)
```


# Bash 一些变量的操作
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

