# find Command
```
find http://www.cnblogs.com/peida/archive/2012/11/14/2769248.html
常用find：
find . -type f -exec ls -l {} \;
find . -type f -mtime +14 -exec rm {} \;
find . -name "*.log" -mtime +5 -ok rm {} \;
find /etc -name "passwd*" -exec grep "root" {} \;
find . -name "*.log" -exec mv {} .. \;
find . -name "*.log" -exec cp {} test3 \;
find . -depth; 这个可以不让find输出文件夹
find . -name "*.log" print0 | xargs -0 cat | wc -l
find . -perm /u+x -type f -exec rm {} \;  //删除可执行文件
find . -perm /u+x -maxdepth 1 -type f -exec ag xxx {} \;  //查找当前目录的文件
find 路径 -name '*.JPG' -exec rename "s/.JPG/.jpg/g" \{\} \; //修改文件扩展名
for filename in *eee*; do newname=`echo $filename|sed -n ‘s/eee/EEE/p’`; mv $filename $newname;done
for  i in `ls|grep glyphicons`

# recent file
-mtime -2 修改时间在2天内
-mtime +3 修改时间在3天前
```
