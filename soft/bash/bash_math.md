# Math in Bash

## Most simple way
```
echo '1+1' | bc
```

## Performing Math Calculation in Bash
>I use math in bash scripts a lot, from simple crontab reports to Nagios monitoring plugins… Here is few small examples on how to do some maths in Bash with integers or float.

### Integer Math

First way to do math with integer (and only integer) is to use the command "expr — evaluate expression".


```bash
$ expr 1 + 1
$ myvar=$(expr 1 + 1)
$ echo $myvar
$ expr $myvar + 1
$ expr $myvar / 3
$ expr $myvar \* 3
```

> When doing a "multiply by" make sure to backslash the "asterisk"  as it’s a wildcard in Bash used for expansion.

Another alternative to expr, is to use the bash builtin command let.

```bash
$ echo $myvar
$ let myvar+=1
$ echo $myvar
$ let myvar+1
$ echo $myvar
$ let myvar2=myvar+1
$ echo $myvar2
```

Also, you can simply use the parentheses or square brackets :

```bash
$ echo $myvar
$ echo $((myvar+2))
$ echo $[myvar+2]
$ myvar=$((myvar+3))
```

This allow you to use C-style programming :

```bash
$ echo $myvar
$ echo $((myvar++))
$ echo $myvar
$ echo $((++myvar))
$ echo $myvar
```

### Floating point arithmetic

You can't do floating point arithmetic natively in bash, you will have to use a command line tool, the most common one being "bc - An arbitrary precision calculator language".

```bash
$ bc
bc 1.06
Copyright 1991-1994, 1997, 1998, 2000 Free Software Foundation, Inc.
This is free software with ABSOLUTELY NO WARRANTY.
For details type 'warranty'.
```

```bash
3*5.2+7/8
15.6
15.6+299.33*2.3/7.4
108.6
```

Of course you can use the STDIN to send your formula to "bc" then get the output on STDOUT.

```bash
$ echo "3.4+7/8-(5.94*3.14)" | bc
```

or by using the here-doc notation:

```bash
$ bc <<< "3.4+7/8-(5.94*3.14)"
```

> I encourage you too take a look at the man pages to get more detail on how it works (man bc).

There are four special variables, scale, ibase, obase, and last.  scale defines how some operations use digits after the decimal point.  The default value of scale is 0. ibase and obase define the conversion base for input and output numbers.

The default for both input and output is base 10.  last (an extension) is a variable that has the value of the last printed number.
The "scale" variable is really important for the precision of your results, especially when using integers only (Note: you can also use "bc -l" to use mathlib and see the result at max scale) .

```bash
$ echo "2/3" | bc
$ echo "scale=2; 2/3" | bc
$ echo "(2/3)+(7/8)" | bc
$ echo "scale=2;(2/3)+(7/8)" | bc
$ echo "scale=4;(2/3)+(7/8)" | bc
$ echo "scale=6;(2/3)+(7/8)" | bc
$ echo "(2/3)+(7/8)" | bc -l
```

Another way to do floating point arithmetic is to use AWK:

```bash
$ awk "BEGIN {print 100/3}"

# You can use printf to adjust the precision of the results:

$ awk "BEGIN {printf \"%.2f\n\", 100/3}"
```

When using negative values, make sure to leave a white space between signs.

```bash
# WRONG
$ awk "BEGIN {print -8.4--8}"
awk: cmd. line:1: BEGIN {print -8.4--8}
awk: cmd. line:1:                    ^ syntax error

# GOOD
$ awk "BEGIN {print -8.4 - -8}"
```
> If you want to go further, you can check my post Advanced Math Calculation in Bash using GNU bc.
