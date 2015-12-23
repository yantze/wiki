# Mysql Config

显示 所有变量
```
SHOW VARIABLES
show global variables like '%slow%';
SET GLOBAL LOG_SLOW_QUERIES = ON;
SET GLOBAL SLOW_QUERY_LOG = ON;
set @@global.log_slow_queries=1;
```

一句话执行SQL
```
mysql -e "statement1; statement2"  dbname -u username -p password
```

可以压缩导出的文档
```
mysqldump -uraiuds -p radius | gzip -9 >sql.gz
```

备份数据库到本地
```
ssh user@host 'mysqldump -uuser -ppassword database' > /path/to/save/mysql_backup.sql
```

## MyISAM和InnoDB区别

- 在锁表上的区别
MyISAM:表锁定，当要更新表中的一列时也要锁定整个表。
InnoDB:记录锁，只会锁定当前操作的行，写频繁的应用中用InnoDB会有很大的优势。
另外MyISAM写操作的优先级高于读操作，如果写压力很大的话，读操作会等到心碎。
虽然如此，但MyISAM是一个高优化的引擎，在读为主的应用中优势还是很大的。

- 事务在关系型数据库中非常重要的一个特性
InnoDB支持但MyIsam不支持。

## mysql 的编码
```
/etc/my.conf
[client]
default-character-set=utf8

[mysql]
default-character-set=utf8


[mysqld]
default-character-set = utf8
collation-server = utf8_general_ci
init-connect='SET NAMES utf8'
character-set-server = utf8

client
set character_set_client = utf8;
set character_set_connection = utf8;
set character_set_results = utf8;
```

## Binlog
`/etc/my.cnf`
```
log-bin=/data/mysql/mysql-bin
expire_logs_days=7
```
恢复指定时间
```
/usr/local/mysql/bin/mysqlbinlog -uroot -p -D mysql-bin.000044  \
--start-datetime="2014-02-11 03:00:00" \
--stop-datetime="2014-02-14 20:00:00" > ~/binlogbk/recover-head.sql
```

