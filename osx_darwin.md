---
author: yantze
os: darwin

---


# OSX Darwin

## 命令行常用
> 需要加载 oh-my-zsh 的插件 `osx`, 查看 `oh-my-zsh.md` 文档
```
quick-look
clipcopy, pbcopy, pbpaste
```

网络设置相关
```
# 查找你的路由器地址, 假设命令输出1.2.3.4
/usr/sbin/networksetup -getinfo Wi-Fi | grep Router

# 恢复网关, 1.2.3.4 换成第一条命令的输出
sudo /sbin/route change default 1.2.3.4

# 恢复DNS, 1.2.3.4 换成第一条命令的输出
sudo networksetup -setdnsservers Wi-Fi 1.2.3.4

# 确认网关已恢复
/usr/sbin/netstat -nr | grep default | awk '{print $2}'

# 确认DNS已恢复
/usr/sbin/networksetup -getdnsservers Wi-Fi
```

## OSX Services

> 建议使用 Setting 中的 File Shairing 功能， ftp server 配置太不方便，建立一个账户即可

ftp server
```bash
# start
sudo -s launchctl load -w /System/Library/LaunchDaemons/ftp.plist
# stop
sudo -s launchctl unload -w /System/Library/LaunchDaemons/ftp.plist
# manual
man ftpd
```

另外设置 ftp 的用户默认目录(假设 user 是 `yantze`, 如果改不了文件,使用 `sudo su`, 进入 root 用户)

1. 修改 ftpusers , 增加 user, 可以参考 `/usr/share/ftpd/examples/ftpusers`
```
# /etc/ftpusers 
yantze allow myclass
```
2. 修改 ftpd.conf , 增加 class , 可以参考 `/usr/share/ftpd/examples/ftpd.conf`
```
# /etc/ftpd.conf
chroot myclass /another/dir
```
3. 修改 ftpchroot , 增加 user, 可以参考 `man ftpchrrot`
```
# /etc/ftpchroot
yantze
```
说明一下,ftpusers 如果不加 `allow myclass`, 那么这里面的列表是不允许 ftp 登录的. ftpd.conf 的 class 是为了定义一连串的设置. ftpchroot 是允许哪些用户可以自定义登录目录.


使用 File Sharing 共享文件
- 由于默认的 admin 账户在 samba 客户端中是明文密码保存，所以 admin 默认是不能访问的
- 在共享的文件夹列表右侧用户列表，选择添加，一个账户，设置好帐号密码
- 在 Options 里面勾选新的帐号名称，输入密码，（如果输入的密码一直提示不对，在命令行 `passwd newusernae` 重置密码
- 然后samba 软件客户端就能发现这个服务，然后登录进去

其中有两个问题
- 在 options 勾选用户后，这个用户能访问所有共享文件夹，不明白为什么会这样
- 以至于无法区分文件权限，作单独的配置


### OSX 的用户系统
- 查看单用户模式的列表: `/etc/passwd`, 里面也有说明只有单一用户模式有效
- 查看图形模式所有用户的列表: 打开`Directory Utility`软件，可以找到用户所有auth信息
- `/var/db/dslocal/nodes/Default/users` 是`Directory Utility`的文件存储数据，里面的文件列表就是当前系统所有用户的列表，里面的文件大部分是apple自定的LDAP格式，最好用提供的工具修改

> osx 系统使用 opendirtectoryd 服务，可以用多种架构去管理用户，我看有三种用户管理工具 `Active Directory` `LDAPv3` `NIS` 在`Directory Utility`工具中有出现，不过其实系统还支持 `Local`的方式存储用户信息，类似 linux ，以后用的着可以找一下.
> 相关命令有 `man opendirectoryd`, `odutil`, `dscl`

制作OSX移动u盘
```
sudo /Volumes/MacX/Install OS X El Capitan.app/Contents/Resources/createinstallmedia --volume /Volumes/Untitled --applicationpath /Volumes/MacX/Install OS X El Capitan.app --nointeraction
```


### 查看负载均衡
```
sysctl vm.loadavg
```

install homebrewcask
```
brew install caskroom/cask/brew-cask
```

install coreutils to compatible linux
```
brew install coreutils 
```

brew remove special version
```
rm -rf /usr/local/Cellar/node/0.4.11
```

brew delete all but the newer version
```
brew cleanup node
```

install Today-Scripts
https://github.com/SamRothCA/Today-Scripts


### DNS
- Install dnsmasq. 
>    'adress=/local/127.0.01' may not work
    ping aaa.aaa.local, work;
    ping aaa.local, not work;
    but dev not this case;may be 'local' is system key word

- Add dev file to /etc/resolver/dev
> cat /etc/resolver/dev, nameserver 127.0.0.1

### OS X Screencast to animated GIF
- Open "Quicktime Player",
- Go to File -> New Screen Recording
- Selected screen portion by dragging a rectangle, recorded 13 second video.
```
ffmpeg -i in.mov -s 600x400 -pix_fmt rgb24 -r 10 -f gif - | gifsicle --optimize=3 --delay=3 > out.gif
```

> Notes on the arguments:
```
-r 10 tells ffmpeg to reduce the frame rate from 25 fps to 10
-s 600x400 tells ffmpeg the max-width and max-height
--delay=3 tells gifsicle to delay 30ms between each gif
--optimize=3 requests that gifsicle use the slowest/most file-size optimization
```

share the git using dropbox and public url:
```
cp out.gif ~/Dropbox/Public/screenshots/Screencast-`date +"%Y.%m.%d-%H.%M"`.gif
```

from : https://gist.github.com/dergachev/4627207
more detail:https://github.com/dergachev/screengif



change hostname
```
hostname what-you-want
sudo scutil --set HostName yourname
```

### Network Utility
- Info
- Netstat
- Ping
- Lookup
- Traceroute
- Whois
- Finger
- PortScan

## Finder.app

- Shift + Command + G 
    打开指定路径

- 把 .sh 扩展名改为 .command 可以在 Finder 中运行

- 使用扩展按钮, https://github.com/yantze/LTFinderButtons

## Terminal.app

- Copy text from remote tmux
  1. In default Terminal application go to View->"Allow mouse reporting" and uncheck it. Thats it.

- 出现整个屏幕被选中，但是取消不了的情况
  1. Cmd + R， 随便选中一块就行

## 日常使用
- 查看占用空间，「About this Mac」 -> Storage -> Manage 可以打开 「System Infomation」
    - Applications: 选择长期未使用的软件
    - Documents: 查看哪些大文件

- 多屏使用，快速把当前窗口移到另外一个屏幕，可以用 [termilte](https://github.com/apaszke/termtile) 执行 `tsn` 命令即可

- 使用 mutt 查看 mbox 中的邮件, 配置在 dotfiles/soft_config/muttrc

- 使用 help 菜单里面的查找功能，快速找到功能

- 添加 ipynb 文件 [quicklook](https://github.com/tuxu/ipynb-quicklook) 支持

## 如何不用 xcode
- 启动ios模拟器 `/Applications/Xcode.app/Contents/Developer/Applications/Simulator.app`

## 常见路径
- /Users/yantze/Library/Mobile Documents/iCloud~com~apple~iBooks


## Reference
- https://forums.macrumors.com/threads/setting-ftp-chroot-directory.1553071/
- https://github.com/icymind/VRouter
