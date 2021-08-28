# Bash 常见snip
http://type.so/linux/bash-tips-2.html

## 当前日期
```shell
echo $(date '+%Y-%m-%d %H:%M:%S')
```

## 获取文件绝对路径
```
get_abs_filename() {
  # $1 : relative filename
  echo "$(\cd "$(\dirname "$1")" && \pwd)/$(\basename "$1")"
}
```


## 取出文件列表
```
# 防止WordSplitting，避免使用$(ls *.txt)
for file in *.txt
do
    # 防止文件名以-开头
    cp "./$file" /path/to/target
done
```

## 按行读取文件
```
while read line
do
    echo "$line"
done < text.txt

# 指定结束符号
IFS=$'\n'
while IFS= read -r inc; do
    echo "$inc"
done < text.txt
```

## 拷贝文件
```
cp -- "$file" "$target"
# -- 防止文件名以-开头
# " 防止文件名中含有空格
```

## 字符串比较
```
[[ $foo == "$bar" ]]
```

## cd 到目录
```
# -P prefix
cd -P -- "$(dirname -- "$f")"
```

## 数字比较
```
((foo > 7))
# 或者
[ "$foo" -gt 7 ]
```

## 判断文件中是否包含某个字符串
```
if grep -q fooregex /path/to/file; then
    # do something here
fi
```

## 多条件判断
```
if [ a = b ] && [ c = d ]
# 或者
if [[ a = b && c = d ]]
```

## 多行字符串
```
# 不要使用echo
cat <<EOF
  Hello world
  How's it going?
EOF
```

## 对cd命令是否成功的判断
```
cd /foo && bar
# 或者有很多依赖于cd之后的命令
cd /foo || exit 1
# ...
# ...
# 或者顺便说点什么 
cd /foo || { echo "hi, man!"; exit 1; }
```

## for循环
```
for ((i=1; i<=n; i++)); do
    # do something here
done
```

## 错误重定向
```
# 先重定向到文件，再定向到标准输出(标准输出已经到tty了)
somecmd >>logfile 2>&1
```

## 不显示终端的输入(stty)
```
echo "Please enter your password:"
stty -echo
read PASSWORD
stty echo
```

## 输出刚才输入的内容
```
echo $PASSWORD
```

## 交互式选择(select)
```
# 江山和美人，你更喜欢那个？
echo "Which do you prefer?"
select result in "beauty" "land"
do
    break
done
echo $result
```

## 得到当前脚本的绝对路径
```
echo $(cd "$(dirname "$0")"; pwd)
```


## 杀掉进程
```
ps -ef | grep glances | grep -v grep | awk '{print $2}' | xargs kill -9
```

## 列出 ip 地址
```
ifconfig | awk '/eth0/{getline;gsub(/addr:/,"",$2);print $2}'
```

## 便捷函数
```
function jz() {
    echo $*
}

~$ jz hahha
```

## 终端程序进程化
```
nohup php myprog.php > log.txt &
// 单独 php myprog.php， ctrl + c 会中断程序执行，并终止子进程
// php myprog.php &，这样执行程序虽然也是转为后台运行，实际上是依赖终端的，当用户退出终端时进程就会被杀掉。
```

## 输出脚本到本地 [Caiyun api](https://fanyi.caiyunapp.com/#/api)
```bash
#!/bin/bash
tee xiaoyi.sh << END
# such as zh2en en2zh ja2zh ja2en
DIRECTION=\$1
SOURCE=\$2

if test -f \$HOME/.xiaoyi ; then
  . \$HOME/.xiaoyi
else
  echo "Please input your token: "
  read TOKEN
  echo "TOKEN=\$TOKEN" > \$HOME/.xiaoyi
fi

BODY='{"source": ["'\$SOURCE'"], "trans_type": "'\$DIRECTION'", "replaced": true, "media": "text", "request_id": "demo" }'

export PYTHONIOENCODING=utf8
curl -s -X POST http://api.interpreter.caiyunai.com/v1/translator\
      -H 'Content-Type: application/json'\
      -H "X-Authorization: token \$TOKEN"\
      -d "\$BODY" | python -c "import sys, json; print json.load(sys.stdin)['target']"
END
```


<!-- vim: set ts=4 sw=4 tw=0 et foldlevel=1 foldenable foldlevelstart=99 : -->
