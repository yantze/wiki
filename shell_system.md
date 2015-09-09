###set
set和typeset的区别
set显示当前系统的环境变量
typeset还显示这些系统变量的类型

使用typeset -aU path 可以去掉重复的PATH

###same with ssh-copy-id
`ssh user@host "mkdir -p .ssh && cat >> .ssh/authorized_keys" < ~/.ssh/id_rsa.pub`
mkdir -p to avoid failing if .ssh already exists.
**`ssh-copy-id` not work in mac** can use :
brew install ssh-copy-id
