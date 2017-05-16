---
author: yantze
os: linux, darwin

---

# 显示 shell 日期的基本格式
```
date +"%F %T" 2017-04-18 17:58:19
```

## 日期對 timestamp 正反向處理
date 要印出 timestamp：` date +"%s"`
date 要依照 timestamp 印出內容：
```
$ date --date='@2147483647' # 2147483647 請取代成自己要用的 timestamp 數值
$ date +"%F %T" --date='@2147483647' # 依照指定格式印出
```

## 於 date 有標準自己組的參數，也有簡便的參數來達成
年-月-日：%F 或 %Y-%m-%d
時:分:秒：%T 或 %H:%M:%S
```
date +"%F %T" 2017-04-18 17:58:19
date +"%Y-%m-%d %H:%M:%S" 2017-04-18 17:58:19
```

## 增加减少时间
linux
```
date -d "+10 days" +"%F"
```
darwin
```
date -v+1w +"%F"
```
> 其余的查看手册，格式太复杂，`man date` 有很多详细解释的地方

## 打印 nginx 日志记录
```
tail -f -10 localhost.access.log | awk -v date="$(date +"%F %T")" '{print date,$1}'
```
