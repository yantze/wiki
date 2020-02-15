# Kill 进程相关

常见关闭进程的方式：
- Ctrl+C 给进程发送 SIGKILL 信号
- kill pid 给进程发送 SIGKILL 信号
- kill -9 pid 发送 SIGKILL, kill 默认发送的是 kill -15, SIGTERM (software termination signal)
- 发送 SIGQUIT
- 发送 SIGABRT

## 相关的 nohup 命令
用于忽略 hangup(SIGHUP) 信号。比如在 ssh 下建立的程序，忽略 SIGHUP 信号。
```
nohup COMMAND
```
通常 `nohup mycommand > mycommand.out 2> mycommand.err &` 可以重定向管道到其它文件，也可以用 2>&1

## Signals 参考
| Signal Number | Signal Name  |
|:-:|---|
| 1 | HUP (hang up) |
| 2 | INT (interrupt) |
| 3 | QUIT (quit) |
| 6 | ABRT (abort) |
| 9 | KILL (non-catchable, non-ignorable kill) |
| 14| ALRM (alarm clock) |
| 15| TERM (software termination signal) |

## 参考
- `man kill`
- Linux 进程卡住了怎么办？https://juicefs.com/blog/cn/posts/howto-solve-d-status-process/
