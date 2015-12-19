变量错误 
```
echo "abc"==true;
echo "abc"==0;
//这两个等式同时成立；按理应该能推出true == 0，但实际上，0 == false。
```

最大比较
```
$val = max(-10, FALSE);
$val = max(0, FALSE);
// -10 最大，因为 -10 被认为是 TRUE
// 0 最大
```


未定义变量错误
```
echo $ppp==$pp;
echo $ppp===$pp;
//都是会返回为真
```

