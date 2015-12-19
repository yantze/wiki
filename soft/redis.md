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

# Redis hashes look exactly how one might expect a "hash" to look
hmset user:1000 username antirez birthyear 1977 verified 1
// hmset means hash multipe fields
hmset / hmget / hset / hget
hgetall user:1000
hincrby user:1000 birthyear 10

# Redis Sets are unordered collections of strings.
sadd myset 1 2 3
smembers myset
sismember myset 3
// sismember means set is member


// more see: http://redis.io/topics/data-types-intro

```
