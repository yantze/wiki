# xargs

```
echo 'a.json' | > newfile.txt
echo 'a.json' | xargs cat
echo 'a.json' | cat
```

重命名
```

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

