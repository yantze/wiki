# Convert webp to png

Use ffmpeg
```
ffmpeg -i file.webp file.png
```

`brew install webp` support with quality value
```
dwebp file.webp -o file.png
cwebp -q 80 file.png -o file.webp # default is 75
```

## Ref
- https://winaero.com/blog/convert-webp-png-linux/
