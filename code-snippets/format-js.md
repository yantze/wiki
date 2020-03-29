# 格式化紧凑的 js 代码

```js
// node cli
const cp = require('child_process')
const fs = require('fs')
const path = require('path')

const isFormatted = (e) => e.endsWith('.js') && !e.endsWith('_formatted.js')
const isSelf = (e) => e === path.basename(__filename)
const fileList = fs.readdirSync('.').filter(e => isFormatted(e) && !isSelf(e))

for (const item of fileList) {
    const fileName = path.basename(item)
    const name = path.parse(item).name
    cp.execSync(`js-beautify ${fileName} > ${name}_formatted.js`)
}
```
