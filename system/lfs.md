The following command will illustrate the current search paths and their order.
```
ld --verbose | grep SEARCH
```

will show all the files successfully opened during the linking.
```
gcc dummy.c -Wl,--verbose 2>&1 | grep succeeded 
```

- 5.9
must delete previous binutils-build direction

- 5.12
cp -v configure{,.orig}
sed 's:/usr/local/bin:/bin:' configure.orig > configure

- 5.16
```
./configure --prefix=/tools --without-bash-malloc
```
Above the meaning of the configure options: `--without-bash-malloc`, This option turns off the use of Bash's memory allocation (malloc) function which is known to cause segmentation faults. By turning this option off, Bash will use the malloc functions from Glibc which are more stable.



### get skill

#### no.1
```
ld --verbose | ag SEARCH | sed 's/;/\n/g'
sed 's|;|\n|g'  OR sed 's@;@\n@g also take effect
```

#### no.2
```
gcc -dumpspecs | sed -e 's@/tools@@g'                   \
    -e '/\*startfile_prefix_spec:/{n;s@.*@/usr/lib/ @}' \
    -e '/\*cpp:/{n;s@$@ -isystem /usr/include@}' >      \
    `dirname $(gcc --print-libgcc-file-name)`/specs
```

#### no.3
`find curdir -name *.sh`
此命令在某些情况下不能顺利找到curdir下的*.sh文件
-name后面的参数 *.sh 并不一定会直接传给 find命令，而是现在当前目录下进行匹配
根据当前目录的匹配情况，可能有一下三种可能：
 

1. 当前目录不存在*.sh，此时shell会顺利的把 *.sh传递给find命令，此时一切顺利。

2. 当目录存在一个abc.sh时，shell命令实际变为 find /yazuo_apps/crm35/current -name abc.sh;

3. 当前目录存在多个sh文件（abc.sh; cba.sh），shell命令实际变为 find /yazuo_apps/crm35/current -name abc.sh cba.sh;，此时因为-name后面有两个匹配字符，shell将报错: find: paths must precede expression:


解决方法是 `-name` 的匹配字符串一定要用单引号或双引号引住，防止以上问题发生。
正确的命令是 `find curdir -name "*.sh"`

```
gcc -dumpspecs | sed -e 's@/tools@@g'                   \
    -e '/\*startfile_prefix_spec:/{n;s@.*@/usr/lib/ @}' \
    -e '/\*cpp:/{n;s@$@ -isystem /usr/include@}' >      \
    `dirname $(gcc --print-libgcc-file-name)`/specs
```

##### display the result position before lines,another option is -C1,display before and after lines
```
grep -B1 '^ /usr/include' dummy.log
```

##### print value of a symbolic link or canonical file name
```
readlink /usr/lib/libz.so
```

##### copy curl dir all file to another by tar
```
tar cf - . | (cd ../tt ; tar xf -)
```

##### sed
```
sed '/ets/d' fin.txt
sed -i '/Error loading kernel symbols/{n;n;d}' ksym_mod.c

sed -e 's/2^64/(2^64/' -e 's/E </E) <=/' -e 's/ne /eq /' \
    -i tests/ts/ipcs/limits2
```
