const { app, BrowserWindow } = require('electron');

function createWindow() {
  // Crea una ventana de navegador.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // Carga el archivo HTML principal.
  mainWindow.loadFile('index.html');
}

app.whenReady().then(createWindow);

// Salir cuando todas las ventanas estén cerradas, excepto en macOS. En macOS, es común que las aplicaciones y sus barras de menú permanezcan activas hasta que el usuario salga explícitamente con Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  // En macOS, reactiva una ventana en la aplicación cuando se hace clic en el icono del dock y no hay otras ventanas abiertas.
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
