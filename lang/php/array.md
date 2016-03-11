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

array_intersect — Computes the intersection of arrays
```
// returns an array containing all the values of array1 that are present in all the arguments. Note that keys are preserved.
$array1 = array("a" => "green", "red", "blue");
$array2 = array("b" => "green", "yellow", "red");
$result = array_intersect($array1, $array2);
print_r($result);

Array
(
    [a] => green
    [0] => red
)
```

array_intersect_assoc — Computes the intersection of arrays with additional index check
```
$array1 = array("a" => "green", "b" => "brown", "c" => "blue", "red");
$array2 = array("a" => "green", "b" => "yellow", "blue", "red");
$result_array = array_intersect_assoc($array1, $array2);
print_r($result_array);

Array
(
    [a] => green
)
```

jj


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
