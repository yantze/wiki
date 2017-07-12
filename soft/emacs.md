# Emacs Manual

## 基本

| Shortcut    | Action                   |
| ---         | ---                      |
| C-x C-f     | open a file              |
| C-x C-s     | save a file              |
| C-x C-w     | save new file            |
| C-x k       | close Emacs without save |
| C-x C-c     | close Emacs              |
| ESC ESC ESC / c-g | cancel a command         |
> Close Emacs will save a buffer in a subfix '#' file, use `M-x recover-file` to recover

## Window 相关

| Shortcut | Action                                 |
| ---      | ---                                    |
| C-x 0    | 关掉目前 Window                        |
| C-x 1    | 将目前 Window 以外的所有 Window 关掉。 |
| C-x 2    | 水平分割 Window                        |
| C-x 3    | 垂直分割 Window                        |
| C-x o    | 切换到下一个 Window                    |
| F10      | 打开 Menu                              |

## Buffer 相关

| Shortcut | Action                                               |
| ---      | ---                                                  |
| C-x k    | 关掉目前 buffer                                      |
| C-x ←    | 切换到上一个 buffer                                  |
| C-x →    | 切换到下一个 buffer                                  |
| C-x b    | 切换到/开启一个名为 xxx 的 buffer                    |
| C-x C-b  | 开启 buffer 管理员(不推荐使用，预设的管理员难用到爆) |


## 游标移动

| Shortcut | Action                          |
| ---      | ---                             |
| C-a      | 跳到行首                        |
| C-e      | 跳到行尾                        |
| M-f      | next word (f 表示 forward)      |
| M-b      | previous word (b 表示 backward) |
| M-g      | M-g 跳到第 N 行。               |
| M-r      | 循环跳动光标的文件中上下        |
> 显示行数，`M-x global-linum-mode`，下次打开自动显示行数。只当前显示，`M-x linum-mode`

## 画面卷动

| Shortcut | Action                             |
| ---      | ---                                |
| M-<      | top of file                        |
| M->      | bottom of file                     |
| C-v      | next screen                        |
| M-v      | previous screen                    |
| C-l      | 画面与游标位置对齐(循环)三种位置） |

## 搜寻

| Shortcut | Action                                          |
| ---      | ---                                             |
| C-s      | 普通字串搜寻（继续按 C-s 搜寻下一个）           |
| C-M-s    | Regexp 搜寻 （一样，也是继续按 C-s 搜寻下一个） |
| C-r      | find next                  |
| M-%      | 字串搜寻并取代                                  |

## 编辑
| Shortcut    | Action                                              |
| ---         | ---                                                 |
| C-d         | Del                                                 |
| M-d         | equal vim dw # M-Backspace                          |
| C-k         | d$, C-k at the end of a line, it joins that line with the following line. |
| C-/         | Undo, 在 Terminal.app 中使用 Control+-  [^footnote 1] |
| C-g C-/     | redo                                                |
| M-backspace | Delete privous word                                 |
| C-w         | cut current or marked line                          |
| C-y         | paste: restore (yank) line                          |


## 执行外部命令
> 注意，目前 buffer 的工作目录就是指令执行时的 pwd 位置。

| Shortcut | Action                                             |
| ---      | ---                                                |
| M-!      | 执行外部指令(synchronously)                        |
| M-&      | 执行外部指令(asynchronously)                       |
| M-       | 将选取起来的区域(使用 C-@)透过 pipe 传送给外部命令 |


## More
| Shortcut           | Action                                                 |
| ---                | ---                                                    |
| C-x u              | run by file type                                       |
| C-x C-@            | back to original from                                  |
| C-x i              | insert (file)                                          |
| C-x z              | repeat previous command                                |
| C-x d           | Directory listing                                      |
| C-x C-+      | Font size bigger (GUI)                                 |
| C-x C--      | Font size smaller  (GUI)                               |
|                    |                                                        |
| C-h t              | 调出Emacs Tutorial                                     |
| C-h r              | 调出Emacs Manual                                       |
| C-h k (command)    | 调出对应command的帮助，比如C-h k C-n 就是查看C-n的帮助 |
|                    |                                                        |
| C-u 5 C-x 2  | Split screen vertically with 5 row height              |
| C-u 24 C-x 3 | Split screen horizontally with 24 column width         |
| C-x 1           | Revert to single screen                                |
| C-x 0           | Hide the current screen                                |
| C-x b           | Select a buffer                                        |
| C-x C-e      | Run command in the scratch buffer                      |
|                    |                                                        |
| ALT-x eshell                 |    Open a shell                                |
| ALT-x goto-line              |    Goto a line number                          |
| ALT-x toggle-word-wrap       |    Word wrap                                   |
| ALT-x flyspell-mode          |    Spell checking                              |
| ALT-x linum-mode             |    Line numbers                                |
| ALT-x visual-line-mode       |    Toggle line wrap                            |
| ALT-x compile                |    Compile some code                           |
| ALT-x package-list-packages  |    List packages                               |


