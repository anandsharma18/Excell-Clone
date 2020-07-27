// const electron = require('electron');
// const app = electron.app;
// const BrowserWindow = electron.BrowserWindow;
const { app, BrowserWindow } = require('electron');
const ejse = require('ejs-electron');

ejse.data({
    pageName: "My Custom Excel",
    rows: 100,
    cols: 26
})

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        show: false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile('index.ejs').then(function () {
        win.removeMenu();
        win.maximize();
        win.show();
        win.webContents.openDevTools();
    })
};

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

app.whenReady().then(createWindow);



// npm init
// npm install electron -g
// launch.bat

// npm uninstall electrong -g
// npm install --save-dev electron
// npm install --save-dev ejs-electrons