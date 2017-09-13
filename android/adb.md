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

find application mainActivity
```
adb shell dumpsys window windows
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

test
```
adb shell am start -d "http://192.168.2.38:8000/a.mkv" -t "video/mp4" -a android.intent.action.VIEW -n com.mxtech.videoplayer.ad/.ActivityMediaList
adb shell am start -d "http://192.168.2.38:8000/a.mkv" -t "video/mp4" -a android.intent.action.VIEW -n com.mxtech.videoplayer.ad/.ActivityMediaList


```

Start in Code
```
Intent intent = new Intent(Intent.ACTION_VIEW);
Uri videoUri = Uri.parse("http://host:port/playlist.m3u8");
intent.setDataAndType( videoUri, "application/x-mpegURL" );
intent.setPackage( "com.mxtech.videoplayer.pro" );
startActivity( intent );
```

Start with web
```
<a href="intent:http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8 #Intent;package=com.mxtech.videoplayer.ad;S.title=New%20title;end">Launch through Intent scheme.</a>
```

## RES
- https://github.com/maldroid/adb_cheatsheet/blob/master/cheatsheet.pdf

## REF
- https://stackoverflow.com/questions/12698814/get-launchable-activity-name-of-package-from-adb
- https://sites.google.com/site/mxvpen/api
