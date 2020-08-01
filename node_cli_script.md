# Node js 脚本

## 建议 fsp
```js
const { promisify } = require('util')
const fsp = {
    readFile: promisify(fs.readFile),
    writeFile: promisify(fs.writeFile),
    readDir: promisify(fs.readdir),
}
```

## 使用 copy dir
```js
const copyDir = require('copy-dir')
copyDir(srcPath, dstPath, {}, e => {
    if (e) {
        console.error('copy error', srcPath, e)
    }
})

copyDir.sync(srcPath, dstPath, {})
```
