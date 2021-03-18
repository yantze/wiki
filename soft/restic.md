# Restic 备份

## Install
```bash
brew install restic
```

## 快速开始备份模板
```bash
export B2_ACCOUNT_ID=id
export B2_ACCOUNT_KEY=key
export RESTIC_PASSWORD=password
# 未初始化需要初始化
# restic -r b2:repo init
restic -r b2:repo backup . --iexclude="node_modules" --iexclude="*.dmg" --iexclude="*.zip" --iexclude="*.exe" --iexclude="dist" --iexclude="out"
```
设定每日备份
```
# crontab.txt
# m h dom mon dow user command
19 0 * * * sh /Users/yantze/backup/crontab/daily.sh &
```
每日执行脚本
```bash
restic -r b2:repo backup /path/to/your/dir --iexclude="node_modules" --iexclude="*.dmg" --iexclude="*.zip" --iexclude="*.exe" --iexclude="dist" --iexclude="out"
```

## Usage
```bash
restic -r b2:repo_backup init
restic -r b2:repo_backup list
restic -r b2:repo_backup backup .
restic -r b2:repo_backup snapshots
```

### Restore
```bash
restic -r /srv/restic-repo restore 79766175 --target /tmp/restore-work
```
1. 这里的 79766175 是 snapshots 的 id，也可以用 latest 代替
2. 指定恢复的部分 `--path "/home/art"`，也可以用 --include 和 --exclude

### dump
```bash
restic -r b2:repo dump latest "dir/config.yaml"
```

### 所有的 keys
```bash
restic -r /srv/restic-repo key list
```


## Ref
- https://restic.readthedocs.io/en/stable/075_scripting.html
