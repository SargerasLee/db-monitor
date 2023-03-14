const { app, BrowserWindow, ipcMain } = require('electron')
const WinState = require('electron-win-state').default
const path = require('path')
const createWin =()=>{
    const state = new WinState({
        defaultWidth:1400,
        defaultHeight:600
    })
    const win = new BrowserWindow({
        ...state.winOptions,
        webPreferences:{
            preload:path.resolve(__dirname,'./preload/index.js')
        },
        show:false
    })
    win.loadURL('http://127.0.0.1:5173/')
    win.webContents.openDevTools()
    state.manage(win)
    win.on('ready-to-show',()=>{
        win.show()
    })
}

app.whenReady().then(()=>{
    createWin()
    app.on('activate', () => {
        // 在 macOS 系统内, 如果没有已开启的应用窗口
        // 点击托盘图标时通常会重新创建一个新窗口
        if (BrowserWindow.getAllWindows().length === 0)
            createWin()
    })

})

// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 因此, 通常
// 对应用程序和它们的菜单栏来说应该时刻保持激活状态,
// 直到用户使用 Cmd + Q 明确退出
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
