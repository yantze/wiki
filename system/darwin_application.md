# 获取 MacOS 的软件信息

## 通过 appId/BundleID 找到软件位置
```
mdfind kMDItemCFBundleIdentifier = "com.google.Chrome"
```
通过软件名找 appId:
```
osascript -e 'id of app "Google Chrome"'
/usr/libexec/PlistBuddy -c 'Print CFBundleIdentifier' /Applications/Safari.app/Contents/Info.plist
```

设置软件属性：
`~/Library/Preferences`
通过 `/usr/libexec/PlistBuddy filename` 执行 `print`, `set propertyName false` 修改查看设置

## 查找当前系统的软件信息
方法一：（这种更详细，但至少有 10MB 左右
```
/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister -apps user -dump
```
方法二：（只有少量的软件信息）
```
system_profiler SPApplicationsDataType -detailLevel full
```
同时也可以用这个方法，获取其它系统信息，比如 `system_profiler SPUSBDataType`，如果使用 nodejs，可以通过包 [systeminformation](https://github.com/sebhildebrandt/systeminformation/) 获取系统信息。

## 获取软件购买票据信息
- /private/var/db/receipts 有所有软件的购买票据
- 使用 `lsbom` 获取 bom 文件，查看签名的文件

# See Also
- [darwin_sysinfo](./darwin_sysinfo.md)

# Ref
- https://www.v2ex.com/t/649552
