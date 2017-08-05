# Font command family

fc-list

fc-cache

fc-match

## Practice
```
fc-list :lang=zh | awk -F ':'  '{ print $1 }' | sort | uniq
```
