# Memcached

## Usage
```
# conect
telnet 127.0.0.1 11211
nc 127.0.0.1 11211
socat READLINE,history=/path/to/history TCP4:127.1:11211,crnl # ^1

# get & set
get mykey
set mykey 0 60 5 # Meaning: 0 = > no flags, 60 => TTL in [s], 5 => size in byte, 回车后输入赋值

```





## Reference
- [^1]: https://www.v2ex.com/t/343390

## SeeAlso
- http://lzone.de/cheat-sheet/memcached
