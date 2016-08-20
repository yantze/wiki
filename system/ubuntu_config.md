# Ubuntu Config

##一些快捷鍵
```
命令                    shortkey
command/terminal        CTRL+ALT+T
trash                   super+t
```

##一些命令
```
sudo update-alternatives --config java             find mul same soft
```


##必須裝的軟件
```
sudo apt-get install -y \
silversearcher-ag tmux vim gawk curl wget \
openssh-server
```

###install flu.x
```
sudo add-apt-repository ppa:kilian/f.lux
sudo apt-get update
sudo apt-get install fluxgui
```

###build-essential
```
sudo apt-get build-essential cmake python-dev
```


##一些配置

###開機進入命令行模式
```
sudo vim /etc/X11/default-display-manager
```
註釋裏面的gdm, 在新的一行寫入false即可

安装字体
sudo apt-get install fonts-ubuntu-font-family-console
setfont /usr/share/consolefonts/UbuntuMono-R-8x16.psf
幾款不錯的字體:
/usr/share/consolefonts/Ethiopian-Goha16.psf.gz
/usr/share/consolefonts/Uni3-Terminus22x11.psf.gz

## ubuntu 软件介绍
http://www.oschina.net/p/rancid  一个好软件

http://wiki.ubuntu.org.cn/Awesome

http://blog.csdn.net/wearenoth/article/details/7489157

http://josephpan.net/blog/?p=992#sec-3-1

http://josephpan.net/blog/

 

 

 

快捷键
```
Mod4 win键/super键 
Mod1 Alt键 
Control ctrl键 
```

快捷键列表
```
#+Enter 运行term 
#+r 运行"运行框" 
#+shift+c 关闭当前窗口 
#+m 最大化窗口 
#+ctrl+R 重启awesome 
#+j/k 切换窗口 
#+1/2/.. 切换虚拟窗口 
#+ctrl+1~9 把当前桌面与1~9桌面合并显示(有使用潜力) 
#+shift+1~9 移动当前程序到目标工作区 
#+shift+j 互换窗口 
#+h/l 增大/减少主区域大小 
#+space 调整到下一个窗口布局 
#+shift+space 调整到上一个窗口布局 
#+ctrl+space 调整到窗口是否为浮动
```
> 如果窗口为浮动模式,则上方的任务栏会有飞鸟状的图标.只有当窗口不是浮动模式,才会按照窗口布局进行分布.      

声音设置
```
安装pavucontrol,然后dbus-launch pavucontrol就可以控制声音了.
```
