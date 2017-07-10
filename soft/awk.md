# AWK

## Basic

```
cat file | awk '/something/ {print $2}'
cat file | awk '/something/'

# -v: invert match in grep
cat file | awk '! /something/'
```



## Ref
- https://blog.gslin.org/archives/2017/07/07/7431/%e7%94%a8-awk-%e5%8f%96%e4%bb%a3-grep-%e7%9a%84%e5%b7%a5%e4%bd%9c/
