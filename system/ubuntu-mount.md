# linux 挂载

### Linux下挂载Windows文件共享目录：
mount -t cifs -o user=<USERNAME> //<SERVERNAME>/<SHAREFOLDERNAME> /mnt/<MOUNTPOINT>


### 挂载 nas 盘:
sudo mount -t nfs 192.168.50.187:/volume1/NFS /nfs


## ref
- [如何访问本地网络中 Synology NAS 上的文件 (NFS)](https://www.synology.com/zh-cn/knowledgebase/DSM/tutorial/File_Sharing/How_to_access_files_on_Synology_NAS_within_the_local_network_NFS)
- https://twitter.com/chenshaoju/status/1303524250414804992
