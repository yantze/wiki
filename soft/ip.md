# iproute2

一般 Linux 都有 `ip` 命令，mac 上面要装 `brew install iproute2mac` 也会有

```bash
ip a # ip addr

ip r # ip route
```

获取网络地址的 ip
```bash
ip -4  r get example.com
```

## See Also
- [netstat](./netstat.md)
- [https://github.com/brona/iproute2mac](https://github.com/brona/iproute2mac)
