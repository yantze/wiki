# Font command family

fc-list

fc-cache

fc-match

## fc-scan 扫描获取指定目录的信息
```
fc-scan --brief
```
会返回当前的字体的属性列表，如果多个字体会不简洁，可以用 format 格式化输出
```
fc-scan -f "Family: %{family}\nFullname: %{fullname}\nStyle: %{style}\n\n" .
```
里面的 family fullname 等变量都可以通过 `fc-scan --bried` 获取

## Practice
```
fc-list :lang=zh | awk -F ':'  '{ print $1 }' | sort | uniq
```


## CentOS Font
```
yum install fontconfig
ls /usr/share/font*
# /usr/share/fontconfig
# /usr/share/fonts

# 手动把字体放在上面的目录或者放在自己 `~/.fonts` 都能加载
```

Install font
```
yum install wqy-microhei-fonts wqy-unibit-fonts wqy-zenhei-fonts
```

## Poplur Fonts
### English
- Heimit
- Monaco
- Consolas

### [SC] Simplified Chinese
- PingFang [backup](https://github.com/ctrngk/backup)
- WenQuanYi [wqy](https://github.com/layerssss/wqy)
- YaHei Consolas Powerline [Consolas](https://github.com/liangfeng/consolas-font-for-airline)
