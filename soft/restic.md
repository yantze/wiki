# Restic 备份

## Install
```bash
brew install restic
```

## Usage
```bash
restic -r b2:repo_backup init
restic -r b2:repo_backup list
restic -r b2:repo_backup backup .
restic -r b2:repo_backup snapshots
```

Restore
```bash
restic -r /srv/restic-repo restore 79766175 --target /tmp/restore-work
```
1. 这里的 79766175 是 snapshots 的 id，也可以用 latest 代替
2. 指定恢复的部分 ``--path "/home/art"`，也可以用 --include 和 --exclude

所有的 keys
```bash
restic -r /srv/restic-repo key list
```

## Ref
- https://restic.readthedocs.io/en/stable/075_scripting.html
