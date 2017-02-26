# OSX Darwin

OSX 的用户系统
- 查看单用户模式的列表: `/etc/passwd`, 里面也有说明只有单一用户模式有效
- 查看图形模式所有用户的列表: 打开`Directory Utility`软件，可以找到用户所有auth信息
- `/var/db/dslocal/nodes/Default/users` 是`Directory Utility`的文件存储数据，里面的文件列表就是当前系统所有用户的列表，里面的文件大部分是apple自定的LDAP格式，最好用提供的工具修改

> osx 系统使用 opendirtectoryd 服务，可以用多种架构去管理用户，我看有三种用户管理工具 `Active Directory` `LDAPv3` `NIS` 在`Directory Utility`工具中有出现，不过其实系统还支持 `Local`的方式存储用户信息，类似 linux ，以后用的着可以找一下.
> 相关命令有 `man opendirectoryd`, `odutil`, `dscl`

制作OSX移动u盘
```
sudo /Volumes/MacX/Install OS X El Capitan.app/Contents/Resources/createinstallmedia --volume /Volumes/Untitled --applicationpath /Volumes/MacX/Install OS X El Capitan.app --nointeraction
```


查看负载均衡
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
