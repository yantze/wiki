# Array

## Base
lpop a string ahead Array
```
$arr = ['k1'=>'v1', 'k2'=>'v2'];
$arr_count = array_shift($arr);
// output $arr_count => 1
```

lpush a string ahead to Array
```
$arr = ['k1'=>'v1', 'k2'=>'v2'];
$arr_count = array_unshift($arr, ['k3'=>'v3']);
// output $arr_count => 3

```

max array in array count
```
$array = [
    'c' => [
        '2011' => 'yes',
        '2012' => 'yesw',
        '2013' => 'yes',
        '2014' => 'yesw',
    ],
    'a' => [
        '2011' => 'yesw',
        '2012' => 'yes',
        '2015' => 'yesw',
    ],
    'b' => [
        '2011' => 'yes',
        '2012' => 'yesw',
    ],
];
/*
max($array) => (array) 'c' => [
        '2011' => 'yes',
        '2012' => 'yesw',
        '2013' => 'yes',
        '2014' => 'yesw',
]
*/
```
