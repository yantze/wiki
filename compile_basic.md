# Compile Basic

## add Lib and Include
```
export CFLAGS="-I/usr/local/Cellar/readline/8.0.3_1/include -I/usr/local/Cellar/openssl/1.0.2l/include -I/usr/local/Cellar/lua@5.1/5.1.5_4/include -I/usr/local/include"
export LDFLAGS="-L/usr/local/Cellar/readline/7.0.3_1/lib -L/usr/local/Cellar/openssl/1.0.2l/lib -L/usr/local/Cellar/lua@5.1/5.1.5_4/lib -L/usr/local/lib"
```
也可以用 pkg-config 自动生成
```
export PKG_CONFIG_PATH="$PKG_CONFIG_PATH:/usr/local/Cellar/lua53/5.3.4/lib/pkgconfig"
pkg-config --cflags --libs lua5.3
```

## See Also
- [OpenCV](./soft/opencv.md)
