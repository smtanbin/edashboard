'use strict'
/****************************************************
 * Module: preload.js
 * Type: Java Script
 * Author: Tanbin Hassan Bappi
 * Date: Oct 2021
 * Description: Modules to control application life and create native browser window
 *****************************************************/

const { app, BrowserWindow, ipcMain } = require('electron')

let win

const path = require('path')

const { exec } = require('child_process')

const { autoUpdater } = require('electron-updater')

function createWindow() {
	// Create the browser window.
	win = new BrowserWindow({
		width: 800,
		height: 600,
		frame: true,
		icon: __dirname + '/logo.ico',
		webPreferences: {
			plugins: true,
			preload: path.join(__dirname, 'preload.js'),
			nodeIntegration: true,
			enableRemoteModule: true,
			contextIsolation: false,
			autoHideMenuBar: true
		}
	})
	/***************************
   * Remove MenuBar */
	// win.setMenuBarVisibility(false)
	// win.setAutoHideMenuBar(true)

	/****************************/
	// win.webContents.openDevTools()

	win.loadFile(path.join(__dirname, 'index.html'))
	/* Call App Upadate */

	win.once('ready-to-show', () => {
		autoUpdater.checkForUpdatesAndNotify()
	})
} // This method will be called when Electron has finished
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
/* 
Quit when all windows are closed, except on macOS. There, it's common 
for applications and their menu bar to stay active until the user quits
explicitly with Cmd + Q.
*/

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

const callProgram = (path) => {
	console.log('accessed')
	exec(path) // Double quotes are used so that the space in the path is not interpreted as
	// a delimiter of multiple arguments.

	console.log('done')
}
/***************************
* App Upadate */

ipcMain.on('app_version', (event) => {
	event.sender.send('app_version', {
		version: app.getVersion()
	})
})
autoUpdater.on('update-available', () => {
	console.log('update found')
	win.webContents.send('update_available')
})
autoUpdater.on('update-downloaded', () => {
	win.webContents.send('update_downloaded')
})
ipcMain.on('restart_app', () => {
	autoUpdater.quitAndInstall()
})
/****************************/
//Tanbin Hassan Bappi
