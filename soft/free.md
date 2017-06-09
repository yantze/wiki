---
author: yantze
os: linux

---

# free - display free and used memory


```
[user@host ~]$ free
             total       used       free     shared    buffers     cached
Mem:        501188     493356       7832         76      26068     260428
-/+ buffers/cache:     206860     294328
Swap:       524284          0     524284
```

- 单位 kb
- cached 是为了加速从硬盘文件读取，缓存在内存
- buffers  是为了加速写入到硬盘，缓存在内存
- `-/+ buffers/cache` 这一行的 used 是 `used - buffers/cache`, free 是 `free + buffers/cache`


> 所以已经复制文件到优盘完成了，为什么系统还说在占用，其中一种原因就是有 buffers 没有写到优盘中，这种未写完的情况，马上拔出优盘可能导致优盘损坏


## Reference
- http://cizixs.com/2015/10/01/linux-memory-management-through-free

## See Also
- [process and log](/process_and_log.md)
