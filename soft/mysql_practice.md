# MySQL 实践

[[mysql_base]]

进入MySQL管理，用yum mysql mysql-devel
```
mysql -uroot -hlocalhost -p
```

基本操作
```
列出数据库：show databases;
选择数据库：use databaseName;
列出表格：show tables；
显示表格列的属性：show columns from tableName；
匹配字符：可以用通配符_代表任何一个字符，％代表任何字符串;
增加一个字段：alter table tabelName add column fieldName dateType;
增加多个字段：alter table tabelName add column fieldName1 dateType,add columns fieldName2 dateType;
```

创建用户
```
insert into mysql.user(Host,User,Password) values("localhost","phplamp",password("1234"));
或者 CREATE USER 'yantze'@'%' IDENTIFIED BY 'zxcvbn';
如果远程访问不了，可能是防火墙的问题
## 授权phplamp用户拥有phplamp数据库的所有权限
grant all privileges on yaf.* to yaf@localhost identified by '1234';
grant all privileges on `yaf`.* to `yaf`@'%' with grant option;
grant all on *.* to yaf;
grant all privileges on *.* to 'root'@'%' identified by '1234' with grant option;
show grants for jfz_data@'%';
```
删除用户
```
DELETE FROM user WHERE User="phplamp" and Host="localhost";
```
修改用户密码
```
update mysql.user set password=password('新密码') where User="phplamp" and Host="localhost";
```

创建数据库：
```
CREATE DATABASE `dbname` /*!40100 COLLATE 'utf8_general_ci' */
```
刷新系统权限表
```
mysql>flush privileges;
```

改密码另外一个方法：
```
#chown mysql /var/lib/mysql
chgrp -R mysql /var/lib/mysql
chmod -R 770 /var/lib/mysql
service mysqld start
mysql
SET PASSWORD FOR 'root'@'localhost' = PASSWORD('secret_password');
set password=password('123');
```


忘记 root 密码：
>如果你忘记了 MySQL 的 root 用户的口令，你可以用下列过程恢复它。
通过发送一个 kill （不是 kill -9)到 mysqld 服务器来关闭 mysqld 服务器。 pid 被保存在一个.pid 文件中，通常在 MySQL数据库目录中（你必须是一个UNIX root用户或运行服务器的相同用户做这个）：

```
kill `cat /mysql-data-directory/hostname.pid`
```
>使用--skip-grant-tables 选项重启 mysqld
用 mysql -h hostname mysql连接 mysqld服务器并且用一条 GRANT命令改变口令 。
你也可以用 mysqladmin -h hostname -u user password 'new password'进行。
用 mysqladmin -h hostname flush-privileges 或用 SQL 命令 FLUSH PRIVILEGES 来装载权限表.

```
service mysqld stop

mysqld_safe --skip-grant-tables --user=mysql &

跳过授权表 mysql.uer mysql.db
mysql -uroot

set password=password("wei");
// 用这条语句报错，就是因为加了--skip-grant-tables

update user set password=password("wei") where user='root' and host='localhost'

set password for root@localhost=password("wei");
set password=password("wei"); 
```






数据库字符集设置
```
// mysql配置文件/etc/my.cnf中加入default-character-set=utf8
```

初始化后：
```
To start mysqld at boot time you have to copy
support-files/mysql.server to the right place for your system

PLEASE REMEMBER TO SET A PASSWORD FOR THE MySQL root USER !
To do so, start the server, then issue the following commands:
/usr/bin/mysqladmin -u root password 'new-password'
/usr/bin/mysqladmin -u root -h wififree password 'new-password'

You can start the MySQL daemon with:
cd /usr ; /usr/bin/mysqld_safe &

You can test the MySQL daemon with mysql-test-run.pl
cd mysql-test ; perl mysql-test-run.pl
```
http://www.2cto.com/database/201207/141878.html




扩展
>如要其他机器能访问，在mysql.user中添加一个Host为'%'的user,然后flush priviledges;，最后防火墙加一句类似这样的语句即可(开通3306端口)：

```
-A RH-Firewall-1-INPUT -m state --state NEW -m tcp -p tcp --dport 3306 -j ACCEPT

// 之前一直有问题
mysql -uroot -pttttt
// 一直找不到原因，结果后来发现 -p这个选项有问题，'-'这个有一点点长，==
```

## 对表操作

修改表名
```
alter table radcheck rename radxxx;
```

增加字段
```
alter table radcheck add mac char(17);
```
增加完整性约束条件
```
alter table radcheck add mac char(17) not null;
```
增加字段到表头
```
alter table radcheck add mac int primary key first;
```

