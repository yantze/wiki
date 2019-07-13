# ffmpeg

## Document
- [Official Document](http://ffmpeg.org/documentation.html)

## Normal
```
# Change size (also with jpg, gif)
ffmpeg -i IMG_0010.MOV -vf scale=540:-1 output.m4v

# Copy from source
ffmpeg -i IMG_0011.MOV -acodec copy -vcodec copy output.m4v

# Copy portion of video
ffmpeg -i "S1.Ep2.mkv"  -ss 00:09:32.20 -t 00:00:07.05 -c copy out.mkv

# Seperate voice from video, check voice format from error info
ffmpeg -i IMG_2229.MOV -vn -acodec copy output-audio.acc
```

