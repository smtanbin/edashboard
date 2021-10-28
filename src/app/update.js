/************************************************************************************************************
 * Module: Update.js
 * Type: Vanila JavaScript
 * Author: Tanbin Hassan Bappi
 * Date: Oct 2021
 * Description: This will update app
 ***********************************************************************************************************/

 const { ipcRenderer } = require('electron');
 const version = document.getElementById('version');
 const updatenotification = document.getElementById('updatenotification');
 const message = document.getElementById('message');
 const restartButton = document.getElementById('restart-button');
 
 ipcRenderer.send('app_version');
 ipcRenderer.on('app_version', (event, arg) => {
   ipcRenderer.removeAllListeners('app_version');
   version.innerText = 'Version ' + arg.version;
 });

 ipcRenderer.on('update_available', () => {
   ipcRenderer.removeAllListeners('update_available');
   message.innerText = 'A new update is available. Downloading now...';
   updatenotification.classList.remove('hidden');
 });

 ipcRenderer.on('update_downloaded', () => {
   ipcRenderer.removeAllListeners('update_downloaded');
   message.innerText = 'Update Downloaded. It will be installed on restart. Restart now?';
   restartButton.classList.remove('hidden');
   updatenotification.classList.remove('hidden');
 });

closeupdatenotification = () => {
   updatenotification.classList.add('hidden');
 }
 
restartApp = () => {
   ipcRenderer.send('restart_app');
 }