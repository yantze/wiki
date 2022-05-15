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

api json with curl
```
curl -i https://xxx.cn/api \
  -d '{"id":"AA8","name":"xxx"}' \
  -H 'Token: bbjdkfjdkfjdk' \
  -H 'Content-Type: application/json; charset=utf-8'
```
> 表单提交可以参考下面的刷票记录


post with curl
```
curl 'http://localhost:8000/api/compose/_testDaily' -H 'Content-Type: application/json' --data-binary '{"args":[11]}'

curl -H 'Host:www.jfz.com' http://192.168.1.251/index.html
curl -d 'post1=data1' http://xxx.com
curl -d 'file1=@/data/file1' http://xxx.com/fileupload
curl -F 'input1=data1' http://xxx.com
curl -F file=@a.jpg http://xxx.com
curl -H "Content-Type: application/json" -X POST -d '{"user":"bob","pass":"123"}' http://example.com

curl -u "yantze" -d '{"scopes":["public_repo"]}' https://api.github.com/users/yantze\?callback\=haha
curl -u "yantze" -H "Accept: application/vnd.github.v3.text+json"  https://api.github.com/users/yantze
curl -i/-I -u "username":"password"
```

### Express 的参数
```
-d "xxx=bbbb"  express 接受的是 req.body
url?xxx=bbbb express 接收的是 req.query
/user/idxxx express 接收的是 req.params
```


### 代理
```
-x, --proxy <[protocol://][user:password@]proxyhost[:port]>
protocol can `socks5h://` equal to --socks-hostname
`socks5://` equal to --socks
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
urlencode
CURL 想要做 urlencode，需要搭配 --data-urlencode 的參數(--data-urlencode 需要另外搭配 -G)，另外不需要 encode 的，一樣可以帶在網址後面即可。

直接看範例比較容易懂，下述範例要傳送三個參數：msg、text、channel，channel 不需要 urlencode，先直接帶在後面即可。

curl -X GET -G --data-urlencode "msg=abcs" --data-urlencode "text=中文" "http://example.com/?channel=blog"
http://feedproxy.google.com/~r/tsungblog/~3/pz1PILepFbk/

## curl 参数介绍
```
-f, --fail (HTTP) Fail silently (no output at all) on server errors.
-s silent
-S silent with -s but also show error
-L follow redirect
```

## See Also
- [xargs](./xargs.md)

## RES
- [Everything curl](https://curl.haxx.se/docs/)
    > 还挺全的
