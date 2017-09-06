# Windows Boot

我理解的基本启动流程 Hardware-> BIOS -> windows boot loader（nltdr/bcd) -> windows kernel -> driver -> user。


boot loader 和 kernel 是可以不同分区的，主要 boot loader 是主逻辑的活动分区就行，GPT 分区另算。


## 修复windows 引导
用 usb 引导盘修复系统，如果不行，尝试用 bootbcd 修复
```
bootrec /fixboot bootrec /rebuildbcd
```



## Ref
- https://twitter.com/Blankwonder/status/902585030127390720 
