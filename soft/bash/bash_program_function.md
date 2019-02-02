# bash program function demo

```
# 自动每隔两分钟 Commit 一次 Git 记录
function autoc() {
  END=120

  for i in `seq 1 $END`; do
    git add -A
    git commit -am "auto commit"
    sleep 120
  done
}
```

```
# 修复 zip 文件, 并且在文件名后面添加 _fix 后缀
function fix() {
    \rm -rf out
    \mkdir out
    find . -maxdepth 1 -type f -name "*.zip" -exec bash -c 'file="{}"; filename="${file%.zip}"; zip -FF --out "./out/${filename}_fixed.zip" "$file"'  \;
}
```

```
# 判断系统执行不同的命令
function xcopy() {
    if [[ "$OSTYPE" = darwin* ]]; then
        pbcopy
        [[ -n $CLOUD_COPY ]] && pbpaste | pan clipboard
    else
        cat - > ~/.clipboard
        [[ -n $CLOUD_COPY ]] && cat ~/.clipboard | pan clipboard
    fi
}

# 类似的有
if [[ `uname` = "Darwin" ]];  then # mac
    echo Darwin
elif [[ `uname` = "Linux" ]]; then # linux
    echo Linux
fi
```
