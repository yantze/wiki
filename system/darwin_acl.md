# Darwin Acl System
Mac OS X 支持多种权限模型, 现在我记录一下遇到的一些麻烦事，可以通过 `ls -el` 显示是否有富权限信息。

## Extend
对已一般的文件，可以通过 `xattr -l <filename>` 显示文件的一些系统信息

## ACL 和 "plus"(+) 、”at"(@)
```
$ ls -l
drwxr-xr-x+   3 enekochan  staff   102  1 may 18:55 Sites
-rwxrwx---@   1 enekochan  staff   129  7 jun  2011 test1.sh
```
- The "plus" symbol means that the file has a richer permission model using ACLs 
- the "at" symbol means that the file has some extended attributes

```
$ ls -le
drwxr-xr-x+   3 enekochan  staff   102  1 may 18:55 Sites
 0: group:everyone deny delete
 1: user:_spotlight inherited allow list,search,readattr,readextattr,readsecurity,file_inherit,directory_inherit
-rwxrwx---@   1 enekochan  staff    129  7 jun  2011 test1.sh
 0: user:_spotlight inherited allow read,execute,readattr,readextattr,readsecurity
 ```

总的来说是 Mac OS 的权限模型很复杂，如果之前在一些文件夹开启了 `File Sharing`，那么有可能出现文件没有权限删除的事情


同样 Mac OS 的用户模型也非常复杂，LDAP 等模型在非常隐蔽的角落

## REF
- https://tech.enekochan.com/en/2014/05/29/plus-and-at-symbols-listing-file-permissions-in-mac-os-x/
