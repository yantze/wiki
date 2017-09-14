# Termux

## Basic
- 打开扩展键盘

    打开方式：音量上键+键盘的Q
    方向键：音量上键 + A W S D
    Ctrl: 音量下键

- 模拟根目录
    ```
    apt install proot
    ```
    执行 `termux-chroot` 即可查看虚拟的根目录

- 设置模拟器的样式
    ```
    setterm
    ```

- 使用 ssh 和 ssh-server
    因为权限问题，ssh-server 默认使用的是 8022 端口而不是 22

    ```
    # 安装
    apt install openssh
    sshd # start ssh server
    # sshd -d # debug
    # pkill sshd # stop ssh server
    ssh-keygen
    cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys
    chmod 600 ~/.ssh/authorized_keys

    # 下载密钥
    apt install python
    cd ~/.ssh
    python -m http.server # python 3
    # python -m SimpleHTTPServer # python 2
    ```

    在电脑端连接手机：
    ```
    curl -O http://android_lan_ip:8000/id_rsa
    ssh android_lan_ip -p 8022 -i /path/to/id_rsa
    ```

- 访问手机 storage
    ```
    termux-setup-storage
    ls storage
    ```

## Termux-Fedora
让 Termux 装上 fedora，用 proot 实现 chroot，可以单独隔离或者适配一些应用，比如 env
```
apt update
apt upgrade
apt install wget -y
wget https://raw.githubusercontent.com/nmilosev/termux-fedora/master/termux-fedora.sh
sh termux-fedora.sh f26_arm64
# sh termux-fedora.sh uninstall
```
之后可以通过启动 `startfedora` 启动，使用 `dnf update` 更新


## Ref
- https://pondof.fish/d/28
- https://nmilosev.svbtle.com/termuxfedora-install-fedora-on-your-phone-with-termux
- https://github.com/breathiness/learn-termux
- http://www.arthurtoday.com/2017/03/install-ubuntu-linux-in-a-android-phone-termux.html
