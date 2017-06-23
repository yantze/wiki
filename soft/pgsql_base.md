# PGSQL 基础

创建表
```sql
CREATE TABLE customers 
( 
  customerid SERIAL primary key , 
  companyname character varying, 
  contactname character varying, 
  phone character varying, 
  country character varying 
)
```

修改字段
```
ALTER TABLE ticket_report_group_to_report alter column id type integer ;
```
添加字段
```
alter table merchant add column thenow timestamp with time zone default now();
```
添加主键
```
alter table ticket_report_group_to_report DROP COLUMN id RESTRICT, add COLUMN id serial PRIMARY KEY
```
窗口函数
```
SELECT * FROM (SELECT rank() over(partition by c.source_id,c.wrapper_id order by id desc) as rank_num, * FROM mirror.cpc_ticket c) as a WHERE a.rank_num <= 1
```
修改default
```
alter table merchant alter column comment set default '';
```
导出数据表
```
pg_dump -h l-tdata1.tkt.cn6.qunar.com -p 5432 -U pdata -d log_analysis -t wirelessapi_log_2013_09_02 -t wirelessapi_log_2013_09_03  > e:\wirelessapi_log_0902-03.sql
pg_dump -t table1 -t table2 -t table3 -F c -Z 9 databasename > abc.backup
```
行专列
```
select u.user_id userId,u.user_name userName,r.area,r.province,
sum( case when  m.qunar_cover != 0 then 1 else 0 end) as  destSightSum,
sum( case when  m.status > 6  and m.qunar_cover != 0 then 1 else 0 end ) as  destSightDirectCooperationDaily,
from users u
inner join region_manager rm on u.user_id = rm.user_id
```


```
-h: PostgreSQL服务器的主机为192.168.149.137。

-U: 登录用户为postgres。

-t: 导出表名以test开头的数据表，如testtable。

-a: 仅仅导出数据，不导出对象的schema信息。
```

-f: 输出文件是当前目录下的my_dump.sql
```
# mydatabase是此次操作的目标数据库。
pg_dump -h 192.168.149.137 -U postgres -t test* -a -f ./my_dump.sql mydatabase
```

-c: 先输出删除数据库对象的SQL命令，在输出创建数据库对象的SQL命令，这对于部署干净的初始系统或是搭建测试环境都非常方便。
```
pg_dump -h 192.168.220.136 -U postgres -c -f ./my_dump.sql mydatabase
```

导出mydatabase数据库的信息。在通过psql命令导入时可以重新指定数据库，如：/> psql -d newdb -f my_dump.sql
```
pg_dump -h 192.168.220.136 -U postgres -f ./my_dump.sql mydatabase
```

导出模式为my_schema和以test开头的数据库对象名，但是不包括my_schema.employee_log对象。
```
pg_dump -t 'my_schema.test*' -T my_schema.employee_log mydatabase > my_dump.sql
```

导出east和west模式下的所有数据库对象。下面两个命令是等同的，只是后者使用了正则。
```
pg_dump -n 'east' -n 'west' mydatabase -f my_dump.sql
pg_dump -n '(east|west)' mydatabase -f my_dump.sql
```

如果仅仅导出数据表结构，需要添加 -s 参数，例如：
```
/opt/pg93/bin/pg_dump -h ${HOST} -U ${USER} -T -s -c -f ${PATH}${DATE}_log_analysis.sql log_analysis
```

如果需要导入数据文件，数据文件又比较大，那么可以这么执行
```
\i /home/qiu.li/git/ticket-crm/deploy/AllContactPersonInfo.txt 
```

当然还有更方便的导出文件的命令copy
```
\copy (SELECT ip_format,ip,country, area, region, city, county FROM analytics_ip_data where area is not null) to '/tmp/ip/analytics_ip_data.csv';
```

从csv文件导入到数据库的方法
```
\COPY vender(sid,vender_id,vender_name,connector,created_by,created_dt,version,del_flg) from 'E:\Vendor.csv' WITH CSV  HEADER;
记住添加反斜线，否则会认为在服务器端执行，而找不到路径。
```

