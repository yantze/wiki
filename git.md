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

插入 alias
```
git config --global alias.co checkout
```
~/.gitconfig
```
[alias]
co = checkout
cm = !git add -A && git commit -m
ls = log --pretty=format:"%C(yellow)%h%Cred%d\\ %Creset%s%Cblue\\ [%cn]" --decorate
ec = config --global -e
up = !git pull --rebase --prune $@ && git submodule update --init --recursive
cob = checkout -b
save = !git add -A && git commit -m 'SAVEPOINT'
wip = !git add -u && git commit -m "WIP"
undo = reset HEAD~1 --mixed
amend = commit -a --amend
wipe = !git add -A && git commit -qm 'WIPE SAVEPOINT' && git reset HEAD~1 --hard
bclean = "!f() { git branch --merged ${1-master} | grep -v " ${1-master}$" | xargs git branch -d; }; f"
bdone = "!f() { git checkout ${1-master} && git up && git bclean ${1-master}; }; f"
```

配置密钥
```
ssh-keygen -t rsa -b 4096 -C yanhaijing@yeah.net  # 生成密钥
# ssh-add ~/.ssh/id_rsa
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


## submodule
if display error detach master,use below commands
```
git checkout HEAD
git push
git checkout master
git pull
```
add submodule
```
git submodule add <repo path> ./path/to/sub-directory
```

delte submodule
```
git rm submodule/path
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
## 浏览源码具体修改记录
```
# 查看最近一次（包括未 commit）记录
git diff HEAD~1

# 从最老的 commit 记录查看变动
git log --reverse -p

# 从最近 commit 查看记录
git show HEAD~1
```
## 修改最后一次 commit 的 message
```
# 修改页面的第一行
git commit -v --amend

# 修改之前几次的 commit 记录, 把其中的 pick 改为 reword，然后修改后面的 message
git rebase -i HEAD~3
# detail: https://help.github.com/articles/changing-a-commit-message/
```

## 删除远程分支
```
git push origin --delete branch_name 
```

## ignore file
Add ignore to global
```
git config --global core.excludesfile ~/.gitignore_global
```
Add to project ignore
```
`.gitignore`
```
Add to exclude in .git folder
```
.git/info/exclude
```

## 通过单个文件查找以前的代码
```
# more intergration
git log --follow -S remoteActionDispatch -- path/to/file
# --follow 追溯 rename、delete 记录
# -p 打印文件 diff
# -- 分清参数列表和文件文件列表
# -S/-G 
```
找到 commit log 后, 直接浏览这个文件, 也可以用 worktree 分出一个 branch, 对整个项目查找
```
git show commitlog:./path/to/filename
```

另一中全局查找
```
# Search in any revision, any files:
git rev-list --all | xargs git grep <regexp>

# Search only in some given files, for example xml files:
git rev-list --all | xargs -I{} git grep <regexp> {} -- "*.xml"</regexp></regexp>

# https://stackoverflow.com/questions/2928584/how-to-grep-search-committed-code-in-the-git-history
```

## worktree 多分支并存
本地文件已修改，此时需要新建分支，可以用 git stash 或者 git commit
但是有可能需要一边测试,一遍正常的运行代码，如果 copy 多份，同步可能有问题
```
git worktree add -b hotfix ../hotfix master
... 改动 ...
git commit # 自动commit到原来目录的主分支，看 hotfix/.git 是个软链接就知道了
rm -rf hotfix
git worktree prune # 清除连接， 可以用 git worktree list 查看
git branch -d hotfix
```

后来一想，其实 git clone 本地 repo 也可以，还省去多次命令的麻烦
```
git clone path/to/repo path/to/another
```


## 找到一次 log 的 commit id
```
git rev-parse HEAD~2
```

## 显示 git 相关账户的密码
macOS:
```
echo "protocol=https\nhost=github.com\n" | git credential-osxkeychain get
```

## 概念
** upstream & downstream **
upstream 会在你本地建立分支时，后台更新分支到 remote
downstream 与上相反


## 比较两个 commit 的文件变动
一半是 直接 git reset --hard 到终点，git reset 到起点，其中的变化就是文件的变化

## 合并多个 commit
合并多个 commit 可以使用 CherryPick, 把已经提交的 commit, 从一个分支放到另外一个分支
```
git cherry-pick <commit id>
```


## stash 流
```
git stash
git stash list
git stash pop
```
出现 stash pop 冲突，两种方法解决
```
git stash pop; git stash drop
# 冲突显示在文件里面,然后 drop 掉最近的这次记录
```
删除冲突文件，不过要用 git 内部的方法
```
git rm 冲突的文件，然后再次 git stash pop
```


## 实现文件修改的部分提交
比如一个文件有三处地方有修改，可以通过 GUI 软件提交，常用的是 `Github Desktop` 相关的内容

## Proxy
> 不方便注明出处的摘选
HTTP/HTTPS 协议，比如 `git clone https://github.com/github/hub.git`，使用下面的命令为 github.com 域名配置代理
```
git config --global http.https://github.com.proxy http://127.0.0.1:110
```

对于 SSH 协议，比如 `git clone git@github.com:github/hub.git`，需要在文件 ~/.ssh/config 中添加
```
host github.com
    ProxyCommand /usr/bin/nc -X connect -x 127.0.0.1:110 %h %p
```


## GUI clients
- git gui
- gitup
- git-fork.com

## Reference
- Git参考手册
- Git简明手册
- Git Magic
- Git Community Book 中文版
- git-简明指南
- Pro Git
- 图解Git
- learnGitBranching
- http://yanhaijing.com/git/2014/11/01/my-git-note/
