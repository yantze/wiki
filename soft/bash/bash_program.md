# bash 基础语法

变量
```bash
var_name=var_value
var_name1="bef $name aft"
var_name2="bef${name}aft"
```

字符串
```bash
str="this is a string."
echo ${str:0:4}     # ${str:start_index:length}是截图字符串的子串
echo ${str:5:2}
 
# 从原串中去掉匹配的子串，返回留下的子串。
echo ${str#*is}     # #*is 标识从开头开始找，直到最近的is
echo ${str##*is}    # ##*is 表示从头开始找，直到最远is
 
echo ${str%is*}     # %*is 表示从尾部开始找直到最近的is
echo ${str%%is*}    # %%*is 表示从尾部开始找直到最远的is
```

比较
```bash
[ "$str" = "my name is tim" ]
```


结构控制
if … then 语句
```
if [ test_command ]
then
    commands
fi
```

if … then … else 语句
```
if [ test_command ]
then
    commands
else
    commands
fi
```
if … then … elif … (else) 语句
```
if [ test_command ]
then
    commands
elif [ test_command ]
then
    commands
elif [ test_command ]
then
    commands
else (Optional)
    commands
fi
```

for … in 语句
```
for loop_variable in argument_list
do
    commands
done
```
while 语句
```
while test_condition_is_true
do
    commands
done
```
until 语句
```
until test_condition_is_true
do
    commands
done
```
case 语句
```
case $variable in
match_1)
    commands_to_execute_for_1
    ;;
match_2)
    commands_to_execute_for_2
    ;;
match_3)
    commands_to_execute_for_3
    ;;
*)  (Optional - any other value)
    commands_to_execute_for_no_match
    ;;
esac
```

>    条件判断放在[]中，注意[]内部首位要各空一个空格。条件判断后面要紧跟一个分号，then才能放在同一行，如果没有分号，则then需要换行。

循环
```bash
for x in one two three four
do
    echo number $x
done
 
for myfile in ./*
do
    echo "$myfile"
done
 
while [ condition ]
do
    statements
done
```

特定参数变量
```
$# 传递到脚本的参数的个数，没有参数是0而不是1。
$* 以一个单字符串显示所有向脚本传递的参数。$* 等价于 '$1 $2 $3 .. $n'
$$ 脚本运行的当前进程 ID 号
$! 最后一个后台运行的进程的进程 ID 号
$@ 与$*类似,但是使用时加引号,并在引号中返回每个参数(返回一个参数列表)。$@ 等价于"$1" "$2" .. "$n"。
$- 显示 shell 使用的当前选项。
$? 显示前面最后一个命令的退出状态。0 表示没有错误,其他任何值表明有错误。
```
数字比较
```
int1 ­eq int2 如果 int1 等于 int2,则返回真
int1 ­ne int2 如果 int1 不等于 int2,则返回真
int1 ­lt int2 如果 int1 小于 int2,则返回真
int1 ­le int2 如果 int1 小于等于 int2,则返回真
int1 ­gt int2 如果 int1 大于 int2,则返回真
int1 ­ge int2 如果 int1 大于等于 int2,则返回真
x=1 ; [ $x -eq 1 ]; echo $? # 将打印 0 表示变量 x 的值等于数字 1
x=a ; [ $x -eq "1" ] # shell 打印错误信息 bash: [: a: integer expression expected
```
字符串比较
```
­z string 字符串 string 为空串(长度为 0)时返回真
­n string 字符串 string 为非空串时返回真
str1 = str2 字符串 str1 和字符串 str2 相等时返回真
str1 != str2 字符串 str1 和字符串 str2 不相等时返回真
str1 < str2 按字典顺序排序,字符串 str1 在字符串 str2 之前
str1 > str2 按字典顺序排序,字符串 str1 在字符串 str2 之后
name="zqf"; [ $name = "zqf" ] ; echo $? # 打印 0 表示变量 name 的值和字符串"zqf"相等
```

文件比较
```
­b filename 当 filename 存在并且是块文件时返回真(返回 0)
­c filename 当 filename 存在并且是字符文件时返回真
­d pathname 当 pathname 存在并且是一个目录时返回真
­e pathname 当由 pathname 指定的文件或目录存在时返回真
­f filename 当 filename 存在并且是普通文件时返回真
­g pathname 当由 pathname 指定的文件或目录存在并且设置了 SGID 位时返回真
­h filename 当 filename 存在并且是符号链接文件时返回真 (或 ­L filename)
­k pathname 当由 pathname 指定的文件或目录存在并且设置了“粘滞”位时返回真
­p filename 当 filename 存在并且是命名管道时返回真
­r pathname 当由 pathname 指定的文件或目录存在并且可读时返回真
­s filename 当 filename 存在并且文件大小大于 0 时返回真
­S filename 当 filename 存在并且是 socket 时返回真
­t fd 当 fd 是与终端设备相关联的文件描述符时返回真
­u pathname 当由 pathname 指定的文件或目录存在并且设置了 SUID 位时返回真
­w pathname 当由 pathname 指定的文件或目录存在并且可写时返回真
­x pathname 当由 pathname 指定的文件或目录存在并且可执行时返回真
­O pathname 当由 pathname 存在并且被当前进程的有效用户 id 的用户拥有时返回真(字母 O 大写)
­G pathname 当由 pathname 存在并且属于当前进程的有效用户 id 的用户的用户组时返回真
file1 ­nt file2 file1 比 file2 新时返回真，修改时间更新
file1 ­ot file2 file1 比 file2 旧时返回真，修改时间更旧
```


```
if [ -b /dev/hda ]
then
    echo "yes"
else
    echo "no"
fi # /dev/hda 是块文件，将打印 yes

test -c /dev/hda ; echo $? # 将打印 1 表示 test 命令的返回值为 1, /dev/hda 不是字符设备

[ -w /etc/passwd ]; echo $? # 查看对当前用户而言, passwd 文件是否可写

```

更多的用法在 `man bash`
[more](http://www.ibm.com/developerworks/cn/linux/shell/bash/bash-2/index.html)

## 其它应用

##### 执行文件路径
```bash
# 当前目录
CURRENT_SCRIPT_HOME=$(cd `dirname $0`; pwd)
CURRENT_EXECUTE_HOME=$(pwd -P)
# echo $CURRENT_SCRIPT_HOME # 脚本的路径
# echo $CURRENT_EXECUTE_HOME # 调用脚本的路径
```
```
curpath=`dir $0`
filename=`basename $curpath`
```

##### 参数
```bash
while getopts f:t: opts; do
   case ${opts} in
      f) FROM_VAL=${OPTARG} ;;
      t) TO_VAL=${OPTARG} ;;
   esac
done
```



### 少见
退出码, linux 命令行上一个命令的退出码放在了`$?`环境变量中
```
$ true; $?  =>  0
$ false; $? =>  1
```

如果这个命令是一串管道符连接和多个命令，怎么知道每个命令的退出码？
你可以使用 PIPESTATUS环境变量。比如这个测试：true | false | true; echo "${PIPESTATUS[@]}"


## Shell Style Guide
[google shell style](https://google.github.io/styleguide/shell.xml)
