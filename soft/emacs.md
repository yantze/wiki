# Emacs Manual

## Install
sudo yum install emacs-common emacs-filesystem emacs-nox
brew install emacs --with-cocoa --with-rsvg --with-gnutls --with-imagemagick

## 基本

```
C-x C-f 開檔。
C-x C-s 存檔。
C-x C-w 另存新檔。
C-x C-c 離開 Emacs。
```

## Buffer 相關

```
C-x k 關掉目前 buffer。
C-x C-← 切換到上一個 buffer。
C-x C-→ 切換到下一個 buffer。
C-x b 切換到/開啟一個名為 xxx 的 buffer。
C-x C-b 開啟 buffer 管理員(不推薦使用，預設的管理員難用到爆)
```

## Window 相關

C-x 0 關掉目前 Window
C-x 1 將目前 Window 以外的所有 Window 關掉。
C-x 2 水平分割 Window
C-x 3 垂直分割 Window
C-x o 切換到下一個 Window（不推薦使用，不知道誰想出來的爛設計）

游標移動

C-a 跳到行首
C-e 跳到行尾
M-f 跳到下一個英文單字(f 表示 forward)
M-b 跳到前一個英文單字(b 表示 backward)
M-g M-g 跳到第 N 行。
M-< 跳到文件最頂端。
M-> 跳到文件最尾端。

畫面捲動

C-v 向下捲動一頁
M-v 向上捲動一頁
M-Page Down 隔壁的 window 向下捲動一頁
M-Page Up 隔壁的 window 向上捲動一頁
C-l 畫面與游標位置對齊（重複按可對齊三種位置）

搜尋

C-s 普通字串搜尋（繼續按 C-s 搜尋下一個）
C-M-s Regexp 搜尋 （一樣，也是繼續按 C-s 搜尋下一個）
M-% 字串搜尋並取代

執行外部命令

注意，目前 buffer 的工作目錄就是指令執行時的 pwd 位置。
M-! 執行外部指令(synchronously)
M-& 執行外部指令(asynchronously)
M-| 將選取起來的區域(使用 C-@)透過 pipe 傳送給外部命令


C-d # equal Del
M-d # equal vim dw # M-Backspace
C-k # d$
C-/ # Undo
C-g C-/ # redo


C-x u # run by file type
C-w   # cut current or marked line
c-y   # paste

C-s   # search
C-x C-@ # back to original from
C-r   # find next

M-f next word
M-b previous word
C-a beginning of line
C-e end of line
C-k delete line (starting from cursor)
C-d delete next character after the cursor
C-y restore (yank) line
C-x i insert (file)
M-< top of file
M-> bottom of file
C-v next screen
M-v previous screen
C-s search
M-x and then type "goto-line"
C-x C-s save file
C-x C-c quit emacs
C-z suspend emacs (fg to restore)
C-x C-w save file to different name


## More
C-x z # repeat previous command

M-x kill-emacs # quit by kill
will save a subfix '#' file, use M-x recover-file to recover

C-h t # 调出Emacs Tutorial。
C-h r # 调出Emacs Manual。
C-h k (command) # 调出对应command的帮助，比如C-h k C-n 就是查看C-n的帮助。

# Basic usage

  Indent              Select text then press TAB
  Cut                 CTRL-w
  Copy                ALT-w
  Paste               CTRL-y
  Search/Find         CTRL-s
  Replace             ALT-% (ALT-SHIFT-5)
  Save                CTRL-x CTRL-s
  Load/Open           CTRL-x CTRL-f
  Undo                CTRL-x u
  Highlight all text  CTRL-x h
  Directory listing   CTRL-x d
  Cancel a command    ESC ESC ESC
  Font size bigger    CTRL-x CTRL-+
  Font size smaller   CTRL-x CTRL--

#  Buffers

  Split screen vertically                         CTRL-x 2
  Split screen vertically with 5 row height       CTRL-u 5 CTRL-x 2
  Split screen horizontally                       CTRL-x 3
  Split screen horizontally with 24 column width  CTRL-u 24 CTRL-x 3
  Revert to single screen                         CTRL-x 1
  Hide the current screen                         CTRL-x 0
  Kill the current screen                         CTRL-x k
  Move to the next buffer                         CTRL-x O
  Select a buffer                                 CTRL-x b
  Run command in the scratch buffer               CTRL-x CTRL-e

# Other stuff

  Open a shell         ALT-x eshell
  Goto a line number   ALT-x goto-line
  Word wrap            ALT-x toggle-word-wrap
  Spell checking       ALT-x flyspell-mode
  Line numbers         ALT-x linum-mode
  Toggle line wrap     ALT-x visual-line-mode
  Compile some code    ALT-x compile
  List packages        ALT-x package-list-packages

#  Sudoing within eshell

  By default when using the sudo command within eshell you'll just
  get "permission denied" messages. To overcome that type:

    alias sudo '*sudo $*'

# Line numbers

  To add line numbers and enable moving to a line with CTRL-l:

    (global-set-key "\C-l" 'goto-line)
    (add-hook 'find-file-hook (lambda () (linum-mode 1)))

# Org-mode

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

## redo
```
To undo once: C-/
To undo twice: C-/ C-/
To redo once, immediately after undoing: C-g C-/
To redo twice, immediately after undoing: C-g C-/ C-/. Note that C-g is not repeated.
To undo immediately again, once: C-g C-/
To undo immediately again, twice: C-g C-/ C-/
```

關掉目前的 Frame 是 C-x 0 ， 但這個動作並不會把 Buffer 也一起關掉！ 即使關掉 frame，buffer 其實還活在背景中、隨時可以叫出。這一點與現在一般常見的編輯器不同，並不是關掉視窗後、檔案也會一起關閉。
切換到不同的 Frame： C-x o
將目前以外的所有 Frame 關掉： C-x 1
將目前的 Frame 分成上下兩塊： C-x 2
將目前的 Frame 分成左右兩塊： C-x 3
關掉 Buffer 是 C-x k ， 將會真正地把檔案關掉 (kill-buffer)
切換到下一個/前一個 buffer： C-x C-<right>/<left> （方向鍵）
直接切到某個 buffer： C-x b （可以用 tab 鍵補全）
開啟 buffer 管理員： C-x C-b （強力推薦改用 Ibuffer ，因為預設的非常難用）

## Info
- [emacs.d](https://github.com/purcell/emacs.d) is my emacs config.
- cheat emacs also have some tips
- https://github.com/emacs-tw/emacs-101
## [Emacs修炼之道](http://xlambda.com/blog/2013/01/08/the-pragmatic-emacser/)
