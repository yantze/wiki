# vargrant

#### Will download soft

- vagrant
- vitrulbox

then

- mkdir a dir name `ubuntu`
- put command `vagrant init hashicorp/precise32`


#### There have some command
```
$ vagrant init  # 初始化
$ vagrant up  # 启动虚拟机
$ vagrant halt  # 关闭虚拟机
$ vagrant suspend # 暫停
$ vagrant reload  # 重启虚拟机
$ vagrant ssh  # SSH 至虚拟机
$ vagrant status  # 查看虚拟机运行状态
$ vagrant destroy  # 销毁当前虚拟机
$ vagrant ssh-config #This lets you see the detailed login credentials of how you could connect to the virtual environment.
```

#### Have a share dir
```
cd ~/Documents/vagrant/ubuntu
vagrant up
vagrant ssh
cd /vagrant
ls
there have some command
```


#### Package some box
you can put command `vagrant package` to package a Box, vagrant box add myubuntu ~/Documents/Vagrant/Ubunutu/ubunut.box, the myubuntu is your box name 

