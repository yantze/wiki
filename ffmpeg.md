# ffmpeg

## Document
- [Official Document](http://ffmpeg.org/documentation.html)

## Normal
```
# Change size (also with jpg, gif)
ffmpeg -i IMG_0010.MOV -vf scale=540:-1 output.m4v

# Copy from source
ffmpeg -i IMG_0011.MOV -acodec copy -vcodec copy output.m4v
```

