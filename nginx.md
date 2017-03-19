# Nginx

## mac 环境的坑
- 如果自启动或者nginx更新，会电脑内能访问，局域网不能，因为苹果的防火墙
    解决方法就是：killall nginx; sudo nginx
- `tail -f /usr/local/Cellar/nginx/1.10.3/logs/localhost.error.log` 出现权限不能访问，可以指定用户名和组，也可以直接删除不能访问的temp目录


## Nginx 碰到的问题
ip-base 的架构原理，注意的是默认会认为 0.0.0.0 是一个 ip，所以一旦对一个网卡或者ip 绑定，那么其它server dirctive 就会失效，从外网访问就会通过ip 分流。
