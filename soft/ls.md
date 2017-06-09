---
system: linux
author: yantze

---

# ls

```
ls -t # sort by time
ls -S # sort by size

ls *  # 列出当前目录下子目录的文件
ls -R # 递归所有文件夹

# list only file
ls -p | egrep -v /$
ls -la | egrep -v ^d
find . -type f -maxdepth 1

ls file[12] 
ls file{1, 2}

ls ND # 列出当前文件夹最近修改的 20 个文件

```

