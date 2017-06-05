## curl

act like wget
```
# 指定本地文件名
curl -o localpath.file http://xxx.com/a.pdf
# 使用远程的文件名当作本地的文件名
curl -O http://xxx.com/a.pdf 

# follow with 302
curl -L google.com

# Curl cannot follow a meta refresh. wget also.
```

cookie with curl
```
# cookie file
curl -b cookiefile url
# cookie format: semicoion separated name=value pairs
curl -b "name=pairs;" url
# store cookie after complete visit page
curl -c cookiefile url 

```


post with curl
```
curl http://xxx.com
curl -H 'Host:www.jfz.com' http://192.168.1.251/index.html
curl -d 'post1=data1' http://xxx.com
curl -d 'file1=@/data/file1' http://xxx.com/fileupload
curl -F 'input1=data1' http://xxx.com
curl -X POST -H Content-Type: application/json -d {"value2":"ifttt"} https://maker.ifttt.com/trigger

```

### 防 block 程序
```bash
curl --referer "http://xun.im/" -Lo "b.jpeg" "http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl=http://mmbiz.qpic.cn/mmbiz/4SzSI83cwBUnBJoBy4Hjp2cYfdE6uBJHicw0d4178n3nvDjx6syBZYBEZLOuPxd75sJpLk3ib5ngXA8334UDUhvA/0?wx_fmt=jpeg"
```

### 刷票程序
```bash
curl \
-d 'radio_5[]=144' \
-d 'radio_5[]={$ids[0]}' \
-A '{$ua}' \
-H 'Content-Type:application/x-www-form-urlencoded; charset=UTF-8' \
-H 'Origin:http://www.cyzone.cn' \
-H 'X-Requested-With:XMLHttpRequest' \
-H 'Accept:application/json, text/javascript, */*; q=0.01' \
-e 'http://www.cyzone.cn/features/2015cyxg/' \
-H 'X-FORWARDED-FOR:$ip' \
-H 'CLIENT-IP:$ip' \
'http://www.cyzone.cn/index.php?m=vote&c=index&a=post&subjectid=5'
```

### 每5分钟上报一次上报最近5分钟的日志
```bash
tail -F access.log > tmp.log
*/5 * * * * mv tmp.log upload.txt; curl -d "upload_file=@upload.txt" http://xxx.com/log_upload.php; rm upload.txt 
```

### 隐藏下载进度
```
curl -sS http://xxx.xxx/bar.zip
# -s slient mode
# -S show error
```

## See Also
- [xargs](./xargs.md)
