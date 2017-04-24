zsh 使用技巧
---

> 先查看 `man zsh-lovers` 或者 `lang/bash/zsh-lovers.1.txt` 文件 或者网页版[zsh-lovers](https://grml.org/zsh/zsh-lovers.html) 查看里面的用法先
> 执行 `brew install zsh-lovers` 可以快速安装 `man zsh-lovers`

## 便捷 or 常用
```
ESC ESC - 执行 sudo， 或者用 sudo !! 也行，而 ! 这个通配符是由 histchars 决定
^lastcommandword^reg^ - 替换上一个命令, 这个通配符也是由 histchars 决定
ESC . - 上一次命令最后一个单词，windows 的putty 可以用 `alt + .`
fc - 读取上一个命令，并用 $EDITOR 打开，保存退出后会显示在命令行，类似功能有的 `Ctrl+x-e` [more](http://superuser.com/questions/409150/how-do-i-edit-previous-lines-in-a-multiple-line-command-in-bash)

    > 转换多行代码为一行代码的风格，使用&&替换; [more](http://askubuntu.com/questions/619894/run-multiple-line-as-a-single-line-command-bash)
Ctrl+x-x, Ctrl+e, Ctrl+a - 分别控制回跳，行尾，行首
```




## 基础
```
..  快速向上跳 ‘...’顶目录
ls * 或者ls -l * 都是可以递归显示
j 曾今访问过的目录名 这个功能需要安装autojump/z
alt+l 直接执行上一次执行的内容
直接输入目录可以进入
zsh 的补全，所有待补全项都可以通过键盘方向键或者 <Ctrl-n/p/f/b> 来选择
聰明的目錄補全 cd /u/p/w/p/s/m/w/s/j<TAB>
快速目录切换 zsh 会记住你每一次切换的路径，然后通过 1 来切换到你上一次访问的路径，2 切换到上上次……一直到 9，还可以通过 d 查看目录访问历史
自动历史目录 cd -<TAB>, 可以看到当前命令行中的历史目录
```

osx:
```
man-preview 通过 preview 程序查看一个命令的手册，例如 man-preview git  (需要給oh-my-zsh
中添加參數 osx)
quick-look 快速预览文件
pfd 返回最前 finder 打开的文件夹的路径
cdf 切换到最前 finder 所在的目录
cds 切换到最前 finder 目录或者选中的文件，可以使用 $(`cds`) 获取字符串（使用我的 zsh_func）
```

zsh内置函数
```
zmv
zmv '(*).lis' '$1.txt' // renames 'foo.lis' to 'foo.txt'
alias mmv='noglob zmv -W'  //noglob means no need quote the arguments
mmv *.c.orig orig/*.c
```


###.zprezto
```
kill <tab>
pkill <tab>
```

z
```
export _Z_CMD='j'
can rename the command z to j
z foo bar
```

autojump
```
# use j to jump a dir/file
```


###on-my-zsh

### the prezto maybe more morden
https://github.com/sorin-ionescu/prezto
install and update:
```
git pull && git submodule update --init --recursive
```

## 提升
设置 zsh 的通配符: histchars，比较简单。
[Changing History Characters with histchars](http://docstore.mik.ua/orelly/unix3/upt/ch30_15.htm)


The Zsh Reference Card and the zsh-lovers man page are indispensable.
http://www.bash2zsh.com/zsh_refcard/refcard.pdf
http://grml.org/zsh/zsh-lovers.html
