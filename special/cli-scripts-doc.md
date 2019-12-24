# 常见的 Node 脚本编辑

```js
const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const fsp = {
    readFile : promisify(fs.readFile),
    writeFile : promisify(fs.writeFile),
    accessSync: fs.accessSync,
}

function getLogger(info) {
    return {
        debug: function (...args) {
            if (process.env.DEBUG_MODE) {
                console.log(`\x1b[36m[${info}]\x1b[0m ${args[0]}`, ...args.slice(1))
            }
        },
        info: function (...args) {
            console.log(...args)
        },
    }
}
```

```js

```
