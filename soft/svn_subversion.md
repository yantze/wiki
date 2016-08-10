# SVN

## Start
```
# 下拉数据
svn checkout repo_url dest_dir

# 更新数据
svn update
svn up

# 更换远程库
svn relocate new_repo_url
svn switch --relocate OLD_repo_url NEW_repo_url
```

## Advance

设置代理
```
查看[global]选项
```

丢弃一个文件修改
```
svn revert foo.c 
svn revert --recursive .

svn update -r 200 test.php

svn status -v path(显示文件和子目录状态) 
```

## 数据回滚

### 取消代码有两种情况

- have not commit
```bash
# svn revert [-R] path
```
>加上参数-R(Recursive,递归)，否则只会将something这个目录的改动
或者使用svn update 也可以，但是需要向服务器比较。

- had commit
需要了解当前版本号, 想从哪里回滚的版本号, 想回滚的版本号。
查看版本使用，`svn log | less`。

### 开始回滚
- 比如我想在当前版本(359)中，把版本356到357增量的文件回滚，只需要输入：
```bash
# svn merge -r 357:356 .
```
- 可以查看当前改变的内容，`svn diff [path]`
- 当确定后，就可以执行`svn commit -m "mark"`完成新一个版本的提交

