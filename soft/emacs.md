# Emacs Manual

## Base
C-x C-f # find file
C-x C-v # open another file
C-x C-s # save file
C-x C-w # save to another file
C-x c-c # quit

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

## Info
- [emacs.d](https://github.com/purcell/emacs.d) is my emacs config.
- cheat emacs also have some tips
## [Emacs修炼之道](http://xlambda.com/blog/2013/01/08/the-pragmatic-emacser/)
