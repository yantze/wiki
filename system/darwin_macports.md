# MacPorts

```
# 更新ports tree和MacPorts版本，强烈推荐第一次运行的时候使用-v参数，显示详细的更新过程。
sudo port -v selfupdate
 
# 查看Mac Port中当前可用的软件包及其版本
port list
 
# 搜索索引中的软件
port search name
 
# 查看包详细信息
port info name
 
# 查看包详细信赖信息`
port deps name
 
# 查看安装时允许客户定制的参数
port variants name
 
# 安装新软件
sudo port install name
 
# 安装完毕之后，清除安装时产生的临时文件
sudo port clean --all name
 
# 卸载软件
sudo port uninstall name
 
# 查看有更新的软件以及版本
port outdated
 
# 升级可以更新的软件
sudo port upgrade outdated
 
# Eclipse的插件需要subclipse需要JavaHL，下面通过MacPorts来安装
sudo port install subversion-javahlbindings 
```


## Reference
- http://xstarcd.github.io/wiki/MacOS/MacOS_MacPorts.html 



