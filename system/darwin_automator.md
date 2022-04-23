# Automator Script Editor Snipt

# Run command in the exist terminal window
```
// https://forums.developer.apple.com/message/213832
function commandExistWindow(command) {
    var Terminal = Application('Terminal')
    Terminal.activate
    try {
        currentWindow = Terminal.windows.at(0)
        currentTab = currentWindow.selectedTab()
        Terminal.doScript(command, {
            in: currentTab
        })
    } catch(err) {
        // console.log(err) // no window
        Terminal.doScript(command);
    }
}
```
