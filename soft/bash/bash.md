# Bash Setting

## 基本设置
自动匹配大小写不敏感
```
echo set completion-ignore-case on | sudo tee -a /etc/inputrc
# ~/.inputrc
```

对于 Ctrl+w 反向删除一个词
```
# ~/.bashrc
bind '"\C-w":backward-kill-word'
```
或者直接 `Alt+BackSpace`，相同的功能

