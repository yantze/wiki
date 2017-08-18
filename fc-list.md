# Font command family

fc-list

fc-cache

fc-match

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

### [SC] Simplified Chinese
- PingFang [backup](https://github.com/ctrngk/backup)
- WenQuanYi [wqy](https://github.com/layerssss/wqy)
