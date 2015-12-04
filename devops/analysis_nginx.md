# Ng­inx 内配置 Google An­a­lyt­ics 指南
本文发表于: 2015-10-30 分类: net­work 标签: an­a­lyt­ics google ng­inx

## 相关说明
网站配置 Google An­a­lyt­ics 的常见方式是在网站前端引用 an­a­lyt­ics.js 脚本，从前端利用 javascript 进行统计，这种方案的缺点是：
1. 客户端到 Google An­a­lyt­ics 之间的网络问题，包括 an­a­lyt­ics.js 脚本加载缓慢、向 Google An­a­lyt­ics 发送信息速度缓慢乃至失败等问题。由于各地网络情况不一，唯一通用的解决方案需要自己反向代理一个 an­a­lyt­ics.js 脚本，并且由服务器中转向 Google An­a­lyt­ics 发送信息的通讯。
2. 客户端屏蔽 Google An­a­lyt­ics 的相关问题，包括常见的 ad­block 扩展等自带的屏蔽列表，利用 user­script 进行屏蔽等方式，这些客户端的手段都会导致统计的偏差问题。
如果将 Google An­a­lyt­ics 的统计工作从前端转移到后端完成，就可以有效避免上述问题，比如使用 an­a­lyt­icsd 处理 Ng­inx 的日志，并将各类事件上传至 Google An­a­lyt­ics 上，或者使用 uni­ver­sal-an­a­lyt­ics 将 Google An­a­lyt­ics 集成到 Nodejs 应用中。

上述的两个 Nodejs 程序都是基于 Mea­sure­ment Pro­to­col 开发的，在阅读了相关参考资料后我发现直接使用​Ng­inx 自身的功能就可以完成这一工作，于是有了本文。

此方案的优点是：
1. 只需考虑服务器到 Google An­a­lyt­ics 的速度，不影响客户端的体验。
2. 统计数据真实准确，不受干扰与屏蔽。
3. 配置简单方便，不需要额外安装 Nodejs 等软件，使用 Ng­inx 自身的功能即可完成。

## 配置说明

服务器信息：
```
Cono­Ha 1GB KVM Tokyo
2 Core CPU
50GB SSD
De­bian 8.0 64bit
```
Ng­inx 信息：
```
Ng­inx v1.9.6 Main­line ver­sion
deb http://nginx.org/pack­ages/main­line/debian/ jessie nginx
```
Nginx 自带的 `userid` 模块可以用于标记各个用户，而 post_action 配置项可以在 Ng­inx 收到的请求处理完成后向某处发送一个异步的 Get 请求，这个请求会附带原始请求的 referer 与user-agent，利用这两个功能的这一个，我们可以配置 Ng­inx 在页面访问后发送相关信息到 Google An­a­lyt­ics 中，其具体配置如下：
```
userid on;
userid_name cid;
userid_domain 你的域名;
userid_path /;
userid_expires max;

location @tracker {
    internal;
    proxy_method GET;
    proxy_pass https://ssl.google-analytics.com/collect?v=1&tid=UA-XXXXXXXX-Y&$uid_set$uid_got&t=pageview&dh=$host&dp=$uri&uip=$remote_addr&dr=$http_referer&z=$msec;
    proxy_set_header User-Agent $http_user_agent;
    proxy_pass_request_headers off;
    proxy_pass_request_body off;
}

location / {
    try_files $uri $uri/ =404;
    post_action @tracker;
}
```
userid模块将会在用户访问时检查 cook­ies 中是否有 cid 项，如果没有 cid 项，则会在返回的 header 中加入 set-cookies 头标记这个用户，并将 $uid_set 变量设定为 cid=XXXXXX 这一形式，将 $uid_got 变量设定为空。如果有 cid 项，则将 $uid_got 变量设定为 cid=XXXXXX 这一形式，将 $uid_set 变量设定为空。于是在 @tracker 部分，上述变量会将 $uid_set$uid_got 填充为cid=XXXXXX。

实际向 Google An­a­lyt­ics 提交数据时，tid为跟踪 ID，即类似 UA-123456-1 的用于区别是要向哪个 Google An­a­lyt­ics（分析）媒体资源发送数据的参数，可以从 Google An­a­lyt­ics 获得；cid即客户端 ID，以 cook­ies 的形式用于区分和追踪用户，这里通过 userid 模块完成；t、dh、dp参数用于标记事件类型，访问的网站与访问的路径；uip参数即用户的 IP 地址，用于追踪用户所处地区等信息；dr参数即用户的 ref­erer，用于追踪用户的来源信息；z参数没有实际意义，仅仅用于附加一个时间戳以防止向 Google An­a­lyt­ics 提交数据时，这个请求被缓存。

