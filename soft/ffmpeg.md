# FFmpeg

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

## Merge
```bash
ffmpeg -f concat -safe 0 -i ./21-30.txt -c copy -fflags +genpts 21-30.flv
# ffmpeg -f concat -i textfile -fflags +genpts merged.mp4
# https://superuser.com/questions/1039678/merge-multiple-video-with-ffmpeg-single-command-line-in-specific-time-without-cu
```

## Document
- [Official Document](http://ffmpeg.org/documentation.html)
- [FFmpeg 视频处理入门教程 - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2020/01/ffmpeg.html)
