# MatLab usage

## Mysql

### install
download: mysql-connector-java-5.1.22.jar
put: E:\Program Files\MATLAB\R2015b\toolbox\local\classpath.txt

modify: E:\Program Files\MATLAB\R2015b\toolbox\local\classpath.txt
add one line: $matlabroot/java/jar/toolbox/mysql-connector-java-5.1.22.jar

### usage
```
conn = database('test','root','','Vendor','MySQL','Server','localhost')
```
get a no data sql statement.
```
curs = exec(conn, 'select * from a')
```
get a matrix data
```
fetch(conn, 'select * from a')
```

### more
http://cn.mathworks.com/help/database/run-sql-query.html