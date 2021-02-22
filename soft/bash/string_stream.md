SED, AWK, TEE, READ, CUT, TR,  ECHO, WC 文字处理流, od, read
============================================================

read
----
- read命令接收标准输入（键盘）的输入，或其他文件描述符的输入，得到输入后，read命令将数据放入一个标准变量中。

- 由于read命令提供了-p参数，允许在read命令行中直接指定一个提示；

- read后面的变量可以一个，也可以有多个，这时如果输入多个数据，则第一个数据给第一个变量，第二个数据给第二个变量；

```
read var
```

ehco
----

   echo 文件内容 > 文件名      创建文件

   echo 文件内容 >> 文件名    增加内容

   echo. 相当于增加一个回车换行符

Grep 及 Cut命令
-------------

　　cut: 是将一行讯息当中，取出某部分我们想要的；

　　grep 则是分析一行讯息，若当中有我们所需要的信息，就将该行拿出来。

　　platform=`grep PLATFORM= $cwd/../Rules.make | cut -d= -f2`

sed命令
------

　　Sed(a stream editor)是流线型、非交互式编辑器。他允许您执行和vi编辑器里相同的编辑任务。Sed 程式不是和编辑器交互式工作的，而是让您在命令行里敲入编辑的命令，给文档命名，然后在屏幕上查看命令输出结果。

　　sed 怎样工作？sed 编辑器按一次处理一行的方式来处理文档，并把输出送到屏幕上。

    sed 能够用寻址的方式来决定想要编辑哪一行。
```
　　sed 命令和选项
　　　　选项     功能 
　　　　a＼  在当前行上添加一个文本行或多个文本行
　　　　c＼  用新文本改变（取代）当前行里的文本
　　　　d    删除行
　　　　i＼   在当前行之前插入文本
　　　　h    把模式空间内容复制到一个固定缓存
　　　　H    把模式空间内容添加到一个固定缓存
　　　　g    得到固定缓存里任何的并复制到模式缓存，重写其内容
　　　　G    得到固定缓存的内容并复制到模式缓存，添加到里面
　　　　I    列出不打印的字符
　　　　p    打印行
　　　　n    读下一输入行，并开始用下一个命令处理换行符，而不是用第一个命令
　　　　q    结束或退出sed
　　　　r    从一个文档读如行
　　　　！   把命令应用到除了选出的行以外的其他任何行
　　　　s    把一个字串替换成另一个替换标志
　　　　g    在一行上进行全局替换
　　　　p    打印行
　　　　w    把行写到一个文档中
　　　　x    用模式空间的内容交换固定缓存的内容
　　　　y    把一个字符转换成另一个（不能和整则表达式元字符一起使用）
     example:

            sed -i "s=EXEC_DIR\=.*$=EXEC_DIR\=$dst/home/root/$platform=g" $cwd/../Rules.make
```

example:
```
使用 sed 砍 第1行 到 第30行
$ sed 1,30d access.log # 印出來看看，沒有實際寫入檔案
$ sed -i 1,30d access.log # 執行刪掉檔案前面 1 ~ 30行
$ sed -i 1,100000d access.log # 執行刪掉檔案前面 10萬行

ps: 硬碟空間滿了，但是不敢砍 Log 檔，只能先移除前面比較舊的內容，就會需要移除前面的行數
```

tee 命令
--------

tee是一个把stdin保存到文件的小工具。

 
awk 用法：awk ' pattern {action} ‘
----------------------------------

　　awk的处理文本和数据的方式是这样的，它逐行扫描文件，从第一行到最后一行，寻找匹配的特定模式的行，并在这些行上进行你想要的操作。如果没有指定处理动作，则把匹配的行显示到标准输出(屏幕)，如果没有指定模式，则所有被操作所指定的行都被处理。awk分别代表其作者姓氏的第一个字母。因为它的作者是三个人，分别是Alfred Aho、Brian Kernighan、Peter Weinberger。gawk是awk的GNU版本，它提供了Bell实验室和GNU的一些扩展。
```
　　ARGC 命令行变元个数 
　　ARGV 命令行变元数组 
　　FILENAME 当前输入文件名 
　　FNR 当前文件中的记录号 
　　FS 输入域分隔符，默认为一个空格 
　　RS 输入记录分隔符 
　　NF 当前记录里域个数 
　　NR 到目前为止记录数 
　　OFS 输出域分隔符 
　　ORS 输出记录分隔符 
```

tr 命令
-------

解码:对百分号解码的一种方法

```
echo -n %e8%a7%a3%e7%a0%81 | tr -d % | xxd -r -p
```
`xxd`的 `-r` 是让 `hexdump` 格式转为正常的二进制格式， `-p` 是告诉 `xxd` 要转换的内容没有多余的 `ascii` 内容


针对有些百分号编码的是 GBK 或者 GB2312 等字符集，可以在后面加上 `iconv -f gb2312 -t utf8`

```
echo -n %bd%e2%c2%eb | tr -d % | xxd -r -p | iconv -f gb2312 -t utf8
```

tac 命令
-------
tac 能让一个列表倒置，如果 mac 没有，可以用 tail -r 代替

## 常见应用

### 添加多行文本
```
# possibility 1:
echo "line 1" >> greetings.txt
echo "line 2" >> greetings.txt

# possibility 2:
echo "line 1
line 2" >> greetings.txt

# possibility 3:
cat <<EOT >> greetings.txt
line 1
line 2
EOT
```

### 从 func 中读取 stdin
```
cat -
read
< 文件重定向也可以
```

VIM 的 :sort 和 sort 命令类似


## 经验
让其中一个参数来自 pipe 转换，也许想到了可以用 `echo abc | cat -` 来用，或者用 `echo abc | echo $(cat -)concatstring` 来组合字符串。其实可以把运行转换，成为一个命令的一部分：
```bash
echo input | COMMAND "$(cat -)string"
# transform to
COMMAND "$(echo input)string"
```

## Reference
- [bash - How to concatenate stdin and a string? - Stack Overflow](https://stackoverflow.com/questions/13884108/how-to-concatenate-stdin-and-a-string)
- [bash - Reverse output of a command - Super User](https://superuser.com/questions/865548/reverse-output-of-a-command)
