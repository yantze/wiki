shell 编程

###退出碼
linux命令行上一个命令的退出码放在了$?环境变变中
eg.
$ true; $?  =>  0
$ false; $? =>  1

如果这个命令是一串管道符连接和多个命令，怎么知道每个命令的退出码？
你可以使用 PIPESTATUS环境变量。比如这个测试：true | false | true; echo "${PIPESTATUS[@]}"


###便捷函數
function jz() {
echo "hahah"
echo $*
}

jz hahha
