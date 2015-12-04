#!/bin/bash

# 脚本来自 ：如何将VPS上的网站数据定时自动备份到Dropbox
 
# 定义需要备份的目录
WEB_DIR=/var/www/web # 网站数据存放目录
 
# 定义备份存放目录
DROPBOX_DIR=/backup/$(date +%Y-%m-%d) # Dropbox上的备份目录
LOCAL_BAK_DIR=/home/user/backup # 本地备份文件存放目录
 
# 定义备份文件名称
DBBakName=DB_$(date +%Y%m%d).tar.gz
WebBakName=Web_$(date +%Y%m%d).tar.gz
 
# 定义旧数据名称
Old_DROPBOX_DIR=/$(date -d -7day +%Y-%m-%d)
OldDBBakName=DB_$(date -d -10day +%Y%m%d).tar.gz
OldWebBakName=Web_$(date -d -10day +%Y%m%d).tar.gz
 
cd $LOCAL_BAK_DIR
 
#使用命令导出数据库
# mongodump --out $LOCAL_BAK_DIR/mongodb/ --db bastogne
mysqldump -uroot -p dbname > mysql.sql
 
#压缩数据库文件合并为一个压缩文件
# tar zcf $LOCAL_BAK_DIR/$DBBakName $LOCAL_BAK_DIR/mongodb
# rm -rf $LOCAL_BAK_DIR/mongodb
tar zcf $LOCAL_BAK_DIR/$DBBakName $LOCAL_BAK_DIR/mysql.sql
rm -rf $LOCAL_BAK_DIR/mysql.sql
 
#压缩网站数据
tar zcf $LOCAL_BAK_DIR/$WebBakName $WEB_DIR/*
 
cd ~
#开始上传
~user/.bin/dropbox upload $LOCAL_BAK_DIR/$DBBakName $DROPBOX_DIR/$DBBakName
~user/.bin/dropbox upload $LOCAL_BAK_DIR/$WebBakName $DROPBOX_DIR/$WebBakName
 
#删除旧数据
rm -rf $LOCAL_BAK_DIR/$OldDBBakName $LOCAL_BAK_DIR/$OldWebBakName
~user/.bin/dropbox delete $Old_DROPBOX_DIR/
 
echo -e "Backup Done!"
