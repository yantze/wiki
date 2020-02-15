# xargs

```
echo 'a.json' | > a.json
echo 'a.json' | xargs cat
echo 'a.json' | cat
```

允许并行多少个命令同时执行 -L，这里有一个简单的自动播放器例子
```
find . -name "*.mid" | xargs -I{} -L 1 timidity {}
```

-n 是允许最大的同时输入量, 原本应该是每行多个数据，但经过 `xargs -n 1` 后，就会变成每行一个。也可以用这种方法变成每行一对。
```
ls | xargs -n 1
```


替换字符串
```
find . -name "*.md" | xargs -I{} echo {} abc
```


用 xargs 下载多个文件
```
cat file | xargs -I % curl http://example.com/persons/%.tar

<file xargs -I % curl http://example.com/persons/%.tar

for i in `cat file`; do curl -I http://foo.com/$i; done

while read word; do wget http://example.com/persons/$word; done < file

sed -e 's#.*#http://example.com/persons/&.tar#' file

cat file | awk '{print "curl http://example.com/persons/"$1".tar"}'

ref: https://unix.stackexchange.com/questions/3593/using-xargs-with-input-from-a-file
```


## See Also
- [curl](./curl.md)

