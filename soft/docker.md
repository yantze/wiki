# docker

```
docker pull centos:latest
docker images centos
docker run -i -t centos /bin/bash //也可以使用docker run -it centos /bin/bash
docker ps -a //列出所有的使用过的container
sudo usermod -a -G docker $USER  //添加当前用户到docker用户组中,这样可以用当前用户而不是root操作docker
docker start container-id
docker attach container-id // 运行上面这两条命令可以打开之前关闭的docker实例
-t - 分配一个（伪） tty (link is external)
-i - 开发输入(so we can interact with it)

docker run --rm -i -t -p 80:80 nginx  //启动docker/nginx,把内置的80端口映射到本机的80端口
```

## docker 进阶
docker程序化
```
docker -d run centos:latest /bin/sh -c "while true; do echo hello world; sleep 1; done"
#在后台运行这个containner
docker logs containerid/names
#查看后台出现的内容
docker stop containerid/names
#停止后台运行的程序
```

```
docker -d -P run centos python web.py
#后台运行，并且映射所有端口到本地
docker logs -f containerid/names
#动态显示输出内容
```

```
docker run -d -P --name web -v /webapp training/webapp python app.py
#This will create a new volume inside a container at /webapp.
docker run -d -P --name web -v /src/webapp:/opt/webapp training/webapp python app.py
#This will mount the local directory, /src/webapp, into the container as the /opt/webapp directory./src/webapp:/opt/webapp:ro,read-only
```


```
#share dir
docker run -d -v /dbdata --name dbdata training/postgres echo Data-only container for postgres
docker run -d --volumes-from dbdata --name db1 training/postgres
```


```
#backup
docker run --volumes-from dbdata -v $(pwd):/backup ubuntu tar cvf /backup/backup.tar /dbdata
```


```
#copy container log out
docker cp container_name:/var/log logs
#restart server
# Starting the service
CID=$(docker run -d -v /var/run fooservice)
# Restarting the service with a sidekick container
docker run --volumes-from $CID fooservice fooctl restart
```


```
#nsenter
#It works a bit like chroot
#install
docker run -v /usr/local/bin:/target jpetazzo/nsenter
#run
PID=$(docker inspect --format {{.State.Pid}} <container_name_or_ID>)
nsenter --target $PID --mount --uts --ipc --net --pid
```


```
#delete container
删除容器r: docker rm <Container ID>
删除所有容器: docker rm $(docker ps -a -q)
移除镜像: docker rmi <Container ID>
移除所有镜像: docker rmi $(docker ps -a -q)
```
