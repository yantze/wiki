MySQL基本命令

#初始化修改该密码
mysql -uroot ~~~~

#进入MySQL管理，用yum mysql mysql-devel
mysql -uroot -p

列出数据库：show databases;
选择数据库：use databaseName;
列出表格：show tables；
显示表格列的属性：show columns from tableName；
匹配字符：可以用通配符_代表任何一个字符，％代表任何字符串;
增加一个字段：alter table tabelName add column fieldName dateType;
增加多个字段：alter table tabelName add column fieldName1 dateType,add columns fieldName2 dateType;

#创建用户
insert into mysql.user(Host,User,Password) values("localhost","phplamp",password("1234"));
或者 CREATE USER 'yantze'@'%' IDENTIFIED BY 'zxcvbn';
如果远程访问不了，可能是防火墙的问题
#授权phplamp用户拥有phplamp数据库的所有权限
grant all privileges on yaf.* to yaf@localhost identified by '1234';
grant all privileges on `yaf`.* to `yaf`@'%' with grant option;
grant all on *.* to yaf;
grant all privileges on *.* to 'root'@'%' identified by '1234' with grant option;
#删除用户
DELETE FROM user WHERE User="phplamp" and Host="localhost";
#修改用户密码
update mysql.user set password=password('新密码') where User="phplamp" and Host="localhost";
#创建数据库：
create database phplampDB;
#刷新系统权限表
mysql>flush privileges;








数据库字符集设置
mysql配置文件/etc/my.cnf中加入default-character-set=utf8

初始化后：
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

via:http://www.2cto.com/database/201207/141878.html

改密码另外一个方法：
#chown mysql /var/lib/mysql
chgrp -R mysql /var/lib/mysql
chmod -R 770 /var/lib/mysql
service mysqld start
mysql
SET PASSWORD FOR 'root'@'localhost' = PASSWORD('secret_password');




扩展：
如要其他机器能访问，在mysql.user中添加一个Host为'%'的user,然后flush priviledges;，最后防火墙加一句类似这样的语句即可(开通3306端口)：

-A RH-Firewall-1-INPUT -m state --state NEW -m tcp -p tcp --dport 3306 -j ACCEPT

之前一直有问题
mysql -uroot -pttttt
一直找不到原因，结果后来发现 -p这个选项有问题，'-'这个有一点点长，==


对表操作
#修改表名
alter table radcheck rename radxxx;

#增加字段
alter table radcheck add mac char(17);
#增加完整性约束条件
alter table radcheck add mac char(17) not null;
#增加字段到表头
alter table radcheck add mac int primary key first;

#修改原字段名称及类型
alter table radcheck change mac mac_new varchar(17);

#删除索引
ALTER TABLE `ipstats` DROP INDEX `ip`;
#删除字段
alter table radcheck drop mac;

#未实践
#增加表的外键
#alter table score add constraint fk foreign key(stu_id) references student(id);
#删除表的外键约束
#alter table student3 drop foreign key fk;
#加主关键字索引
#ALTER TABLE tablename ADD PRIMARY KEY(id);
#修改表的默认字符集
#alter table collate='utf8_general_ci'

use information_schema;
   --  # 查询所有数据的大小.
   select concat(round(sum(DATA_LENGTH/1024/1024), 2), 'MB') as data from TABLES;
  
   --  # 查看指定数据库实例的大小，比如说数据库 forexpert
   select concat(round(sum(DATA_LENGTH/1024/1024), 2), 'MB') as data from TABLES where table_schema='forexpert';
  
   --  # 查看指定数据库的表的大小，比如说数据库 forexpert 中的 member 表
  select concat(round(sum(DATA_LENGTH/1024/1024), 2), 'MB') as data from TABLES where table_schema='forexpert' and table_name='member';


