# MyWiki

看到别人那些荒凉笔记，维护一个知识库是一件多么需要长期坚持的事情。

- 扁平化：`bash_`开头重复多个文件

## On Terminal
- `m`  搜索所有 wiki 内容， 并在终端显示
- `mw` 搜索内容关键字，并打开浏览器
- `mf` 搜索文件名关键字，并打开文件， 如 *LINUX_TIPS.md*, 可以直接输入 `mf tips`
- `mm` 搜索指定命令，用 [cheat](https://github.com/chrisallenlane/cheat) 命令查找

```
alias mw='m web'   # search web
alias mf='m file'  # search file and open it
alias mm='m man'   # search cheat 
# https://github.com/yantze/dotfiles/blob/master/bin/m
```

## On Web
- Chrome 添加自定搜索引擎 MyWiki `https://github.com/yantze/wiki/search?q=%s`, 定义快捷名为`mw`
- Chrome Plugin: [octotee](https://github.com/buunguyen/octotree) - 实现左边侧边栏文件列表
- Chrome Plugin: [Smart TOC](https://chrome.google.com/webstore/detail/lifgeihcfpkmmlfjbailfpfhbahhibba) - 自动生成网页目录并显示
