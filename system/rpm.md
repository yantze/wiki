# RPM

## Display package installed files
```
rpm -ql <package>
#
dpkg -L
# but pip show info simple
pip show -f <package>
```

## Display package installed infomation
```
rpm -qi <package>
```

## Remove package
```
rpm -evv <package>
```

## Extract in macOS
```
brew install rpm2cpio
rpm2cpio.pl ./packagecloud-test-1.1-1.x86_64.rpm | cpio -idmv
```


## Reference
- https://blog.packagecloud.io/eng/2015/10/13/inspect-extract-contents-rpm-packages/
