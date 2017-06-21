# 安装 OpenCV 笔记

## install on macOS

Method: one
```
# install python3
brew install python3

# install opencv3
brew tap homebrew/science
brew install opencv3

# read command info `brew info opencv3`

# run with c++
export PKG_CONFIG_PATH=/usr/local/opt/opencv3/lib/pkgconfig:$PKG_CONFIG_PATH
g++ -ggdb `pkg-config --cflags --libs opencv` image.cpp -o /tmp/hog && /tmp/hog

# run with python3
# the python3.6 must your system python3 version
echo /usr/local/opt/opencv3/lib/python3.6/site-packages >> /usr/local/lib/python3.6/site-packages/opencv3.pth
mkdir -p /Users/yantze/Library/Python/3.6/lib/python/site-packages
echo 'import site; site.addsitedir("/usr/local/lib/python3.6/site-packages")' >> /Users/yantze/Library/Python/3.6/lib/python/site-packages/homebrew.pth

# run with python2
echo /usr/local/opt/opencv3/lib/python2.7/site-packages >> /usr/local/lib/python2.7/site-packages/opencv3.pth
# /Users/yantze/Library/Python/2.7/lib/python/site-packages may to something wrong with opencv, so use it just run in script
import site; site.addsitedir("/usr/local/lib/python2.7/site-packages"); import cv2;

```

Method: two
> only run with python
```
pip install opencv-python
```


## simple tools
```
function compile() {g++ -ggdb `pkg-config --cflags --libs opencv` $* -o /tmp/test && /tmp/test }
```


## ref
https://www.learnopencv.com/install-opencv-3-on-yosemite-osx-10-10-x/

## Resource
- http://docs.opencv.org/2.4/modules/highgui/doc/user_interface.html
