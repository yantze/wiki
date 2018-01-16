# Inspect file

## 显示指定范围的十六进制字符
显示开始的 32 个字符
```
head -c 32 unknownfile
```

显示二进制和字符串
```
head -c 32 unknownfile | xxd
```

恢复内容
```
head -c 32 unknownfile | xxd | xxd -r
```

使用 hexdump 做相同的内容
```
hexdump -n 32 -C tmux-client-25880.log
# -n 解析字节数
# -C 左边数值右边 ascii
hexdump -n 12 -x tmux-client-25880.log
# -x 显示十六进制
# -b 显示二进制
# -d 显示十进制
```
> 扩展内容：
```
// 有格式的解释二进制文件: [ [iteration_count]/byte_count ] "format"
hexdump -e '1/1 "%i " 1/2 "%i " 2/4 "%i "  "\n"' data2bin
```

显示前面两行
```
head -n 2 unknownfile
-c 100 Byte
```

显示后面两行
```
tail -n 2 unknownfile
-c 100 Byte
```

使用 od
```
od -c unknownfile
```

## Strings
找到文件对象可以显示的 ascii
```
strings executable_program
```

## xxd
恢复 ascii 并且使用流式(`-p`)
```
echo 54657374696e672031203220330 | xxd -r -p
```


# Res
- [hexdump for VSCode](https://marketplace.visualstudio.com/items?itemName=slevesque.vscode-hexdump)
- vim `%!xxd` and `%!xxd -r`

# Ref
- http://www.sanfoundry.com/10-practical-hexdump-command-usage-examples-in-linux/
