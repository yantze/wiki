# 屏幕录制

## OS X Screencast to animated GIF
- Open "Quicktime Player",
- Go to File -> New Screen Recording
- Selected screen portion by dragging a rectangle, recorded 13 second video.
```
ffmpeg -i in.mov -s 600x400 -pix_fmt rgb24 -r 10 -f gif - | gifsicle --optimize=3 --delay=3 > out.gif
```

> Notes on the arguments:
```
-r 10 tells ffmpeg to reduce the frame rate from 25 fps to 10
-s 600x400 tells ffmpeg the max-width and max-height
--delay=3 tells gifsicle to delay 30ms between each gif
--optimize=3 requests that gifsicle use the slowest/most file-size optimization
```

share the git using dropbox and public url:
```
cp out.gif ~/Dropbox/Public/screenshots/Screencast-`date +"%Y.%m.%d-%H.%M"`.gif
```

from : https://gist.github.com/dergachev/4627207
more detail:https://github.com/dergachev/screengif


## mac 录制屏幕转为 mp4
```
ffmpeg -i in.mov -q:v 0 output.mp4
```

## 使用其它软件
- Gif Brewery 3
