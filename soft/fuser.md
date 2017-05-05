---
author: yantze
os: linux | darwin
license: CC-BY-NC-SA 4.0

---

# file user 
list current dir being using pid
```
fuser -u .
```

## advance **Only Linux**
```
# display user and command
fuser -v .

# display all user and command to using /usr/bin/zsh
fuser -v /usr/bin/zsh

# check process using TCP/UDP sockets
sudo fuser -v -n tcp 22
```

## Basic
We see that the output consists of process IDs of the processes using fuser but all the PIDs are followed by a character ‘c’. This indicates the type of access.
```
c      current directory
e      executable being run
f      open file. f is omitted in default display mode
F      open file for writing. F is omitted in default display mode
r      root directory
m      mmap’ed file or shared library
```

## Other
`yum install psmisc` to install `fuser`


## See Also
- [lsof](/soft/lsof.md)  list open file
