// 用于控制应用程序寿命和创建本机浏览器窗口的模块
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  // 创建浏览器窗口
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // 在应用中加载 index.html
  // mainWindow.loadFile('index.html');
  mainWindow.loadURL("http://www.baidu.com")

  // 打开开发者工具
  // mainWindow.webContents.openDevTools()
}

// 当Electron完成初始化并准备创建浏览器窗口时，将调用此方法。
// 某些API只能在该事件发生后使用。
app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    // 在macOS上，当点击dock图标且没有其他窗口打开时，通常会在应用程序中重新创建一个窗口。
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// 关闭所有窗口时退出，macOS除外。在那里，应用程序及其菜单栏通常保持活动状态，直到用户使用Cmd+Q明确退出。
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

// 在这个文件中，你可以包含应用程序的其他特定主流程代码。
// 您也可以将它们放在单独的文件中，并在此处要求它们。
