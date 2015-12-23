
正则
```
>>> r_include = re.compile(r'(?!\\)#include \"(.*?)\"($|#)', re.M)
>>> r_include.search('#include "foo"').groups()
('foo', '')
>>> r_include.search('foo\n#include "bar.html"\nbaz').groups()
('bar.html', '')
```
