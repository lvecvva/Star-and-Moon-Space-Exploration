const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 720,
    height: 860,
    resizable: false,
    icon: path.join(__dirname, "icons", "icon.ico")
  });

  win.setMenuBarVisibility(false);
  win.loadFile("game.html");
}

app.whenReady().then(createWindow);