修改原字段名称及类型
```
alter table radcheck change mac mac_new varchar(17);
```

删除索引
```
ALTER TABLE `ipstats` DROP INDEX `ip`;
```
删除字段
```
alter table radcheck drop mac;
```

增加表的外键
```
alter table score add constraint fk foreign key(stu_id) references student(id);
```
删除表的外键约束
```
alter table student3 drop foreign key fk;
```
加主关键字索引
```
ALTER TABLE tablename ADD PRIMARY KEY(id);
```
修改表的默认字符集
```
alter table collate='utf8_general_ci'
```

```
use information_schema;
--  # 查询所有数据的大小.
select concat(round(sum(DATA_LENGTH/1024/1024), 2), 'MB') as data from TABLES;
  
--  # 查看指定数据库实例的大小，比如说数据库 forexpert
select concat(round(sum(DATA_LENGTH/1024/1024), 2), 'MB') as data from TABLES where table_schema='forexpert';
  
--  # 查看指定数据库的表的大小，比如说数据库 forexpert 中的 member 表
select concat(round(sum(DATA_LENGTH/1024/1024), 2), 'MB') as data from TABLES where table_schema='forexpert' and table_name='member';
```


创建触发器
```sql
create trigger general_entry_menu after insert on d_menu
    for each row insert into d_rules_list(`rule_name`, `params`, `annotation`) values('menu', CONCAT('id=', NEW.id), NEW.name);
```
删除触发器
```sql
drop trigger general_entry_menu
```

## 其他人的总结

创建myisam表
```
CREATE TABLE test2(
id int(11) NOT NULL AUTO_INCREMENT,
name varchar(255) DEFAULT NULL,
PRIMARY KEY (id)
)ENGINE=MyISAM CHARSET=utf8;
```



创建innodb表
```
CREATE TABLE test1(
id int(11) NOT NULL AUTO_INCREMENT,
name varchar(255) DEFAULT NULL,
PRIMARY KEY (id)
)ENGINE=innodb CHARSET=utf8;
```


```
Insert into test1 (name) values(‘111’);

Update test1 set name=1123 where id = 1;


Delete from test1 where id = 1;
```

创建索引方法create index 或alter table
```
Alter table test1 add index name_index(name);
```

### 索引语法
主键索引：
```
Alter table tablaname add primary key (id);
```
普通索引：
```
Alter table tablename add index [index_name]  (indexcols);
```
惟一索引：
```
Alter table tablename add unique [index_name] (indexcols);
```
全文索引：
```
Alter table tablename add fulltext [index_name] (indexcols);
```

删除一个索引：
```
Alter table tablename drop primary key;
Alter table table name drop index indexname;
```

增加一个列：
```
Alter table test1 add address varchar(255);
```

删除一个列：
```
Alter table test1 drop address;
```

修改一个列
```
Alter table test1 change address add varchar(22);
```

改变数据表类型
```
Alter table test1 engine myisam;
```

删除数据库
```
Drop datebase test;
Drop table test1;
```

权限马上生效
```
flush privileges
```

```
lock table t1 read;/unlock tables;
// 只能读，所有人都不能改。写锁只有自己能读，其它人不能读也不能写
```

```
lock table t1 write;
//自己可以读可改，别人不可读不可改
```

清空表 empty table
```
truncate table test1;
```

```
show variables like '%log_bin%';
```

## 二进制日志
开启方法
```
# my.cnf
log_bin on //开启
```

```
mysql>flush logs; //执行就会多一个最新的bin-log日志。

mysql>show master status; //查看最后一个bin-log日志

mysql>reset master;//清空所有的bin-log日志
```


```bash
./mysqlbinlog --no-defaults mysql-0001.bin//查看日志内容

./mysqlbinlog --no-defaults mysql-0001.bin | mysql -uroot -p123 test//烣复数据

mysqldump -uroot -p123456 -l -F  test> test.sql
-l  lock read -F flush logs
```


慢查询次数
```
show status like 'slow_queries';
```

慢查询时间
```
show variables like 'long_query_time';
```

打开慢查询
```
my.cnf
slow_query_log =1
long_query_time=1
```

存储过程
```
DELIMITER $$
DROP PROCEDURE IF EXISTS create_test1$$
CREATE PROCEDURE  create_test1(IN n INT)
BEGIN
    DECLARE i INT DEFAULT 0;
    SET autocommit = 0;
    WHILE i<n DO
        SET i=i+1;
        INSERT INTO test1(NAME) VALUES('abc');
    END WHILE;
    COMMIT;
    SET autocommit = 1;
END$$
DELIMITER ;
```

