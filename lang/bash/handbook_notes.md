# bash handbook notes
> handbook.md notes


```
$PS1 # The primary prompt string.
$PS2
```

Variables may also have default values. We can define as such using the following syntax:
```
 # if variables are empty, assign them default values
: ${VAR:='default'}
: ${$1:='first'}
# or
FOO=${FOO:-'default'}
```


```
printf "+ %s\n" ${fruits[*]}
# + Apple
# + Desert
# + fig
# + Plum
```

```
<
Redirecting input
<<
Here documents syntax
<<<
```

```
ls -l | grep .md$ | less
```



The exit status of a pipeline is normally the exit status of the last command in the pipeline. The shell will not return a status until all the commands in the pipeline have completed. If you want your pipelines to be considered a failure if any of the commands in the pipeline fail, you should set the pipefail option with:
```
set -o pipefail
```


Global aliases can be used anywhere in the command line. Example:
```
G # alias -g G='| grep '
```

