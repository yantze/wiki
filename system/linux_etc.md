# etc 目录相关的解读
最近看了一下关于 Jetson Nano 的 /etc 配置文件，记录于此。

## 基础目录
- /etc/systemd/system/*
这里面包含了所有服务的目录


## Systemd
- /etc/systemd/*

## Journald
- /etc/systemd/journald.conf

## X Server / Wayland
TODO:
nvidia - Prevent /usr/lib/xorg/Xorg from using GPU Memory in Ubuntu 20.04 Server - Ask Ubuntu
https://askubuntu.com/questions/1279809/prevent-usr-lib-xorg-xorg-from-using-gpu-memory-in-ubuntu-20-04-server

安装Nvidia GPU专属驱动后Xorg的变化 - 知乎
https://zhuanlan.zhihu.com/p/33983810

(11条消息) Wayland/Weston 启动方式简介_hexiaolong2009的专栏-CSDN博客_weston
https://blog.csdn.net/hexiaolong2009/article/details/104852721

(11条消息) 非常详尽，多图慎入：Wayland与Weston简介_Peter的专栏-CSDN博客
https://blog.csdn.net/melody157398/article/details/91349848

## APT
- /etc/apt/*
- /etc/apt/apt.conf.d/*
- /etc/apt/sources.list.d/*
- /etc/apt/trustd.gpg.d/*
- /etc/systemd/system/timers.target.wants/apt-daily-upgrade.timer
- /etc/systemd/system/timers.target.wants/apt-daily.timer
里面有一个定时器，每天定时检测软件更新

### 了解代理机制，镜像机制，自动更新机制


## 综合

### Cron
crontab
- /etc/cron.d/*
- /etc/cron.daily/*
- /etc/cron.hourly/*
- /etc/cron.monthly/*
- /etc/cron.weekly/*

anacron
- /etc/init/anacron.conf
- /etc/cron.d/anacron
- /etc/anacrontab
- /etc/systemd/system/timers.target.wants/anacron.timer
- /etc/systemd/system/multi-user.target.wants/cron.service
类似 crontab, 但更加容易阅读，通过 `anacron` 控制

- /etc/nvpmodel.conf
似乎 这个文件里面说明了 pwm 设备的控制

- /etc/alternatives
这个目录是为了做一些桌面系统上的兼容，比如 /etc/alternatives/gnome-text-editor 指向 /usr/bin/gedit，那之后有可能通过改变 alternatives 的链接，改变使用 gnome-tet-editor 就能用另外一个软件去打开。
It is a directory that is used in keeping track of the alternatives currently in use, by a tool called update-alternatives.

- /etc/apparmor*
- /etc/apparmor.d/*
- /etc/systemd/system/sysinit.target.wants/apparmor.service
类似 SELinux，但更加人性化，功能相对弱一些。通过 `aa-enabled` / `aa-status` 测试是否开启。原名是 subdomain，所以配置是 `/etc/apparmor/subdomain.conf`。

- 中文介绍：https://www.elliot98.top/post/tech/apparmor/
- 官网有更多信息： https://apparmor.net
- 一个实际应用案例：https://kubernetes.io/zh/docs/tutorials/clusters/apparmor/

- /etc/ffserver.conf
视频推流服务

- /etc/vulkan/icd.d/nvidia_icd.json
下一代 OpenGL，类似微软的 DirectX。

- /etc/libao.conf
- /etc/asound.conf*
- /etc/sound*
- /etc/wildmidi/wildmidi.cfg
- /etc/timidity/freepats.cfg
- /etc/speedch-dispatcher/clients
- /etc/rc0.d/K01speech-dispatcher
- /etc/rc0.d/K01alsa-utils
- /etc/rc1.d/K01alsa-utils
- /etc/rc0.d/K01speech-dispatcher
- /etc/systemd/system/multi-user.target.wants/anacron.service
音频服务，设备管理：`/etc/udev/rules.d/90-alsa-asound-tegra.rules`

- /etc/libaudit.conf
用户空间的应用软件失败，是否会发送到内核， 配置 failure_action 可以对行为进行调整

- /etc/nv_boot_control.conf
jetson 启动磁盘选项

- /etc/nv-oem-config.conf
jetson 根据型号做不同的串口？

- /etc/nvpmodel.conf
jetson 电源模式，5w 模式和 10w 模式

- /etc/pam.conf
- /etc/security/pam_env.conf
- /etc/security/time.conf
Linux Pluggable Authentication Modules(PAM) 支持这几种鉴权：local passwords, LDAP, or fingerprint readers。

## 系统更新配置
- /etc/update-manager/*
- /etc/update-motd.d/*
- /etc/update-notifier/*
- /etc/kernel/postinst.d/update-notifier
主要是跟系统升级相关，
1. release-upgrades 配置是否升级系统大版本
2. 一些 GUI 升级或者 CLI 升级的文字提示

## Network
### 桥 Bridge
- /etc/network/if-pre-up.d/bridge

`brctl show` 显示所有的桥

### zeroconfig
- /etc/network/if-up.d/avahi-autoipd
- /etc/network/if-up.d/avahi-daemon
- /etc/resolvconf/update-libc.d/avahi-daemon
- /etc/avahi/*
- /etc/rc0.d/K01avahi-daemon
- /etc/rc1.d/K01avahi-daemon
avahi 可以在没有 DNS 服务的局域网里发现基于 zeroconf 协议的设备和服务，Zeroconf规范的另一个实现是Apple公司的Bonjour程式。Avahi和Bonjour相互兼容。

### resolve
- /etc/resolvconf/resolv.conf.d/base
- /etc/resolvconf/resolv.conf.d/head
- /etc/resolvconf/update.d/libc
- /etc/systemd/resolved.conf
- /etc/systemd/system/sysinit.target.wants/resolvconf.service

### Dnsmasq
- /etc/dnsmasq.d/*
- /etc/resolvconf/update.d/dnsmasq
- /etc/rc0.d/K01dnsmasq
- /etc/rc1.d/K01dnsmasq
- /etc/systemd/system/multi-user.target.wants/dnsmasq.service
- /etc/dbus-1/system.d/dnsmasq.conf

### Network Manager
- /etc/systemd/system/multi-user.target.wants/NetworkManager.service
- /etc/systemd/system/multi-user.target.wants/networkd-dispatcher.service
- /etc/systemd/system/multi-user.target.wants/networking.service

### iptables
- /etc/iptables
- /etc/rc0.d/K01netfilter-persistent
- /etc/systemd/system/multi-user.target.wants/netfilter-persistent.service


### 其它
- /etc/network/if-up.d/ethtool
`ethtool` 未知


## SSH & SSHD
- /etc/network/if-up.d/openssh-server
- /etc/pam.d/sshd
- /etc/ssh/*
- /etc/systemd/system/multi-user.target.wants/ssh.service
- /etc/systemd/system/sshd.service
- /etc/init.d/ssh

## WiFi

- /etc/systemd/system/nvwifibt.service
- /etc/systemd/nvwifibt.sh
- /etc/systemd/nvwifibt-pre.sh
- /etc/udev/rules.d/99-nv-wifibt.rules

### wpa_supplicant 的用法（包括 WiFi 认证）
支持WEP，WPA/WPA2和WAPI无线协议和加密认证，用户可以通过 socket 发送命令给 wpa_supplicant 调动驱动来对 WiFi 芯片操作
- /etc/wpa_supplicant.conf
- /etc/wpa_supplicant/*
- /etc/dbus-1/system.d/wpa_supplicant.conf
- /etc/ifplugd/action.d/action_wpa
- /etc/network/if-post-down.d/wpasupplicant
- /etc/network/if-pre-up.d/wpasupplicant
- /etc/network/if-post-down.d/wpa_supplicant
- /etc/network/if-up.d/wpasupplicant
- /etc/systemd/system/multi-user.target.wants/wpa_supplicant.service

wpa_cli 可以执行 wpa_supplicant 的后台，ifup 和 ifdown 可以控制通过 `/etc/network/*/wpa_supplicant` 控制 wpa_cli 和 wpa_supplicant。

连接 WiFi 步骤：
1. `iwlist wlan0 scanning` 扫出可使用的 ap
2. `wpa_passphrase TP-LINK_8CEA 11111111 > /etc/wpa_supplicant.conf` 产生加密文件
3. 根据 examples 的例子修改
4. `wpa_supplicant -i wlan0 -B -Dwext -c /etc/wpa_supplicant.conf 连接网络`
5. 设定 WiFi 的 IP
ref: https://zhuanlan.zhihu.com/p/24246712

其实 jetson 有说一种更简单的方法：
```shell
sudo apt update
sudo apt install network-manager
sudo service NetworkManager start
sudo nmcli device wifi connect 'SSID' password 'PASSWORD'
```

### hostapd
- /etc/hostapd/hostapd.conf
- /etc/hostapd/ifupdown.sh
- /etc/network/if-post-down.d/hostapd
- /etc/network/if-pre-up.d/hostapd
- /etc/rc0.d/K01hostapd
- /etc/rc1.d/K01hostapd
- /etc/systemd/system/multi-user.target.wants/hostapd.service


## xdg
- /etc/xdg/lxpanel/default/config
- /etc/xdg/lxpanel/default/panels/panel
- /etc/xdg/pcmanfm/default/pcmanfm.conf

xdg 是对桌面系统的一系列统一调用。比如:
- `xdg-open` 实现打开各种文件
- `xdg-desktop-icon` 配置 icon
- `xdg-desktop-menu` 控制菜单
- `xdg-settings` 设置 url handling 和 默认的浏览器
- `xdg-autostart` 做一些自动启动的应用管理后台，都放在 `/etc/xdg/autostart/*`

## X11
- /etc/X11
- /etc/udev/rules.d/91-xorg-conf-tegra.rules
- /etc/udev/rules.d/92-hdmi-audio-tegra.rules
- /etc/init.d/x11-common
- /etc/rcS.d/S01x11-common
图形管理

## NFS
- /etc/exports
配置文件目录可以通过 nfs 共享

- /etc/idmapd.conf
- /etc/request-key.d/id_resolver.conf
- /etc/rc1.d/K01nfs-common
- /etc/rc1.d/K01nfs-kernel-server

NFS 的一些介绍

- Exports
A directory exported by an NFS server, which clients can integrate into their systems.

- NFS Client
The NFS client is a system that uses NFS services from an NFS server over the Network File System protocol. The TCP/IP protocol is already integrated into the Linux kernel; there is no need to install any additional software.

- NFS Server
The NFS server provides NFS services to clients. A running server depends on the following daemons: nfsd (worker), idmapd (ID-to-name mapping for NFSv4, needed for certain scenarios only), statd (file locking), and mountd (mount requests).

- NFSv3
NFSv3 is the version 3 implementation, the “old” stateless NFS that supports client authentication.

- NFSv4
NFSv4 is the new version 4 implementation that supports secure user authentication via Kerberos. NFSv4 requires one single port only and thus is better suited for environments behind a firewall than NFSv3.

The protocol is specified as https://datatracker.ietf.org/doc/html/rfc3530.

- pNFS
Parallel NFS, a protocol extension of NFSv4. Any pNFS clients can directly access the data on an NFS server.

ref: https://documentation.suse.com/sles/15-GA/html/SLES-all/cha-nfs.html


## Kernel
- /etc/modules
- /etc/modules-load.d/*
kernel modules to load at boot time.

- /etc/sysctl.conf
- /etc/sysctl.d/*
kernel 的配置， `/etc/sysctl.d/README` 介绍了应用配置的方法。

- /etc/kerneloops.conf
kernel 崩溃的配置

- /etc/udev/*
- /etc/rcS.d/S01udev
udev (userspace /dev) is a device manager for the Linux kernel。 udev 是一个通用的内核设备管理器，管理 /dev/ 目录下的设备节点，接替 devfs (设备文件系统)及 hotplug (热拔插)的功能，这意味着它要在添加/删除硬件时处理 /dev 目录以及所有用户空间的行为，包括加载 firmware。设备文件的维护经历了静态维护、 devfs 内核态维护、sysfs+hotplug 用户态维护、udev 几个阶段。相对比之前，udev 使用更少空间，提供更高的弹性、更便捷的设备文件维护方式。

它以守护进程的方式运行于 Linux 系统，并监听在新设备初始化或设备从系统中移除时，内核（通过netlink socket）所发出的 uevent。以下是系统架构：
- libudev 函数库，可以用来获取设备的信息。
- udevd 守护进程，处于用户空间，用于管理虚拟 /dev
- 管理命令 udevadm

### udevadm
udevadm 可以用来监视和控制 udev 运行时的行为，请求内核事件，管理事件队列，以及提供简单的调试机制。
- /etc/init.d/udev

udevadm主命令：
info     查询 sysfs 或者 udev 的数据库
trigger  从内核请求 events
settle   查看 udev 事件队列，如果所有的 events 已处理则退出
control  修改 udev 后台的内部状态信息
monitor  监控内核的 uevents
hwdb     处理硬件数据库索引
test     调试

```shell
# 查看设备信息
udevadm info --query=all --name=sda
# 查看设备的路径
udevadm info --query=path --name=sda
# 查看这个设备之上的所有节点信息
udevadm info --attribute-walk --name=/dev/sda1
```
ref: https://blog.csdn.net/li_wen01/article/details/89435306

```shell
# 执行后，插入外部设备，这里会打印对应设备的信息
udevadm monitor
```

### 监听键盘链接并执行脚本
more: https://www.linuxfordevices.com/tutorials/linux/udevadm-command
more: https://www.tecmint.com/udev-for-device-detection-management-in-linux/

所以 `/etc/udev/rules.d` 的内容是 jetson 设置的一些预置硬件设备脚本。

## ufw
ufw 是基于 iptables 之上的防火墙工具。

## DBus
具体研究一下，容易出问题
TODO

## UDisk
- /etc/systemd/system/graphical.target.wants/udisks2.service

## Docker
- /etc/systemd/system/multi-user.target.wants/docker.service

## NFS
- /etc/systemd/system/multi-user.target.wants/nfs-server.service
- /etc/systemd/system/multi-user.target.wants/nfs-client.target

## Nvida
- /etc/systemd/system/multi-user.target.wants/nv.service
- /etc/systemd/nv.sh

## Snap
- /etc/apt/apt.conf.d/20snapd.conf
- /etc/systemd/system/multi-user.target.wants/snapd.service
- /etc/systemd/system/multi-user.target.wants/snapd.apparmor.service
- /etc/systemd/system/timers.target.wants/snapd.snap-repair.timer
- /etc/systemd/system/sockets.target.wants/snapd.socket
- /etc/systemd/system/multi-user.target.wants/snapd.service
- /etc/systemd/system/multi-user.target.wants/snapd.seeded.service
- /etc/systemd/system/multi-user.target.wants/snapd.recovery-chooser-trigger.service
- /etc/systemd/system/multi-user.target.wants/snapd.core-fixup.service
- /etc/systemd/system/multi-user.target.wants/snapd.autoimport.service
- /etc/systemd/system/multi-user.target.wants/snapd.apparmor.service
- /etc/systemd/system/final.target.wants/snapd.system-shutdown.service
- /etc/systemd/system/cloud-final.service.wants/snapd.seeded.service

## Gdm
- /etc/gdm3/*
- /etc/dbus-1/system.d/gdm.conf
GNOME 显示管理器（Gnome Display Manager）是一个管理图形显示服务和处理图形用户登录的程序。provide X Window System and Wayland users with a graphical login prompt.

也可以控制，启动背景、启动字体、启动时光标主题、启动声音，可以通过下面这种方式配置：
```shell
sudo -u gdm gsettings get org.gnome.desktop.peripherals.touchpad tap-to-click
# ref: https://wiki.archlinux.org/title/GDM_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)
```

### LXDE
- /etc/xdg/lxpanel/default/panels/panel
另外一个 dm 有时候也被装到 jetson nano 中了。可以用 `lxpanel` 启动一个类似 Windows 的底部状态栏，很简洁。

### Compton
- /etc/xdg/autostart/nvlxde-compton.desktop
看文件里面，具体是只在 lxde 中启动。和 compiz 一起研究一下。
TODO

### gdm-control
```shell
$ gdm-control --help
--shutdown    Shutdown the computer when the current session ends
--reboot      Reboot the computer when the current session ends
--suspend     Suspend the computer when the current session ends
--switch-user Log in as a new user (this works immediately)
```

## GNOME
- /etc/gnome/menus.blacklist
- /etc/gnome-vfs-2.0/modules/default-modules.conf
- /etc/gnome-system-tools/user-profiles.conf

- /etc/gnome/defaults.list
- /usr/share/applications/defaults.list
根据文件类型打开对应的默认应用程序

### 术语解释：GSettings、gsettings，以及 dconf

- dconf
“dconf”是管理用户设置，基于键值的配置系统。它是红帽企业版 Linux 7 使用的“GSettings”的后端。“dconf”管理了一系列不同的设置，包括“GDM”、应用程序，以及代理设置。
- dconf
“dconf”命令行实用程序用来从“dconf”数据库中读取单个值或整个目录，以及将单独值或整个目录写入“dconf”。
- GSettings
GSettings 是应用程序设置的高级 API，“dconf”的前端。
- gsettings
使用“gsettings”命令行工具查看以及更改用户设置。
ref: https://access.redhat.com/documentation/zh-cn/red_hat_enterprise_linux/7/html/desktop_migration_and_administration_guide/configuration-overview-gsettings-dconf

### 查看和编辑 “GSettings” 值
- dconf-editor GUI 工具。
直接在命令行执行 `deconf-editor` 或者应用列表中 deconf Editor 就可以打开。

- gsettings 命令行实用程序。

都是配置各种设置的选项，比如 Jetson Nano 中 `/etc/dconf/profile/ibus` 就是类似 `/etc/dconf/profile/<user>`，这个文件中记录了用户数据库：
```plain
user-db:user
system-db:ibus
```
user-db 可以在这里 `~/.config/dconf` 找到，system-db 就在 `/etc/dconf/db` 中找到。
ref: https://access.redhat.com/documentation/zh-cn/red_hat_enterprise_linux/7/html/desktop_migration_and_administration_guide/profiles



## LightDM
桌面显示管理器（Light Display Manager）,类似的还有 gdm，xdm 等。在 Jetson Nano 中，通过 lightdm 启动 gnome-session 来启动 gnome 桌面环境。

系统提供的配置保存在 `/usr/share/lightdm/lightdm.conf.d/*.conf`，普通用户不可编辑。系统管理员可以使用配置文件 `/etc/lightdm/lightdm.conf.d/*.conf` 和 `/etc/lightdm/lightdm.conf` 覆盖系统配置。

最新版本的LightDM把过时的配置节 `SeatDefaults` 替换为 `Seat:*`。有一个示例配置文件展示了 LightDM 可能识别的所有的配置，它压缩保存在：`/usr/share/doc/lightdm/lightdm.conf.gz`。

这里还有一个额外的配置文件：`/etc/lightdm/users.conf` 。但是如果AccountsService在你的系统上运行，那么这个配置文件将被忽略。如果你不确定配置文件是否已被忽略，可以运行：`ps -aef | grep -i AccountsService`。

- /etc/init/lightdm.conf
- /etc/init.d/lightdm
- /usr/share/lightdm/lightdm.conf.d/*.conf
- /etc/lightdm/lightdm.conf.d/*.conf
- /etc/lightdm/users.conf
- /etc/pam.d/lightdm
- /etc/lightdm/lightdm.conf
修改默认登录的账户，是否免登

- /etc/lightdm/lightdm-gtk-greeter.conf
这里配置了显示字体，主题、用户头像、屏保超时、背景等

### 在graphics stack（图形堆栈）中很多事情都可能出错。如果你看不到任何图形或者损坏的图片，下列尝试也许可以帮助你：

1. 你可以按ctrl+alt+f1得到文本终端
1. 检查LightDM的日志，位于/var/log/lightdm
1. 停止LightDM，运行sudo systemctl stop lightdm
1. 尝试再次启动LightDM：sudo systemctl start lightdm
1. 如果你有另外一个显示管理器，你可以去启动它，比如运行：sudo systemctl start gdm
1. 你可以设置默认的显示管理器，运行sudo dpkg-reconfigure lightdm
1. 检查系统的最新更新日期，特别是视频驱动。
1. 文件记录这个BUG。如果您不确定原因在哪里（lightdm/unity-greeter/unity/X/kernel），那么针对lightdm的文件和错误将被筛选和重新分配（译者注：意思是多试几次，缩小问题范围）。
ref: https://blog.csdn.net/caoshiying/article/details/107242980

## Keyring
macOS 中的钥匙串，用于自动登录或者 gpg 以及应用程序的密码管理。可以通过 GUI 中 "Passwords and Keys" 访问
- /etc/xdg/autostart/gnome-keyring-ssh.desktop
- /etc/xdg/autostart/gnome-keyring-pkcs11.desktop
- /etc/xdg/autostart/gnome-keyring-secrets.desktop
- /etc/apt/trusted.gpg.d/ubuntu-keyring-2018-archive.gpg
- /etc/apt/trusted.gpg.d/ubuntu-keyring-2012-cdimage.gpg
- /etc/apt/trusted.gpg.d/ubuntu-keyring-2012-archive.gpg

存储的位置在这里：`~/.local/share/keyrings`

## APM
- /etc/apm/scripts.d/*

## Skel 和 default 目录
- /etc/default/*
- /etc/skel/*
似乎是软件的默认配置脚手架和默认配置

## /boot 目录
这里是启动相关的文件介绍

## 知道就好的功能

### rmt
- /etc/rmt
Linux rmt 命令通过进程间通信远程控制磁带机。
通过rmt指令，用户可通过IPC连线，远端操控磁带机的倾倒和还原操作。

### brltty
- /etc/brltty

refreshable braille display driver for Linux/Unix，简单来说，就是一个盲文显示驱动应用。用于保证屏幕阅读器的边语用户的可访问性。

Red Hat 有一篇具体讲这块的配置和使用：[配置桌面环境以进行访问](https://access.redhat.com/documentation/zh-cn/red_hat_enterprise_linux/8/html/using_the_desktop_environment_in_rhel_8/configuring-desktop-environment-for-accessibility_using-the-desktop-environment-in-rhel-8)

### ModemManager
- /etc/systemd/system/multi-user.target.wants/ModemManager.service
调制解调器
