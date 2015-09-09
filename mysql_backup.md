# 一句话执行SQL
mysql -e "statement1; statement2"  dbname -u username -p password

# 可以压缩导出的文档
mysqldump -uraiuds -p radius | gzip -9 >sql.gz

# 备份数据库到本地
ssh user@host 'mysqldump -uuser -ppassword database' > /path/to/save/mysql_backup.sql

# MyISAM和InnoDB区别
## 在锁表上的区别
MyISAM:表锁定，当要更新表中的一列时也要锁定整个表。
InnoDB:记录锁，只会锁定当前操作的行，写频繁的应用中用InnoDB会有很大的优势。
另外MyISAM写操作的优先级高于读操作，如果写压力很大的话，读操作会等到心碎。
虽然如此，但MyISAM是一个高优化的引擎，在读为主的应用中优势还是很大的。

## 事务在关系型数据库中非常重要的一个特性
InnoDB支持但MyIsam不支持。
