CURL学习
```php
function https_post($url, $data)
{
    // 模拟提交数据函数
    $curl = curl_init(); // 启动一个CURL会话
    curl_setopt($curl, CURLOPT_URL, $url); // 要访问的地址
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0); // 对认证证书来源的检查
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 1); // 从证书中检查SSL加密算法是否存在
    curl_setopt($curl, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']); // 模拟用户使用的浏览器
    //curl_setopt($curl, CURLOPT_FOLLOWLOCATION, 1); // 使用自动跳转
    curl_setopt($curl, CURLOPT_AUTOREFERER, 1); // 自动设置Referer
    curl_setopt($curl, CURLOPT_POST, 1); // 发送一个常规的Post请求
    curl_setopt($curl, CURLOPT_POSTFIELDS, $data); // Post提交的数据包
    curl_setopt($curl, CURLOPT_TIMEOUT, 30); // 设置超时限制防止死循环
    curl_setopt($curl, CURLOPT_HEADER, 0); // 显示返回的Header区域内容
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1); // 获取的信息以文件流的形式返回
    $tmpInfo = curl_exec($curl); // 执行操作
    if (curl_errno($curl)) {
       echo 'Errno'.curl_error($curl);//捕抓异常
    }
    curl_close($curl); // 关闭CURL会话
    return $tmpInfo; // 返回数据
}
```

curl在安全模式下或者设定了open_basedir的情况下，如果使用了OPT_FOLLOWLOCATION，会导致无返回值。这个理由很多，但FOLLOWLOCATION这个参数是用于目标网址会多次跳转而使用，还可以设置最大跳转次数，因此，如果你要抓取的对象有多次跳转，这个参数就非设不可（真纠结，实在不行就file_get_contents了，它自动支持多次跳转，但不如curl更可控一些）


具体关于CURL的一些常用参数，可以看这里：
```
http://opensuse.iteye.com/blog/349829
curl_setopt($ch, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_1);       
//HTTP协议的版本号  
curl_setopt($ch, CURLOPT_NOPROGRESS, 1);                             
//如果你不会PHP为CURL传输显示一个进程条，设置这个选项为一个非零值。注意：PHP自动设置这个选项为非零值，你应该仅仅为了调试的目的来改变这个选项。  
curl_setopt($ch, CURLOPT_NOBODY, 0);  
//如果你不想在输出中包含body部分，设置这个选项为一个非零值。  
curl_setopt($ch, CURLOPT_HTTPGET, 1);  
//设置HTTP请求的方法为GET  
curl_setopt($ch, CURLOPT_ENCODING, ”);  
//设置HTTP请求头中可接受的压缩格式  
curl_setopt($ch, CURLOPT_COOKIEFILE, 1);  
//传递一个包含cookie数据的文件的名字的字符串。这个cookie文件可以是Netscape格式，或是堆存在文件中的HTTP风格的头。  
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);  
//设置这个选项为一个非零值(象 “Location: “)的头，服务器会把它当做HTTP头的一部分发送(注意这是递归的，PHP将发送形如 “Location: “的头)。  
curl_setopt($ch, CURLOPT_MAXREDIRS, 3);  
//最多可以进行几次HTTP重定向，一般和curl_followlocation联用  
curl_setopt($ch, CURLOPT_USERAGENT, ‘Mozilla/4.0 (compatible; MSIE 5.00; Windows 98)’);  
//在HTTP请求中包含一个”user-agent”头的字符串  
$http_header = array();  
$http_header[] = ‘Connection: Keep-Alive’;  
$http_header[] = ‘Pragma: no-cache’;  
$http_header[] = ‘Cache-Control: no-cache’;  
$http_header[] = ‘Accept: */*’;  
$http_header[] = ‘Host: ‘.$url_ary['host'];  
curl_setopt($ch, CURLOPT_HTTPHEADER, $http_header);  
//一个数组格式的HTTP头文件格式  
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);  
//将curl_exec的返回值转换成一个字符串，而不是直接输出出来  
curl_setopt($ch, CURLOPT_TIMEOUT, $timeout);  
//设置一个长整形数，作为最大延续多少秒  
curl_setopt($ch, CURLOPT_REFERER, $url);  
//在HTTP请求中包含一个”referer”头的字符串  
curl_setopt($ch, CURLOPT_URL, $url);  
//这是你想用PHP取回的URL地址。你也可以在用curl_init()函数初始化时设置这个选项  
```



判断 IE 浏览器
```
if(preg_match('/(?i)msie [5-8]/',$_SERVER['HTTP_USER_AGENT'])) {
    // if IE<=8
    var_dump('ddd');

    exit;
}
```
