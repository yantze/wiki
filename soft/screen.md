# Screen

## Command
```
screen top      # display process status
screen -x       # Attach to a not detached screen session.

screen -ls      # session list
screen -r 11048 # attach with id, -R if no session try to new
screen -S name  # start a session with name, `screen -r name`
```

## Shortcut
```
Key             Action  Notes
Ctrl+a c        new window
Ctrl+a n        next window
Ctrl+a p        previous window
Ctrl+a k        kill current window
Ctrl+a d        detach screen from terminal Start screen with -r option to reattach

Ctrl+a "        select window from list I have window list in the status line
Ctrl+a Ctrl+a   previous window viewed
Ctrl+a 0..9     select special window

Ctrl+a S        split terminal horizontally into regions    Ctrl+a c to create new window there
Ctrl+a |        split terminal vertically into regions  Requires screen >= 4.1
Ctrl+a :resize  resize region
Ctrl+a :fit     fit screen size to new terminal size    Ctrl+a F is the same. Do after resizing xterm
Ctrl+a :remove  remove region   Ctrl+a X is the same
Ctrl+a tab      Move to next region

Ctrl+a x        lock session    Enter user password to unlock
Ctrl+a [        enter scrollback/copy mode  Enter to start and end copy region. Ctrl+a ] to leave this mode
Ctrl+a ]        paste buffer    Supports pasting between windows

Ctrl+a ?        show key bindings/command names Note unbound commands only in man page
Ctrl+a :        goto screen command prompt  up shows last command entered
```
