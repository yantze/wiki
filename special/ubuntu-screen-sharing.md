---

title: Ubuntu Screen Sharing
date: 2019-07-13 01:29
status: public
author: yantze
tags: ubuntu, linux, ssh, socat

---

Setup Vino server from a terminal
---------------------------------

**Inform the system which graphic display to interact with**

    export DISPLAY=:0

**Turn on Vino**

    gsettings set org.gnome.Vino enabled true


**Turn off Vino encryption**

    gsettings set org.gnome.Vino require-encryption false

If not the following error will pop up：
> Unable to connect to VNC Server using your chosen security setting. Either upgrade VNC Server to a more recent version from `RealVNC` or select a weaker level of encryption.

**Turn off prompt alert**

    gsettings set org.gnome.Vino prompt-enabled false


**Allow linked sources\[option\]**

To only allow local connections, open a terminal and run the command:

    gsettings set org.gnome.Vino network-interface lo


To allow connections from anywhere, open a terminal and run the command:

    gsettings reset org.gnome.Vino network-interface


**Reboot the system so that the settings take effect**

    sudo reboot



VNC server's graphical configuration tool
-----------------------------------------
> Change Vino settings in the GUI.

**Enable sharing**
Ubuntu uses Vino as screen sharing VNC Server, Here is how to set it up:

Open settings panel: Setting -> Sharing -> Screen Sharing

**Vino self control panel: vino-preferences**

It set the quality of the graphical interface.



### Connecting using VNC Viewer

**Install vnc client**
* Mac install vnc-viewer: `brew cask install vnc-viewer`
* Linux client: gvncviewer and remmina
* Windows client: vnc-viewer

**Start vino server**

if not start vino server you can execute the following steps:
- Method 1: `systemctl --user start vino-server`
- Method 2: `/usr/lib/vino/vino-server`

**Get your IP address**
```
ifconfig
```

**Connect**

Put link information on the client：`10.0.1.199:5900`

> If screen size is too small after connecting, you can set an appropriate width and height through this: `xrandr --fb 1280x1024`


Use a reverse ssh tunnel port to connect vnc
--------------------------------------------
```
ssh -i ~/.ssh/id_rsa -fCNR 5922:localhost:5900 username@host
```

This is meaning forward port 5900 to remote host 5922
- option `-f` to detach ssh process from the tty
- option `-C` to allow compress data
- option `-N` to not execute any command over ssh
- option `-R` to reverse ssh tunnel

If set remote host sshd config `/etc/ssh/sshd_config` with `GatewayPorts clientspecified`, You can use follow command to expose remote port to 0.0.0.0
```
ssh -i ~/.ssh/id_rsa -fCNR :5922:localhost:5900 username@host
```

otherwise use socat to do port forward:
```
socat tcp-listen:5923,fork,reuseaddr tcp:127.0.0.1:5922
```

then you can connect host:5923 with vnc viewer


Other error
-----------
If can not start vino-server by this error:
```
No protocol specified
Unable to init server: Could not connect: Connection refused
Cannot open display:
Run 'vino-server --help' to see a full list of available command-line options
```

Just restart ubuntu display manager:
```
sudo systemctl restart display-manager
```

---

![Ubuntu screen sharing](./_image/ubuntu-screen-sharing-1.webp)

---

References
-------

- [Change the screen resolution in VNC viewer](https://askubuntu.com/questions/287096/how-to-change-the-screen-resolution-in-vnc-viewer-for-ubuntu-12-04-without-a-mon)
- [Reverse port tunneling](https://askubuntu.com/questions/50064/reverse-port-tunnelling)
- [xorg - How to restart X Window Server from the command line?](https://askubuntu.com/questions/1220/how-to-restart-x-window-server-from-command-line)
