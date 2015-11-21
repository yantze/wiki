tutorial
    http://www.ibm.com/developerworks/cn/java/j-lo-apachethrift/

compile
```bash
git clone https://git-wip-us.apache.org/repos/asf/thrift.git
cd thrift
./bootstrap.sh
./configure --with-lua=no --with-erlang=no
make -j1
sudo make install
```

