# socat

```
转换端口 4000 到 5050
socat tcp-listen:5050,fork,reuseaddr tcp:127.0.0.1:4000
```

端口转发
```
socat tcp-listen:8001,reuseaddr,fork tcp:localhost:8000
# tcp-listen 可以改为 tcp4-listen or tcp6-listen 或者指定地址`,bind=that-address`
```


## SeeAlso
- [memcached](./memcached.md)

## Ref
- https://unix.stackexchange.com/questions/10428/simple-way-to-create-a-tunnel-from-one-local-port-to-another 
