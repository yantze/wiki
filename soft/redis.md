# redis
```
# 看下面的写着命令的时候，要想一下，在边缘情况下，如何处理

sudo systemctl start redis # or redis-server
redis-cli
set key value
get key
expire key 5
ttl key
exists key


rpush lista 23 45 tyu oppppp
lpush lista firstk leftfirst leftleftfirst
lrange lista 0 -1
rpop lista

# Hashes
hmset user:1000 username antirez birthyear 1977 verified 1
// hmset means hash multipe fields
hmset / hmget / hset / hget



```
