const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

var window = null;

// 完整禁用旧样式
process.env.ELECTRON_HIDE_INTERNAL_MODULES = 'true'
// 或者调用API
// require('electron').hideInternalModules()

app.on('ready', function() {
  window = new BrowserWindow({width: 800, height: 600});
  window.loadURL('https://www.w3cschool.cn');
});



