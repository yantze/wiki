git manual
---
> 提供常见的 git 命令，其它一些使用方法需要看：https://github.com/git-tips/tips/blob/master/README.md


配置

首先是配置帐号信息
```
git config --global user.name yanhaijing
git config --global user.email yanhaijing@yeah.net
```

```
git config --list # 查看配置的信息
git help config # 获取帮助信息
```

配置自动换行（自动转换坑太大）
```
git config --global core.autocrlf input  # 提交到git是自动将换行符转换为lf
```

配置密钥
```
ssh-keygen -t rsa -C yanhaijing@yeah.net  # 生成密钥
ssh -T git@github.com  # 测试是否成功
```

新建仓库
```
git init # 初始化
git status # 获取状态
git add file # .或*代表全部添加
git commit -m "message" # 此处注意乱码
git remote add origin git@github.com:yanhaijing/test.git # 添加源
git push -u origin master # push同事设置默认跟踪分支
```

从现有仓库克隆
```
git clone git://github.com/yanhaijing/data.js.git    
git clone git://github.com/schacon/grit.git mypro # 克隆到自定义文件夹
```

```
git add * # 跟踪新文件

rm *&git rm * # 移除文件
git rm -f * # 移除文件
git rm --cached * # 取消跟踪
git mv file_from file_to # 重命名跟踪文件

git log # 查看提交记录

git commit # 提交更新
git commit -m 'message'
git commit -a # 跳过使用暂存区域，把所有已经跟踪过的文件暂存起来一并提交
git commit --amend # 修改最后一次提交

git reset HEAD * # 取消已经暂存的文件

git checkout -- file # 取消对文件的修改（从暂存区去除file）
git checkout branch|tag|commit -- file_name # 从仓库取出file覆盖当前分支
git checkout -- . # 从暂存区去除文件覆盖工作区
分支

git branch # 列出本地分支
git branch -r # 列出远端分支
git branch -a # 列出所有分支
git branch -v # 查看各个分支最后一个提交对象的信息
git branch --merge # 查看已经合并到当前分支的分支
git branch --no-merge # 查看为合并到当前分支的分支

git branch test # 新建test分支
git checkout test # 切换到test分支
git checkout -b test # 新建+切换到test分支
git checkout -b test dev # 基于dev新建test分支，并切换

git branch -d test # 删除test分支
git branch -D test # 强制删除test分支

git merge test # 将test分支合并到当前分支
git rebase master # 将master分之上超前的提交，变基到当前分支
远端

git fetch originname branchname # 拉去远端上指定分支
git merge originname branchname # 合并远端上指定分支
git push originname branchname # 推送到远端上指定分支
git push originname localbranch:serverbranch # 推送到远端上指定分支

git checkout -b test origin/dev # 基于远端dev新建test分支

git push origin :server # 删除远端分支
源

git是一个分布式代码管理工具，所以可以支持多个仓库，在git里，服务器上的仓库在本地称之为remote。

个人开发时，多源用的可能不多，但多源其实非常有用。

git remote add origin1 git@github.com:yanhaijing/data.js.git

git remote # 显示全部源
git remote -v # 显示全部源+详细信息

git remote rename origin1 origin2 # 重命名

git remote rm origin1 # 删除

git remote show origin1 # 查看指定源的全部信息
标签

当开发到一定阶段时，给程序打标签是非常棒的功能。

git tag # 列出现有标签    

git tag v0.1 # 新建标签
git tag -a v0.1 -m 'my version 1.4' # 新建带注释标签

git checkout tagname # 切换到标签

git push origin v1.5 # 推送分支到源上
git push origin --tags # 一次性推送所有分支

git tag -d v0.1 # 删除标签
git push origin :refs/tags/v0.1 # 删除远程标签
```

```
git help * # 获取命令的帮助信息
git status # 获取当前的状态，非常有用，因为git会提示接下来的能做的事情
```

参考资料
- Git参考手册
- Git简明手册
- Git Magic
- Git Community Book 中文版
- Pro Git
- 图解Git
- git-简明指南
- learnGitBranching
原文链接 http://yanhaijing.com/git/2014/11/01/my-git-note/

## submodule
if display error detach master,use below commands
```
git checkout HEAD
git push
git checkout master
git pull
```

## move master to origin/master
```
git checkout master
git rebase origin/master
```

# git-extras
```bash
git clone https://github.com/tj/git-extras.git
cd git-extras
# checkout the latest tag
git checkout $(git describe --tags $(git rev-list --tags --max-count=1))
[sudo] make install
```

## delete unTracked files
list will delete files
```
git clean -d -n
# -d is Remove untracked directories.
```
delete all untracked files and directories
```bash
git clean -d -f
# also git clean -df
```
just want to remove ignored files
```bash
git clean -f -X 
# git clean -fX
```
remove ignored as well as non-ignored files
```bash
git clean -f -x
# git clean -fx
```

## 把已经提交的文件添加到 .gitignore
```
git update-index --assume-unchanged .idea/project.iml
git update-index --no-assume-unchanged
from:http://stackoverflow.com/questions/3319479/git-can-i-commit-a-file-and-ignore-the-content-changes 
```

## 打包源码，但不包括 `.git` 
```
git archive --format zip --prefix=project/ --output ~/project.zip master 
git help archive

```
