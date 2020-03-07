Dump var methods
---

## 日志记录
```
file_put_contents('/tmp/my.log', print_r(array(date('Y-m-d H:i:s'), __LINE__, __METHOD__, $a), TRUE), FILE_APPEND | LOCK_EX); 
```
[^1]

## 翻译php代码为c代码
实现用php代码编写php的c扩展[^2]



# Ref
[^1]: [PHP调试小技巧](http://www.codefrom.com/paper/PHP%E8%B0%83%E8%AF%95%E5%B0%8F%E6%8A%80%E5%B7%A7)
[^2]: [Zephir－－最简单的php扩展开发工具](http://www.codefrom.com/paper/Zephir%EF%BC%8D%EF%BC%8D%E6%9C%80%E7%AE%80%E5%8D%95%E7%9A%84php%E6%89%A9%E5%B1%95%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7)
