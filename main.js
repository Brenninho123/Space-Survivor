// main.js
const { app, BrowserWindow } = require("electron");
const path = require("path");

// Somente desktop: conecta ao Discord RPC
try {
  require("./discord_rpc_desktop.js");
} catch (err) {
  console.log("Discord RPC não está disponível:", err.message);
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    fullscreen: true,
    resizable: false,
    title: "Space Survivor",
    autoHideMenuBar: true,
    icon: path.join(__dirname, "icon.ico"), // seu ícone desktop
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      preload: path.join(__dirname, "preload.js") // opcional se quiser usar Node no renderer
    }
  });

  win.loadFile("index.html");
}

// App ready
app.whenReady().then(createWindow);

// Fechar app
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});