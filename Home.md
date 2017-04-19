# 个人维基

看到别人那些荒凉笔记，维护一个知识库是一件多么需要长期坚持的事情。

- 扁平化：常用软件使用 `bash_`开头重复多个文件

## Wiki on Terminal
- `mw` 搜索内容关键字，并自动打开浏览器
- `mf` 搜索文件名关键字，并打开某个文件， 比如是 *bash_program.md*, 可以直接输入 `mf program`
- `mm` 搜索指定命令，用 [cheat](https://github.com/chrisallenlane/cheat) 命令查找
```
alias mw='m w'  # search web
alias mf='m f'  # search file and open it
alias mm='m m'  # search cheat 
# https://github.com/yantze/dotfiles/blob/master/bin/m
```

## Wiki on web
- Chrome 添加自定搜索引擎 `https://github.com/yantze/wiki/search?q=%s`, 定义快捷名为`wiki`
- Chrome Plugin: [octotee](https://github.com/buunguyen/octotree) - 实现左边侧边栏文件列表
- Chrome Plugin: [Smart TOC](https://chrome.google.com/webstore/detail/lifgeihcfpkmmlfjbailfpfhbahhibba) - 自动生成网页目录并显示
