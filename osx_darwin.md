<<<<<<< HEAD
sysctl vm.loadavg #view system loadavg
brew install coreutils #install coreutils to compatible linux

#install homebrewcask
brew install caskroom/cask/brew-cask

# install Today-Scripts
https://github.com/SamRothCA/Today-Scripts


##OS X Screencast to animated GIF
Open "Quicktime Player",
Go to File -> New Screen Recording
Selected screen portion by dragging a rectangle, recorded 13 second video.
```
ffmpeg -i in.mov -s 600x400 -pix_fmt rgb24 -r 10 -f gif - | gifsicle --optimize=3 --delay=3 > out.gif
```
Notes on the arguments:
-r 10 tells ffmpeg to reduce the frame rate from 25 fps to 10
-s 600x400 tells ffmpeg the max-width and max-height
--delay=3 tells gifsicle to delay 30ms between each gif
--optimize=3 requests that gifsicle use the slowest/most file-size optimization

share the git using dropbox and public url:
```
cp out.gif ~/Dropbox/Public/screenshots/Screencast-`date +"%Y.%m.%d-%H.%M"`.gif
```

from : https://gist.github.com/dergachev/4627207
more detail:https://github.com/dergachev/screengif
=======
# view system loadavg
```
sysctl vm.loadavg 
```

# install coreutils to compatible linux
```
brew install coreutils 
```

# change hostname
```
hostname what-you-want
sudo scutil --set HostName yourname
```
>>>>>>> d2d845c82fba4a1e81fa9a06e314879b79038b85
