# patch 打补丁

# scene.1 diff single file
```
diff -u oldfile-name-here newfile-name-here > patch.diff
patch oldfile-name-here patch.diff # result add patch to oldfile-name-here
# patch -R oldfile-name-here patch.diff will reverse to old version
```

# scene.2 diff multi files
```
diff -rupN /usr/src/lighttpd-1.4.35/ /usr/src/lighttpd-1.4.35-new/ > my.patch
patch -p3 patch.diff # patch to entire dir from /usr/src/, why -p3?, remove `/usr/src/` three slashes
# if in /usr/ , above command is `patch -p2 patch.diff`

-p0 in patch command –> entire file name
-p1 in patch command –> file name preceding first forward slash
-p2 in patch command –> file name preceding second forward slash
etc.
Example:
-p0 = /path/to/patch/file
-p1 = path/to/patch/file
-p2 = to/patch/file
-p3 = patch/file
-p4 = file
```

# git patch
文字说一下好了，这里的 patch 是指两个 commit 记录之间的 patch，跟之前的那种不一样，可以参考这篇文章。
https://ariejan.net/2009/10/26/how-to-create-and-apply-a-patch-with-git/

# Practice Scene
在一些传统的 workflowy 中，为了兼容一些项目，可能需要用都 Git 的 patch
```
git diff > new.patch
# 到另外一个没有 git 的相同代码项目，比如 git archive 后的项目
patch -p0 new.patch
```

