# laravel

## use homestead dev laravel
install homestead
```
vagrant box add laravel/homestead
git clone https://github.com/laravel/homestead.git
cd homestead
chmod +x init.sh && ./init.sh
```
setting `~/.homesetead/Homestead.yaml`
```
authorize:#手动生成的openSSH公钥
keys:#手动生成的openSSH私钥
folders:#对应本地需要映射到虚拟机中的文件夹
    map:#指定本地路径,Win下目录各级间使用"/"分割,包括盘符(如C:/SomeFolders/TargetFolders)
    to:#指定映射到vagrant内的目录路径,保持默认即可.如果设置正常,在虚拟机运行时,可在虚拟机配置中找到挂载的共享文件夹.
sites:#站点配置
    map:#站点的域名,设置后记得在本地hosts中绑定指向Homestead虚拟机ip或127.0.0.1
    to:#站点在vagrant中的默认目录
```

homestead 集成了laravel 官方的各种最好的搭配，在虚拟机中运行，直接在本地修改，非常的方便

引用
---
[^1] [use homestead](https://quericy.me/blog/827)
[^2] [laravel homestead](https://laravel.com/docs/5.2/homestead)
