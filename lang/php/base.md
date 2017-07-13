readfile vs. file_get_contents
Readfile will read the file directly into the output buffer, and file_get_contents will load the file into memory, when you echo the result the data is copied from memory to the output buffer effectively using 2 times the memory of readfile.



## Date
```
echo date('Y-m-t', strtotime('now')); // 2017-07-31, strtotime('now') 可省略
```

