### package detail
```
dpkg -s ibus-rime 
```

### build essential
```
apt-get update && apt-get install -y libncurses5-dev build-essential cmake
```

### soft essential
```
sudo apt-get install silversearcher-ag Exuberant-ctags curl
sudo apt-get install git subversion mercurial
wget https://bootstrap.pypa.io/get-pip.py
python get-pip.py
```

###
```
sudo apt-get update
sudo apt-get dist-upgrade
apt-get install build-essential python-dev libmysqlclient-dev
###install php
apt install php5 php5-mysql
apt install php-pear
pear config-set preferred_state alpha
sudo pecl install yaf
```

###soft
```
https://github.com/rofl0r/proxychains-ng
config file:
/usr/local/etc/proxychains.conf
```


###install mysql
```
sudo apt-get install mysql-server mysql-client
if not tip root password
sudo mysqladmin -u root -h localhost password 'mypassword'
sudo mysqladmin -u root -h myhostname password 'mypassword'
for php
sudo apt-get install php5-mysql
for ruby
sudo apt-get install libmysql-ruby
for python:maybe fail,download the source and isntall
sudo pip install MySQL-python
```

###jre jdk###
```
sudo apt-get install default-jdk
sudo apt-get install default-jre
Oracle JDK:
https://www.digitalocean.com/community/tutorials/how-to-install-java-on-ubuntu-with-apt-get
```

###input method
解决状态栏图标不正确
```
cp rime.svg /usr/share/ibus-rime/icons/zhung.svg
ibus-setup #选择do not show(不要显示输入跟随)
```
