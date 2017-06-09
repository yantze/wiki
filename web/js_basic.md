# js basic


## 如何不用for，while循环解决循环问题


```
let arr = [1, 2, 3,4]

#1
function total(arr, n) {
    return (n>0)?(arr[n-1] + total(arr, n-1)):0;
}
total(arr, arr.length) // return 10

#2
arr.reduce(function(x, y){
    return x+y;
}
// forEach(), some(), every(), map(), fliter()

#3
eval(arr.join('+'))
```




## Reference
- https://segmentfault.com/a/1190000007020267 
