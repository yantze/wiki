# MySQL基础

## dateType
MySQL comes with the following data types for storing a date or a date/time value in the database:
```
DATE - format YYYY-MM-DD
DATETIME - format: YYYY-MM-DD HH:MI:SS
TIMESTAMP - format: YYYY-MM-DD HH:MI:SS
YEAR - format YYYY or YY
```

## MySQL Date Functions
```
Function        Description
NOW()           Returns the current date and time
CURDATE()       Returns the current date
CURTIME()       Returns the current time
DATE()          Extracts the date part of a date or date/time expression
EXTRACT()       Returns a single part of a date/time
DATE_ADD()      Adds a specified time interval to a date
DATE_SUB()      Subtracts a specified time interval from a date
DATEDIFF()      Returns the number of days between two dates
DATE_FORMAT()   Displays date/time data in different formats
```

# utf8mb4
- 当使用 utf8 字符集时，需要保留的长度就是 utf8 
    - 最长字符长度乘以字符串长度，所以这里理所当然的限制了 utf8 最大长度为 3，比如 CHAR(100) Mysql 会保留 300字节长度。
    - 至于后续的版本为什么不对 4 字节长度的 UTF-8 字符提供支持，我想一个是为了向后兼容性的考虑，还有就是基本多文种平面之外的字符确实很少用到。

- 要在 Mysql 中保存 4 字节长度的 UTF-8 字符，需要使用 utf8mb4 字符集
    - 但只有 5.5.3 版本以后的才支持（查看版本： select version();）。
    - 我觉得，为了获取更好的兼容性，应该总是使用 utf8mb4 而非 utf8. 对于 CHAR 类型数据，utf8mb4 会多消耗一些空间，根据 Mysql 官方建议，使用 VARCHAR 替代 CHAR。
