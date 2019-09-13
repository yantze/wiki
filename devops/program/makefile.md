# Makefile

## 读
示例: 一个 Makefile 文件
```
OBJDIR=.obj
$(OBJDIR)/c_module.o:
	echo "xxx1"
$(OBJDIR)/c_module1.o:
	echo "xxx2"
test: $(OBJDIR)/c_module.o $(OBJDIR)/c_module1.o
	echo "xxx3" $@ $^
```
运行 `make test` 后：
```
echo "xxx1"
xxx1
echo "xxx2"
xxx2
echo "xxx3" test .obj/c_module.o .obj/c_module1.o
xxx3 test .obj/c_module.o .obj/c_module1.o
```
可以看到这个预发的真貌了：
```
target1 target2 target3 : prereq1 prereq2
    command1
    command2
    command3
```

> 注：.PHONY (deprecated) 表示后面的内容总是要更新


## 变量
```
$@    : target
$%    : archive menmber specification
$<    : 第一个prerequisite
$?     : 所有比target新的prerequisites, 它们之间以空格分隔.
$^    : 所有的prerequisites(但不包括重复的prerequisites).
$+    : 与$?相同, 但包括重复的prerequisites.
$*     : 目标文件名的主干(既不包括后缀), 它一般只用于pattern rules.
```
