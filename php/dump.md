# dump var methods

```
file_put_contents('/tmp/my.log', print_r(array(date('Y-m-d H:i:s'), __LINE__, __METHOD__, $a), TRUE), FILE_APPEND | LOCK_EX); [^1]
```


# Ref
[^1]: [PHP调试小技巧](http://www.codefrom.com/paper/PHP%E8%B0%83%E8%AF%95%E5%B0%8F%E6%8A%80%E5%B7%A7)
