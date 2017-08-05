# RegEx Pratice

`.`是另一个元字符，匹配除了换行符以外的任意字符。
`*`同样是元字符，不过它代表的不是字符，也不是位置，而是数量——它指定`*`前边的内容可以连续重复使用任意次以使整个表达式得到匹配
如果需要更精确的说法，`\b`匹配这样的位置：它的前一个字符和后一个字符不全是(一个是,一个不是或不存在)`\w`。
`^\w+`匹配一行的第一个单词(或整个字符串的第一个单词，具体匹配哪个意思得看选项设置)


## 常见正则在不同语言的分布与区别
- http://binaryify.github.io/2016/04/19/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E6%95%B4%E7%90%86/
- http://www.jianshu.com/p/35ec41fb6945
- http://liujiacai.net/blog/2014/12/07/regexp-favors/
- http://blog.csdn.net/miltonzhong/article/details/8864146


## Resource
[PHP RegEx Online](http://phpliveregex.com)
