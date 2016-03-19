#putty

## command in windows

load by name
```
PUTTY.EXE -load 10.1.2.62
```

load by rsa key
```
PUTTY.EXE -i d:\ssh\wess.ppk -P 22333 yantze@wess
```

## proxy
PuTTY的Connection->SSH->Tunnels中创建一个Dynamic的Foward端口就可以了。比如，我们可以在Source port中输入6500，然后选Dynamic，再点一下Add。
一个SOCKS(v5)代理，服务器地址用127.0.0.1，端口就是前面设的6500。

类Unix:
ssh somehost.org -D 6500，代理。


```
// 本地
ssh -C -f -N -g -L listen_port:DST_Host:DST_port user@Tunnel_Host

// 远程
ssh -C -f -N -g -R listen_port:DST_Host:DST_port user@Tunnel_Host

// 动态
ssh -C -f -N -g -D listen_port user@Tunnel_Host
```

地址：http://blog.csdn.net/lixuekaibit/article/details/6137973
http://www.xushulong.com/post/2012-08-04/40032371760
