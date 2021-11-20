# FFmpeg

## Normal

使用 crf 进行压缩优化
```shell
ffmpeg -i "./鲸歌 杨迪雅_resample.mp4" -c:v libx264 -preset veryslow -crf 26 -c:a copy "鲸歌 杨迪雅_resample_crf.mp4"
# veryslow 和下一个级别相差 1%，这个相对最优
```

长度剪裁
```shell
ffmpeg -i "S1.Ep2.mkv"  -ss 00:09:32.20 -t 00:00:07.05 -c copy out.mkv
```

画面剪裁
```shell
ffmpeg -i IMG_0010.MOV -vf scale=540:-1 output.m4v
# scale=w=iw/2:h=ih/2
# (also with jpg, gif)
# (也可以指定一屏的 pixels，长宽比指定) ^4
```

# 分离视频(可以从错误信息中确认音频格式)
```shell
ffmpeg -i IMG_2229.MOV -vn -acodec copy output-audio.acc
# -vn : video none
```

```shell
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
- https://www.thewindowsclub.com/how-to-resize-a-video-using-command-line-in-windows-10-with-ffmpeg
- [FFmpeg视频转码技巧之-crf参数（H.264篇）_呦呦鹿鸣-CSDN博客](https://blog.csdn.net/happydeer/article/details/52610060)
