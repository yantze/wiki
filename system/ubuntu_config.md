Ubuntu Config
=============


命令行打开文件资源管理器
-----------------------
```
nautilus /path/to/that/folder
xdg-open /path/to/the/folder
```

一些快捷鍵
---------
```
命令                    shortkey
command/terminal        CTRL+ALT+T
trash                   super+t
```

一些命令
-------
```
sudo update-alternatives --config java             find mul same soft

gnome-session-quit --no-promot logout user(more info man gnome-session-quit)
```


必須裝的軟件
-----------
```
sudo apt-get install -y \
silversearcher-ag tmux vim gawk curl wget \
openssh-server
```

install flu.x
-------------
```
sudo add-apt-repository ppa:kilian/f.lux
sudo apt-get update
sudo apt-get install fluxgui
```

build-essential
---------------
```
sudo apt-get build-essential cmake python-dev
```


一些配置
-------
```
# 安装 unity-tweak tool
sudo apt-get install unity-tweak-tool
# 安装 gnome tweak tool
sudo apt-get install gnome-tweak-tool
# 安装字体
sudo apt-get install fonts-wqy-microhei
# 系统负载指示器，右上角实时看看系统信息
sudo apt-get install -y indicator-multiload
```

在 Ubuntu Server 上安装简洁版 xfce desktop
------------------------------------------
全新安装好 ubuntu server, 然后执行命令安装 xfce 环境
```
sudo apt install -y xfce4 xfce4-goodies --no-install-recommends
sudo apt install build-essential # 可选
```
xfce4-goodies 包含了一些 xfce 的一些系统配置 UI ，最好也装上，也可以直接装 xubuntu-desktop，但有很多无用的功能

### 启动图形界面
其实不需要图形启动器，无非是麻烦了一两行命令, 如果需要可以看看 https://wiki.archlinux.org/index.php/Display_manager
```
startx
# 或者
startxfce
```

### 对 xfce4 修改主题

- 系统配置可以安装 sudo apt install numix 系列的主题, 使用 xfce4-appearence-settings 配置一下
  - arc, numixblue, greybird, bluebird 感觉都不错
- 安装对应的图标，比如 numix-icon-theme , 使用 xfce4-appearence-settings fonts tab 配置
- 修改 titlebar 要用 setting manager 打开, windows manager 配置

P.S: 目前在用 arc light 主题，arc 也有自己的 icon, `apt install arc-theme`, https://github.com/horst3180/arc-icon-theme, https://github.com/andreisergiu98/arc-flatabulous-theme

### 開機進入命令行模式
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

### ubuntu 软件介绍
- https://github.com/luongvo209/Awesome-Linux-Software

- http://wiki.ubuntu.org.cn/Awesome


开启 OpenSSH Server
------------------
```
sudo systemctl start ssh
```

### 声音设置
```
安装pavucontrol,然后dbus-launch pavucontrol就可以控制声音了.
```
### Screen Sharing
[屏幕共享](./ubuntu_screen_sharing.md)



快捷键
-----
```
Mod4 win键/super键
Mod1 Alt键
Control ctrl键
```

### 快捷键列表
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

