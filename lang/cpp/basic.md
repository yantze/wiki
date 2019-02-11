代码分区：
- 代码区（（放代码）可读可执行）；
- 数据区（（放全局变量，静态变量）（可读可写））；
- 栈区（局部变量）；
- 堆区；

字符串的内容：
“S”表示的是两个字符S和\0；而“S”实际表示的是字符串的所在内存地址；所以char ch = "S"是不合法的。

指针修改:
const char * const months[12] =
{
"january", "February", "March", "April", "May",
"June, "july", "Auguest", September", "October",
"November", "Decdmber"
};
第一个const放置字符串被修改，第二个const确保数组中每个指针始终指向它最初指向的字符串。

函数调用指针原理:
函数通过将返回值复制到指定的CPU寄存器或内存单元中来将其返回。随后，调用程序将查看内存单元。返回函数和调用函数必须就该内存中的存储到的数据的类型达成一致。函数原型将返回类型告知调用程序，而函数定义命令调用函数返回什么类型。

代码块:
```
char ch = 't';
cout << ch << endl;
{char ch = 'u';
	cout << ch << endl;
}
cout << ch << endl;
```
在函数和代码块中可以重新定义已经定义的类型
