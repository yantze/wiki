# 正则表达式的脉络

常见的正则表达式记法，是从Perl衍生出一个显赫的流派，叫做PCRE(Perl Compatible Regular Expression)，『\d』、『\w』、『\s』之类的记法，就是这个流派的特征。

Unix/Linux下的工具大多采用POSIX(Portable Operating System Interface)规范，同时，POSIX规范又可分为两种流派(flavor):
- 基本的正则表达式(BRE – Basic Regular Expressions)
- 扩展的正则表达式(ERE – Extended Regular Expressions)
> ERE包括BRE功能和另外其它的概念。

正则表达式目前有两种解释引擎(常用为NFA)：
- 基于字符驱动(text-directed engine)
- 基于正则表达式驱动(regex-directed engine)
> Jeffery Friedl把它们称作DFA和NFA解释引擎。

## POSIX规范

### BRE

#### 老BRE
有些工具的诞生时间很早，正则表达式的许多功能却是逐步发展演化出来的，之前这些元字符可能并没有特殊的含义；为保证向后兼容，就只能使用转义。而且有些功能甚至根本就不支持，比如BRE就不支持『+』和『?』量词，也不支持多选结构『(…|…)』和反向引用『\1』、『\2』…。

#### GNU BRE
扩展了BRE的功能，只需要转义就可以正常使用『+』和『?』量词、多选结构『(…|…)』和反向引用『\1』、『\2』


### ERE

#### 老ERE
虽然BRE名为“基本”而ERE名为“扩展”，但ERE并不要求兼容BRE的语法，而是自成一体。因此其中的元字符不用转义（在元字符之前添加反斜线会取消其特殊含义），所以『(ab|cd)』就可以匹配字符串ab或者cd，量词『+』、『?』、『{n,m}』可以直接使用。ERE并没有明确规定支持反向引用，但是不少工具都支持『\1』、『\2』之类的反向引用。

#### GNU ERE
其实，现在的BRE和ERE在功能上并没有什么区别，主要的差异是在元字符的转义上


### 几种POSIX流派的说明
```
流派    | 说明                                                                 | 工具|
BRE     | (、)、{、}都必须转义使用，不支持+、?、|                              | grep、sed、vi(但vi支持这些多选结构和反向引用)|
GNU BRE | (、)、{、}、+、?、|都必须转义使用                                    | GNU grep、GNU sed|
ERE     | 元字符不必转义，+、?、(、)、{、}、|可以直接使用，\1、\2的支持不确定  | egrep、awk|
GNU ERE | 元字符不必转义，+、?、(、)、{、}、|可以直接使用，支持\1、\2          | grep –E、GNU awk|
```

### 常用Linux/Unix工具中的表示法(GNU)
```
PCRE记法  | vi/vim  | grep      | awk       | sed       |
*         | *       | *         | *         | *         |
+         | \+      | \+        | +         | \+        |
?         | \=      | \?        | ?         | \?        |
{m,n}     | \{m,n}  | \{m,n\}   | {m,n}     | \{m,n\}   |
\b *      | \< \>   | \< \>     | \< \>     | \y \< \>  |
(…|…)     | \(…\|…\)| \(…\|…\)  | (…|…)     | (…|…)     |
(…)       | \(…\)   | \(…\)     | (…)       | (…)       |
\1 \2     | \1 \2   | \1 \2     | 不支持    | \1 \2     |
```

> 注：PCRE中常用\b来表示“单词的起始或结束位置”，但Linux/Unix的工具中，通常用\<来匹配“单词的起始位置”，用\>来匹配“单词的结束位置”，sed中的\y可以同时匹配这两个位置。

## POSIX字符组

在某些文档中，你还会发现类似『[:digit:]』、『[:lower:]』之类的表示法，它们看起来不难理解（digit就是“数字”，lower就是“小写”），但又很奇怪，这就是POSIX字符组。不仅在Linux/Unix的常见工具中，甚至一些变成语言中都出现了这些字符组，为避免困惑，这里有必要简要介绍它们。

在POSIX规范中，『[a-z]』、『[aeiou]』之类的记法仍然是合法的，其意义与PCRE中的字符组也没有区别，只是这类记法的准确名称是POSIX方括号表达式（bracket expression），它主要用在Unix/Linux系统中。POSIX方括号表示法与PCRE字符组的最主要差别在于：POSIX字符组中，反斜线\不是用来转义的。所以POSIX方括号表示法『[\d]』只能匹配\和d两个字符，而不是『[0-9]』对应的数字字符。

