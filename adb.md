# ADB

## Basic

install a apk
```
adb connect 192.168.xxx.xxx
adb install xxx.apk
adb uninstall com.android.tv
adb shell pm clear com.android.tv # dst /data/data/包名/
```

push a file
```
adb push
```

shell模式
```
adb shell
```

screenshot
```
screencap -p /1.png
```

start an appliction
```
adb shell
am start -n com.package.name/com.package.name.ActivityName

# or
adb shell am start -n com.package.name/com.package.name.ActivityName

# or only package
adb shell monkey -p com.mxtech.videoplayer.ad 1
```

start with an action
```
am start -a com.example.ACTION_NAME -n com.package.name/com.package.name.ActivityName 
```

## RES
- https://github.com/maldroid/adb_cheatsheet/blob/master/cheatsheet.pdf
