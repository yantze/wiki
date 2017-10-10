# docker

## Basic

### Start new container
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

### Run docker and mount local dir
```
docker run -it --rm -p 8000:8888 -v ./pyannote-data /opt/pyannote-data images/image
```

### Connect to running docker
```
docker exec -it some-mariadb bash
```

### Delete container
```
列出所有容器: docker ps -a
删除容器: docker rm <Container ID>
删除所有容器: docker rm $(docker ps -a -q)
移除镜像: docker rmi <Container ID>
移除所有镜像: docker rmi $(docker ps -a -q)
```

### 安装 docker hub 加速器
```
cp /lib/systemd/system/docker.service /etc/systemd/system/docker.service
# 在 `ExecStart` 后面添加 `--registry-mirror=<your accelerate address>`
ExecStart=/usr/bin/dockerd --registry-mirror=<your accelerate address>
```
这些地方有详细的加速地址和教程
- 阿里云 docker 加速器(可分地区）：https://cr.console.aliyun.com/#/accelerator
- 腾讯：https://www.qcloud.com/document/product/457/9113
- DaoCloud: https://www.daocloud.io/mirror#accelerator-doc

### 常见问题
- 获取 container ip 地址
    ```
    docker inspect <container ID>
    ```
- 没有 `ifconfig` ，需要 apt/yum/dnf install net-tools
- 需要 管理员权限
```
# 添加 ${USER} 到 docker 组
usermod -aG docker ${USER}
# 查看是否在 docker 组中
groups ${USERS}
# 取掉 127.0.0.1 地址
unset $DOCKER_HOST
```


# Res
- [Docker — 从入门到实践](https://github.com/yeasy/docker_practice)
- [上链的 GitBook 版本](https://www.gitbook.io/book/yeasy/docker_practice)