为了解决字符组中特殊意义字符的转义问题，POSIX方括号表示法规定，如果要在字符组中表达字符]（而不是作为字符组的结束标记），应当让它紧跟在字符组的开方括号之后，所以POSIX中，正则表达式『[]a]』能匹配的字符就是]和a；如果要在POSIX方括号表示法中表达字符-（而不是范围表示法），必须将它紧挨在闭方括号]之前，所以『[a-]』能匹配的字符就是a和-。

POSIX规范也定义了POSIX字符组，它近似等价于于PCRE的字符组简记法，用一个有直观意义的名字来表示某一组字符，比如digit表示“数字字符”，alpha表示“字母字符”。

不过，POSIX中还有一个值得注意的概念：locale（通常翻译为“语言环境”）。它是一组与语言和文化相关的设定，包括日期格式、货币币值、字符编码等等。POSIX字符组的意义会根据locale的变化而变化，下面的表格介绍了常见的POSIX字符组在ASCII语言环境与Unicode语言环境下的意义，供大家参考。

```
POSIX字符组        | 说明                           | ASCII语言环境                       | Unicode语言环境        |
[:alnum:]*         | 字母字符和数字字符             | [a-zA-Z0-9]                         | [\p{L&}\p{Nd}]         |
[:alpha:]          | 字母                           | [a-zA-Z]                            | \p{L&}          |
[:ascii:]          | ASCII字符                      | [\x00-\x7F]                         | \p{InBasicLatin}          |
[:blank:]          | 空格字符和制表符               | [ \t]                               | [\p{Zs}\t]          |
[:cntrl:]          | 控制字符                       | [\x00-\x1F\x7F]                     | \p{Cc}          |
[:digit:]          | 数字字符                       | [0-9]                               | \p{Nd}          |
[:graph:]          | 空白字符之外的字符             | [\x21-\x7E]                         | [^\p{Z}\p{C}]          |
[:lower:]          | 小写字母字符                   | [a-z]                               | \p{Ll}          |
[:print:]          | 类似[:graph:]，但包括空白字符  | [\x20-\x7E]                         | \P{C}          |
[:punct:]          | 标点符号                       | [][!"#$%&'()*+,./:;<=>?@\^_`{|}~-]  | [\p{P}\p{S}]          |
[:space:]          | 空白字符                       | [ \t\r\n\v\f]                       | [\p{Z}\t\r\n\v\f]          |
[:upper:]          | 大写字母字符                   | [A-Z]                               | \p{Lu}          |
[:word:]*          | 字母字符                       | [A-Za-z0-9_]                        | [\p{L}\p{N}\p{Pc}]          |
[:xdigit:]         | 十六进制字符                   | [A-Fa-f0-9]                         | [A-Fa-f0-9]         |
```

> 注1：标记*的字符组简记法并不是POSIX规范中的，但使用很多，一般语言中都提供，文档中也会出现。

POSIX字符组的使用有所不同。主要区别在于，PCRE字符组简记法可以脱离方括号直接出现，而POSIX字符组必须出现在方括号内，所以同样是匹配数字字符，单独出现时，PCRE中可以直接写『\d』，而POSIX字符组就必须写成『[[:digit:]]』。

Linux/Unix下的工具中，一般都可以直接使用POSIX字符组，而PCRE的字符组简记法『\w』、『\d』等则大多不支持，所以如果你看到『[[:space:]]』而不是『\s』，一定不要感到奇怪。

不过，在常用的编程语言中，Java、PHP、Ruby也支持使用POSIX字符组。其中Java和PHP中的POSIX字符组都是按照ASCII语言环境进行匹配；Ruby的情况则要复杂一点，Ruby 1.8按照ASCII语言环境进行匹配，而且不支持『[:word:]』和『[:alnum:]』，Ruby 1.9按照Unicode语言环境进行匹配，同时支持『[:word:]』和『[:alnum:]』。

### 参考(大部分)
http://www.infoq.com/cn/news/2011/07/regular-expressions-6-POSIX

### 扩展阅读
http://pubs.opengroup.org/onlinepubs/009695399/basedefs/xbd_chap09.html
http://en.wikipedia.org/wiki/Regular_expression
http://www.cnblogs.com/ptfree/articles/1224913.html