显示存储过程
```
SHOW CREATE PROCEDURE pro_test1;
show procedure status \G
```

存储过程预处理语句执行动态表插入
```
DELIMITER $$
DROP PROCEDURE IF EXISTS create_test$$
CREATE PROCEDURE create_test(IN n INT, IN table_name VARCHAR(255))
   
    BEGIN
    DECLARE i INT DEFAULT 0;
        DECLARE  t_sql VARCHAR(255) DEFAULT ''; 
        SET autocommit = 0;
    SET t_sql = CONCAT_WS(' ', 'insert into', table_name, "(name)", 'values', "('222')");
    SET @temp_sql = t_sql;
    PREPARE sm FROM @temp_sql;/*预处理需要执行的动态SQL，其中s1是一个变量*/
    WHILE i<n DO
        SET i = i+1;
        EXECUTE sm;/*执行SQL语句*/
    END WHILE;
    COMMIT;
    DEALLOCATE PREPARE sm;/*释放掉预处理段*/
    SET autocommit = 1;

    END$$

DELIMITER ;
```


function 
```
DELIMITER $$
DROP FUNCTION IF EXISTS shorten$$
CREATE FUNCTION shorten(s VARCHAR(255), n INT) RETURNS VARCHAR(255) CHARSET utf8
BEGIN
    IF ISNULL(s) THEN
        RETURN '';
    ELSEIF n<15 THEN
        RETURN LEFT(s, n);
    ELSE
        IF CHAR_LENGTH(s) <= n THEN
            RETURN n;
        ELSE
            RETURN CONCAT(LEFT(s, n-10), '...', RIGHT(s, 5));
        END IF;
     END IF;
END$$
DELIMITER ;
```


```
DELIMITER $$
DROP FUNCTION IF EXISTS test$$
CREATE FUNCTION test(n INT) RETURNS VARCHAR(255) 
BEGIN
    DECLARE i INT DEFAULT 0;
    DECLARE s TEXT DEFAULT '';
    myloop:REPEAT
        SET i = i+1;
        SET s=CONCAT(s, '*');
    UNTIL i>=n END REPEAT myloop;
    RETURN s;
END$$
DELIMITER ;
```


```
DELIMITER $$
DROP FUNCTION IF EXISTS test1$$
CREATE FUNCTION test1(n INT) RETURNS VARCHAR(255) 
BEGIN
    DECLARE i INT DEFAULT 0;
    DECLARE s TEXT DEFAULT '';
    myloop: WHILE i<n DO
    SET i=i+1;
    SET s=conact(s, '*');
    END WHILE myloop;
    RETURN s;
END$$
DELIMITER ;
```


```
DELIMITER $$
DROP FUNCTION IF EXISTS test2$$
CREATE FUNCTION test2(n INT) RETURNS VARCHAR(255) 
BEGIN
    DECLARE i INT DEFAULT 0;
    DECLARE s TEXT DEFAULT '';
    myloop: LOOP
    SET i=i+1;
    SET s=CONCAT(s, '*');
    IF i>n THEN LEAVE myloop;
    END IF;
    END LOOP myloop;
    RETURN s;
END$$
DELIMITER ;
```



```
DELIMITER $$

DROP VIEW IF EXISTS `test_view`$$
CREATE VIEW test2_view AS (
SELECT
  `test2`.`id`   AS `id`,
  `test2`.`name` AS `name`
FROM `test2`
)$$
DELIMITER ;
```



```
delimiter $$

create function rand_string(n INT) 
returns varchar(255) #该函数会返回一个字符串
begin 
#chars_str定义一个变量 chars_str,类型是 varchar(100),默认值'abcdefghijklmnopqrstuvwxyzABCDEFJHIJKLMNOPQRSTUVWXYZ';
 declare chars_str varchar(100) default
   'abcdefghijklmnopqrstuvwxyzABCDEFJHIJKLMNOPQRSTUVWXYZ';
 declare return_str varchar(255) default '';
 declare i int default 0;
 while i < n do 
   set return_str =concat(return_str,substring(chars_str,floor(1+rand()*52),1));
   set i = i + 1;
   end while;
  return return_str;
  end $$
```


## 参考

#### 指导手册
《网易MySQL》这本不错，讲得很实战化。

#### 慢查询 优化
[b+tree](http://www.javaranger.com/archives/1728)
