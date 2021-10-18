// Modules to control application life and create native browser window
const { app, BrowserWindow, Menu, autoUpdater } = require('electron')

let win

const path = require('path')
const { exec } = require('child_process')

function createWindow() {
	// Create the browser window.
	const win = new BrowserWindow({
		width          : 800,
		height         : 600,
		frame          : true,
		icon           : __dirname + '/logo.ico',
		webPreferences : {
			// webSecurity                    : false,
			plugins            : true,
			preload            : path.join(__dirname, 'preload.js'),
			nodeIntegration    : true,
			enableRemoteModule : true,
			contextIsolation   : false,
			autoHideMenuBar    : true
		}
	})

	// win.setMenuBarVisibility(false)
	// win.setAutoHideMenuBar(true)
	// win.webContents.openDevTools()
	win.loadFile(path.join(__dirname, 'index.html'))
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
	createWindow()

	app.on('activate', function() {
		// On macOS it's common to re-create a window in the app when the
		// dock icon is clicked and there are no other windows open.
		if (BrowserWindow.getAllWindows().length === 0) createWindow()
	})
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.

// app.on('ready', () => {
// 	if (!isDev) {
// 		autoUpdate.checkForUpdates()
// 	}
// })

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

const callProgram = (path) => {
	console.log('accessed')
	exec(path)
	// Double quotes are used so that the space in the path is not interpreted as
	// a delimiter of multiple arguments.

	console.log('done')
}
