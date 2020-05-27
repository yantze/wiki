# FFmpeg

## Normal
```
# 剪裁
ffmpeg -i "S1.Ep2.mkv"  -ss 00:09:32.20 -t 00:00:07.05 -c copy out.mkv

# Change size (also with jpg, gif)
ffmpeg -i IMG_0010.MOV -vf scale=540:-1 output.m4v

# Seperate voice from video, check voice format from error info
ffmpeg -i IMG_2229.MOV -vn -acodec copy output-audio.acc
# -vn : video none

# Voice
ffmpeg -y  -i input.mp4  -acodec pcm_s16le -f s16le -ac 1 -ar 16000 output.pcm
# -f s16le … PCM signed 16-bit little-endian samples
# -ac 1 … 1 channel (mono)
# -ar 16000 … sample rate 16000Hz
ffmpeg -i input.flv -f s16le -acodec pcm_s16le output.raw

# 单独对音视频分别编解码
ffmpeg -i input.webm -c:v copy -c:a flac output.mkv
# -c:v codec 是 codec:v(ideo) 的简写, alias -vcodec
# -c:a codec 是 codec:a(udio), alias -acodec

# 只是改变容器
ffmpeg -i input.webm -c:av copy output.mkv
# 跟这个一样
ffmpeg -i IMG_0011.MOV -acodec copy -vcodec copy output.m4v
# 这个又有点不同
ffmpeg -i input.ogg -ss 00:00:10 -t 10 -c copy output.ogg

```

## Merge
```bash
ffmpeg -f concat -safe 0 -i ./21-30.txt -c copy -fflags +genpts 21-30.flv
# ffmpeg -f concat -i textfile -fflags +genpts merged.mp4
# https://superuser.com/questions/1039678/merge-multiple-video-with-ffmpeg-single-command-line-in-specific-time-without-cu
```

## Verbose
- 隐藏编译信息
- 隐藏冗余信息
- 参数可变
```
START=00:39:30 && ffmpeg -hide_banner -loglevel warning -i input.mp3 -f s16le -ac 1 -ar 16000 -ss $START -t 00:00:30 -y output.pcm && node test.js
```


## Exp
```bash
# 视频音频编码，更准确的说是：a media bitstream format
# 用在 `-c:v -c:a -c:av` 这种, 比如 `-c:a libopus`
ffmpeg -codecs


ffmpeg -formats
```

## Document
- `man ffmpeg` 更详细
- [Official Document](http://ffmpeg.org/documentation.html)
- [FFmpeg 视频处理入门教程 - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2020/01/ffmpeg.html)

