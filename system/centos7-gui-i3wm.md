# Install CentOS7 i3wm

## Steps

### Download DVD iso and select below options
```
Basic Web Server > Backup Client
                   Debugging Tools
                   Directory Client
                   Language Support
                   Security Tools
                   Any preferred packages
```

### Install Dependent
```
yum update
yum install -y epel-release
# yum-config-manager --enable epel
# yum --enablerepo=epel info softname
# /etc/yum.repo.d/epel.repo

yum-config-manager --add-repo https://copr.fedorainfracloud.org/coprs/admiralnemo/i3wm-el7/repo/epel-7/admiralnemo-i3wm-el7-epel-7.repo
yum groupinstall "X Window System" "Desktop" "Desktop Platform"
yum install lightdm xorg-x11-xinit-session

# may be need:
# https://pkgs.org/download/libxkbcommon
# https://pkgs.org/download/libxkbcommon-x11
# rpm -ivh xxx.rpm

yum install dejavu-sans-fonts dejavu-sans-mono-fonts dejavu-serif-fonts i3 i3status lilyterm

```

### Start GUI manually
systemctl isolate graphical.target

### Start GUI automatically
systemctl set-default graphical.target

### py3status is used for customizing the status bar further.
yum install py3status

### feh is used to customize the background for i3wm.
yum install feh

### add fonts
yum install wqy-unibit-fonts wqy-zenhei-fonts

### add Chromium-broser
yum install mesa-libGLES

### Some Proble
- [old version] i3-sensible-terminal, so add `export TERMINAL=lilyterm` to `.bashrc`, or `yum install xterm` with support term list in `man i3-sensible-terminal`

## Res & Ref
- http://sobo.red/CentOS-7-i3wm-Quickstart/
- https://wiki.archlinux.org/index.php/i3
- https://www.centos.org/docs/5/html/5.2/Deployment_Guide/s3-x-fonts-fontconfig-add.html
