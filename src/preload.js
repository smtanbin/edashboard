/****************************************************
* Module: preload.js
* Type: Java Script
* Author: Tanbin Hassan Bappi
* Date: Oct 2021
* Description: All of the Node.js APIs are available in the preload process.
It has the same sandbox as a Chrome extension.
*****************************************************/

window.addEventListener("DOMContentLoaded", () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ["chrome", "node", "electron"]) {
    replaceText(`${type}-version`, process.versions[type])
  }
})

window.openGaeme = function (executablePath) {
  var child = require("child_process").execFile
  child(executablePath, function (err, data) {
    if (err) {
      console.error(err)
      return
    }
    console.log(data.toString())
  })
}
