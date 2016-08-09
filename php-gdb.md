GDB
---

# Base Usage
```
1.1 load .gdbinit
1.2 gdb --args sapi/cli/php ext/pcre/tests/preg_match_basic.phpt
1.3 run -r "strlen('zzzvvv');"
1.4 break
    function_name
    filepath:line_num
1.5 run r - run a program
1.6 step s [N] - step in
1.7 next n [N] - step out
1.8 list l [N] - list current ten lines
1.9 continue c [N] - continue
```

# debug 进程
gdb --pid 58091

# 便捷知识
nm      - display name list (symbol table)
strings - find the printable strings in a object, or other binary, file

# 终极目标
找到用 clion 开发和调试的方法

# Ref
[正确的姿势](https://segmentfault.com/q/1010000004360090)
