## Display Cookies
```js
const output = {};
document.cookie.split(/\s*;\s*/).forEach(function(pair) {
pair = pair.split(/\s*=\s*/);
output[pair[0]] = pair.splice(1).join('=');
});
console.log(JSON.stringify(output));
```
