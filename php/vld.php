Extensions: vld: 解析 Opcode
---
download:
https://derickrethans.nl/projects.html#vld
https://pecl.php.net/package/vld

install:
```
phpize
make
make install
```
add config file to conf.d:
```
[vld]
extension="/.../extensions/no-debug-non-zts-20131226/vld.so"
```

check install status
```
php -m | grep vld
```

run
```
php -dvld.active=1 date.php
```

manual:
- [Opcode Descriptions and Examples](http://www.php.net/manual/en/internals2.opcodes.list.php)
