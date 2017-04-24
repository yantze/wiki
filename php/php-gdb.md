GDB
---
> 如果发现 gdb error，用`sudo`运行，具体原因是未用mac签名。使用 `lldb` 会更适合osx

## Base Usage
[GDB cheatsheet](http://darkdust.net/files/GDB%20Cheat%20Sheet.pdf)

| Command | Shortcut | Action |
| --- | --- | --- |
| load .gdbinit     | | |
| gdb --args sapi/cli/php ext/pcre/basic.phpt | | |
| run -r "strlen('zzz');" | | |
| break | b | function_name / filepath:line_num, more info check `help breakpoints` |
| run r | r | Run a program |
| step [N] | s | Step in, may step into function next level |
| next [N] | n | Step out, reduce one level to next line  |
| list [N] | l | List current ten lines |
| continue [N] | c | Continue |
| attach [pid] | a | Attach a process |
| quit | q | Quit |

backtrace (bt) 
- f [0-n] - frame, check one frame from stack list
- l filename:linenum - list, check more code from select line
- print varname - print var name
- set varname value - set value


## debug 进程

### php-fpm
- open php-fpm.ini
```
pm = static
pm.max_children = 1
```
- start php-fpm and check pid
- gdb -p pid

### debug info 三种
- 编译文件带参数 -g，或者像 php 用 `--enable-debug` ，可用 list 方法查看源代码
- 编译文件不带参数 -g，需要加载源代码才能查看源代码，同样也可以 b func，使用所有 symbols info(用 nm 查看)
- 精简的文件，无法通过断函数名或者文件函数来断点了，所以只能在汇编层面 debug

### debug 形式 三种
- 运行 `gdb filename` 直接运行和dubug
- 使用 `attach pid` 捕获进程，然后读入debug 信息，和 debug symbols info 等
    - gdb --pid 58091 # or gdb -p 58091
    - gdb program_name pid
- 使用`coredump`获取进程最后保留镜像，具体的使用方法在 wiki 目录 `linux_sparing.md`, [Laruence‘s coredump](http://www.laruence.com/2011/06/23/2057.html)

    > 其实有时候没必要用这种方法，coredump 由于平台相关，很多时候 not work。我尝试用有 enable-debug 的php 去运行文件，程序直接显示内存申请溢出（ps，所以上面Laruence的文章堆爆栈好像说得不对）


## 便捷命令
| Command | Action |
| --- | --- |
| nm      | display name list (symbol table) |
| strip   | remove symbols |
| strings | find the printable strings in a object, or other binary, file |
| objdump | display all symbs, the `-s` argument output all sections content |
| man size | the size's man page section 'see also' have all reletive program, `rpm -ql binutils` will tell more, such as size, readelf, ar, ldd |

## 编译使用动态连接库
- [Linux GCC编译使用动态、静态链接库](http://blog.csdn.net/a600423444/article/details/7206015)
- [php调用C/C++动态链接库](http://www.jianshu.com/p/9a64df6bb7af)
- [php调用c语言编写的so动态库](http://blog.csdn.net/wzhwho/article/details/6949297)

## 终极目标
找到用 clion 开发和调试的方法(已完成): [正确的姿势](https://segmentfault.com/q/1010000004360090)

## See Also
- [Using GNU's GDB Debugger Debugging A Running Process](http://dirac.org/linux/gdb/06-Debugging_A_Running_Process.php)
- [The LLDB Debugger](http://lldb.llvm.org/lldb-gdb.html)
- [GDB cheatsheet](http://darkdust.net/files/GDB%20Cheat%20Sheet.pdf)
- [GDB - Debugging stripped binaries](http://felix.abecassis.me/2012/08/gdb-debugging-stripped-binaries/)
- [Debugging PHP Extensions](https://github.com/rcousens/packer-php7-dev/blob/master/doc/02-debug-php-extension.md)
- [Examining the Symbol Table](https://ftp.gnu.org/old-gnu/Manuals/gdb-5.1.1/html_node/gdb_109.html)


## Ref
None
