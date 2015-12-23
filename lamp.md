# LAMP

修改配置文件/编译module
- 找到/usr/src/httpd-2.2/modules/mappers
- 执行 /usr/local/apache2/bin/apxs -c -i mod_rewrite.c
- 添加 LoadModule rewrite_module modules/mod_rewrite.so 到对应的位置

在http.conf中设置php.ini的值，用
```
php_value xdebug.remote_autostart 1
```
