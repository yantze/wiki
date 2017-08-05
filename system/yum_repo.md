# yum repo 原理

## 添加 yum 源
类似 yarn 的方法，先把 yarn.repo 文件下载到 `/etc/yum.repos.d/yarn.repo`
```
// yarn.repo
[yarn]
name=Yarn Repository
baseurl=https://dl.yarnpkg.com/rpm/
enabled=1
gpgcheck=1
gpgkey=https://dl.yarnpkg.com/rpm/pubkey.gpg
```
然后在 yum install yarn 的时候，就可以自动更新 yarnpkg rpm 库了
```
// https://yarnpkg.com/en/docs/install
sudo wget https://dl.yarnpkg.com/rpm/yarn.repo -O /etc/yum.repos.d/yarn.repo
```
