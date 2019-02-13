# Chrome Headless


Run in command line:
```sh
alias chrome="/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome"
chrome --headless --disable-gpu --crash-dumps-dir=./tmp --dump-dom https://google.com
# --remote-debugging-port=9222
# --print-to-pdf
# --repl
```

Library: Puppeteer
```javascript
const puppeteer = require('puppeteer')

(async() => {
  const browser = await puppeteer.launch()
  console.log(await browser.version())
  await browser.close()
})()
```

Library: chrome-remote-interface
```javascript
const chromeLauncher = require('chrome-launcher')
const CDP = require('chrome-remote-interface')

async function example() {
    let client
    try {
        // connect to endpoint
        client = await CDP()
        // extract domains
        const { Network, Page } = client
        // setup handlers
        Network.requestWillBeSent((params) => {
            console.log(params.request.url)
        })
        // enable events then start!
        await Network.enable()
        await Page.enable()
        await Page.navigate({url: 'https://www.google.com'})
        await Page.loadEventFired()
    } catch (err) {
        console.error(err)
    } finally {
        if (client) {
            await client.close()
        }
    }
}

function launchChrome(headless=true) {
    return chromeLauncher.launch({
        port: 9222, // Uncomment to force a specific port of your choice.
        chromeFlags: [
            '--window-size=412,732',
            '--disable-gpu',
            headless ? '--headless' : ''
        ]
    })
}

launchChrome().then(chrome => {
    console.log(`Chrome debuggable on port: ${chrome.port}`)

    example()

    setTimeout(() => {
        chrome.kill()
    }, 0)

})
```

Library: selenium-webdriver


Reference
=========

- https://developers.google.com/web/updates/2017/04/headless-chrome
