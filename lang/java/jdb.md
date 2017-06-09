# JDB

```
jdb fileClass
stop in <class name>.< Method name | Variable name>
stop at <class name>:<Line no>

run
next / step / step into / step out
cont # continue
list [line number|method] -- print source code
kill

print <expr>              -- print value of expression
dump <expr>               -- print all object information
eval <expr>               -- evaluate expression (same as print)
set <lvalue> = <expr>     -- assign new value to field/variable/array element
locals                    -- print all local variables in current stack frame
```


## Reference
- [JDB tutorial](https://www.tutorialspoint.com/jdb/jdb_quick_guide.htm)
