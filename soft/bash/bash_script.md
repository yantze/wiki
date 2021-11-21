# Shell 脚本起点

## 简易参数脚本
```shell
# demo.sh
do_one() {
  # Rather than xargs -I {}, it's more flexible to
  # use a function with $1
  echo "Do something with $1"  
  cp --verbose "$1" /tmp
}

do_all() {
  # Call the do_one function for each item.
  # Also add -P to make it parallel
  cat tasks.txt | xargs -n 1 -d $'\n' -- $0 do_one
}

"$@"  # dispatch on $0
```
之后可以通过 `./demo.sh do_one` 执行脚本
