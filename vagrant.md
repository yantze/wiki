cd ~/Documents/Vagrant/Ubuntu  # 进入一个vagrant虚拟机目录，一个目录管理一个虚拟机
vagrant init hashicorp/precise32 # 创建一个ubuntu的虚拟机
vagrant box add hahaha ~/box/precise64.box

$ vagrant init  # 初始化
$ vagrant up  # 启动虚拟机
$ vagrant halt  # 关闭虚拟机
$ vagrant suspend # 暫停
$ vagrant reload  # 重启虚拟机
$ vagrant ssh  # SSH 至虚拟机
$ vagrant status  # 查看虚拟机运行状态
$ vagrant destroy  # 销毁当前虚拟机
$ vagrant ssh-config #This lets you see the detailed login credentials of how you could connect to the virtual environment.


