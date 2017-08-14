# docker

## Basic

### start new container
```
docker pull centos:latest
docker images centos

docker ps -a // 列出所有的使用过的container
sudo usermod -a -G docker $USER  // 添加当前用户到docker用户组中,这样可以用当前用户而不是root操作docker

docker start container-id
docker attach container-id // 运行上面这两条命令可以打开之前关闭的docker实例

docker run -it centos /bin/bash
docker run -it --rm -p 80:80 nginx  //启动docker/nginx,把内置的80端口映射到本机的80端口
-i - 开发输入(so we can interact with it)
-t - 分配一个（伪） tty (link is external)
-p - 分配 local_port 给 docker_port
-P - 随机分配端口给 docker_port
--rm - 停止即删
```

### run docker and mount local dir
```
docker run -it --rm -p 8000:8888 -v ./pyannote-data /opt/pyannote-data images/image
```

### delete container
```
列出所有容器: docker ps -a
删除容器: docker rm <Container ID>
删除所有容器: docker rm $(docker ps -a -q)
移除镜像: docker rmi <Container ID>
移除所有镜像: docker rmi $(docker ps -a -q)
```



# Res
- [Docker — 从入门到实践](https://github.com/yeasy/docker_practice)
- [GitBook 版本](https://www.gitbook.io/book/yeasy/docker_practice)