## 注意事项
在配置监听 IPv6 和 IPv4 时，有两种配置方式：
```
listen [::]:80 ipv6only=off;

listen 80;
listen [::]:80 ipv6only=on;
```
如果使用前者，那么 remote_addr 变量将会被表示为 IPv4-mapped IPv6 ad­dresses 即::ffff:123.123.123.123这样的形式，如果使用后者，那么 remote_addr 变量将会被表示为 123.123.123.123 这样的正常的形式。
Google An­a­lyt­ics 对 IP 会进行匿名化处理，将 ::ffff:123.123.123.123 处理为 ::，而将123.123.123.123 处理为123.123.123.0，显然前者会导致地区识别错误等一系列问题，所以请务必使用后者以确保 Google An­a­lyt­ics 正确处理提交的数据。

## 调试方法
如果希望提交更多数据，并对这一过程进行调试，最简单的方法是首先将配置文件中的 proxy_pass 部分网址从 https://ssl.google-analytics.com/ 修改为 http://127.0.0.1:9999，再在服务器上使用nc 监听服务器上的 9999 端口：
```
$ nc -k -l 0.0.0.0 9999
```
从本机访问该网站网站，就能从 nc 上看到本来将被提交到 Google An­a­lyt­ics 上的信息了，如：
```
GET /collect?v=1&tid=UA-XXXXXX-Y&cid=XXXXXX&t=pageview&dh=example.com&dp=/index.html&uip=123.123.123.123&dr=https://google.com&z=1448000000.000 HTTP/1.0
User-Agent: Mozilla/4.0
Host: 127.0.0.1:9999
Connection: close
```
随后通过 curl 向 Google An­a­lyt­ics 的调试服务器手动提交信息：
```
$ curl --user-agent "Mozilla/4.0" "https://www.google-analytics.com/debug/collect?v=1&tid=UA-XXXXXX-Y&cid=XXXXXX&t=pageview&dh=example.com&dp=/index.html&uip=123.123.123.123&dr=https://google.com&z=1448000000.000"
```
Google An­a­lyt­ics 的调试服务器会返回关于此次提交的详细信息，包括参数是否有错误、如何修正等，可以通过检查返回信息来确定配置是否正常，提交到此服务器上的数据并不会被记录到 Google An­a­lyt­ics 中。而 Google An­a­lyt­ics 的正常服务器只会返回 HTTP 状态码，难以进行调试。
手动提交上述信息后 Google An­a­lyt­ics 的返回如下：
```
{
  "hitParsingResult": [ {
    "valid": false,
    "parserMessage": [ {
      "messageType": "ERROR",
      "description": "The value provided for parameter 'tid' is invalid. Please see http://goo.gl/a8d4RP#tid for details.",
      "messageCode": "VALUE_INVALID",
      "parameter": "tid"
    } ],
    "hit": "/debug/collect?v=1\u0026tid=UA-XXXXXX-Y\u0026cid=XXXXXX\u0026t=pageview\u0026dh=example.com\u0026dp=/index.html\u0026uip=123.123.123.123\u0026dr=https://google.com\u0026z=1448000000.000?_anon_uip=123.123.123.0"
  } ],
  "parserMessage": [ {
    "messageType": "INFO",
    "description": "Found 1 hit in the request."
  } ]
}
```
明显可以看出此处的错误是 tid 参数错误，显然作为例子的 UA-XXXXXX-Y 并不是一个正确的 tid，更换成实际的tid 之后这个错误就被修复了。
## DNT 功能
用户可以启用 Do Not Track 功能向网站表明自己不希望被追踪，遵守该规则的网站就不会追踪用户的个人信息。

使用如下配置可以在只有用户未启用 DNT 功能时才向 Google An­a­lyt­ics 发送相关信息：
```
location / {
    try_files $uri $uri/ =404;
    if ($http_dnt != 1) {post_action @tracker;}
}
```
尽管如此，受 Ng­inx 程序本身的限制 userid 模块依旧会用 cook­ies 对用户进行标记，没有办法通过检测 DNT 头的方式来关闭它，但用户数据并不会被提交到 Google An­a­lyt­ics 上。


来自：https://darknode.in/network/nginx-google-analytics/
具体知道手册：https://developers.google.com/analytics/devguides/collection/protocol/v1/devguide