## Org-mode
Org-mode 可以方便的创建和修改 markdown 表格
```
To begin org-mode                            ALT-x org-mode
Table column separator                       Vertical/pipe character
Reorganize table                             TAB
Section heading                              *
Open/collapse section                        TAB
Open/collapse All                            CTRL-TAB
Export in other file formats (eg HTML,PDF)   CTRL-c CTRL-e

To make org-mode automatically wrap lines:

  (add-hook 'org-mode-hook
            '(lambda ()
               (visual-line-mode 1)))

```
more info `M-x org-info`.


## Redo
```
To undo once: C-/
To undo twice: C-/ C-/
To redo once, immediately after undoing: C-g C-/
To redo twice, immediately after undoing: C-g C-/ C-/. Note that C-g is not repeated.
To undo immediately again, once: C-g C-/
To undo immediately again, twice: C-g C-/ C-/

关掉目前的 Frame 是 C-x 0 ， 但这个动作并不会把 Buffer 也一起关掉！ 即使关掉 frame，buffer 其实还活在背景中、随时可以叫出。这一点与现在一般常见的编辑器不同，并不是关掉视窗后、档案也会一起关闭。
切换到不同的 Frame： C-x o
将目前以外的所有 Frame 关掉： C-x 1
将目前的 Frame 分成上下两块： C-x 2
将目前的 Frame 分成左右两块： C-x 3
关掉 Buffer 是 C-x k ， 将会真正地把档案关掉 (kill-buffer)
切换到下一个/前一个 buffer： C-x C-<right>/<left> （方向键）
直接切到某个 buffer： C-x b （可以用 tab 键补全）
开启 buffer 管理员： C-x C-b （强力推荐改用 Ibuffer ，因为预设的非常难用）

```

## Info

Install
```
# centos-like
#- emacs-nox   # no x window emacs
sudo yum install emacs-common emacs-filesystem emacs-nox

# darwin
#- with-cocoa  # gui
brew install emacs --with-cocoa --with-rsvg --with-gnutls --with-imagemagick
```

如果安装包管理器不能正常工作，主要是代理问题
```
去掉 `https://melpa.org/packages/` 中的 https 为 http
(add-hook 'server-visit-hook
  (lambda ()
    (set-terminal-coding-system 'utf-8)
    (set-keyboard-coding-system 'utf-8)))
    ;;

(setq-default custom-enabled-themes '(sanityinc-solarized-light))
```

Alias
> use alias to run emacs server, the fastest open a file by emacs. run a frame.
```
# use `emacs --daemon` to run emacs server and then `emacsclient filename`
# `-a ''` attempt to connect to an existing server, and if no server exists, start one then connect to it.

alias ec='emacsclient -a ""'        # osx
alias ec='emacsclient -a "" -c'     # linux
alias et='emacsclient -t'           # 适合 GUI 时，启动一个新的 frame (-n)
alias en='emacsclient -n'           # 适合 终端运行(emacs --daemon) 后
# alias e='command emacs -nw' # run emacs gui in command line

# shutdown emacs server M-x kill-emacs
```

## 网络访问不能问题
```
(setq configuration-layer--elpa-archives
    '(("melpa-cn" . "http://mirrors.tuna.tsinghua.edu.cn/elpa/melpa/")
      ("org-cn"   . "http://mirrors.tuna.tsinghua.edu.cn/elpa/org/")
      ("gnu-cn"   . "http://mirrors.tuna.tsinghua.edu.cn/elpa/gnu/")))

(setq configuration-layer--elpa-archives
    '(("melpa-cn" . "http://elpa.emacs-china.org/melpa/")
      ("org-cn"   . "http://elpa.emacs-china.org/org/")
      ("gnu-cn"   . "http://elpa.emacs-china.org/gnu/")))

from: https://github.com/emacs-china/elpa
```

## 兼容性问题
1. tmux 与 `Ctrl + a` 冲突，其实很好解决，在 tmux.conf 里面添加，然后按两次 `Ctrl + a` 可以实现
```
# campatible with emacs shortcut
bind ^a send-keys 'C-a'
```

2. Terminal.app 不支持 `Ctrl + /` 撤销，使用 `Ctrl + -`

## 参考资料
Config
- [emacs.d](https://github.com/purcell/emacs.d) is my emacs config.
- cheat emacs tips
- https://github.com/emacs-tw/emacs-101

Resource
- [Emacs修炼之道](http://xlambda.com/blog/2013/01/08/the-pragmatic-emacser/)
- [Gun Emacs Editing](https://www.gnu.org/software/emacs/manual/html_node/emacs/Basic.html#Basic)
- [Gun Emacs Moving Point](https://www.gnu.org/software/emacs/manual/html_node/emacs/Moving-Point.html)
- [EmacsWiKi LineNumbers](https://www.emacswiki.org/emacs/LineNumbers)

---
[^footnote 1]: 具体原因请看 [how to send c-/ ?](https://apple.stackexchange.com/questions/24261/how-do-i-send-c-that-is-control-slash-to-the-terminal)
