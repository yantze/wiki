# SED, AWK, TEE, READ, CUT, TR,  ECHO, WC 文字处理流, od, read

```
1 dirname $0

　　Linux下获得目录路径比较常用的是pwd命令和getcwd()函数，pwd命令只能得到当前目录，也就是跑程序时所在的目录，但不能得到程序所在的目录；

　　dirname恰好就能实现这个功能，使用dirname $0就可以解析出所要的绝对路径。

2 read

     read命令接收标准输入（键盘）的输入，或其他文件描述符的输入，得到输入后，read命令将数据放入一个标准变量中。

     由于read命令提供了-p参数，允许在read命令行中直接指定一个提示；

　　read后面的变量可以一个，也可以有多个，这时如果输入多个数据，则第一个数据给第一个变量，第二个数据给第二个变量；

3 $? 前一个命令的返回值

4 ehco命令

   echo 文件内容 > 文件名      创建文件

   echo 文件内容 >> 文件名    增加内容

   echo. 相当于增加一个回车换行符

5 Grep及Cut命令

　　cut: 是将一行讯息当中，取出某部分我们想要的；

　　grep 则是分析一行讯息，若当中有我们所需要的信息，就将该行拿出来。

　　platform=`grep PLATFORM= $cwd/../Rules.make | cut -d= -f2`

6 sed命令

　　Sed(a stream editor)是流线型、非交互式编辑器。他允许您执行和vi编辑器里相同的编辑任务。Sed 程式不是和编辑器交互式工作的，而是让您在命令行里敲入编辑的命令，给文档命名，然后在屏幕上查看命令输出结果。

　　sed 怎样工作？sed 编辑器按一次处理一行的方式来处理文档，并把输出送到屏幕上。

      sed 能够用寻址的方式来决定想要编辑哪一行。
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

7 tee命令

　　tee是一个把stdin保存到文件的小工具。


 
8 awk 用法：awk ' pattern {action} ‘
```

```
　　awk的处理文本和数据的方式是这样的，它逐行扫描文件，从第一行到最后一行，寻找匹配的特定模式的行，并在这些行上进行你想要的操作。如果没有指定处理动作，则把匹配的行显示到标准输出(屏幕)，如果没有指定模式，则所有被操作所指定的行都被处理。awk分别代表其作者姓氏的第一个字母。因为它的作者是三个人，分别是Alfred Aho、Brian Kernighan、Peter Weinberger。gawk是awk的GNU版本，它提供了Bell实验室和GNU的一些扩展。   
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
