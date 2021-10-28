/************************************************************************************************************
 * Module: Loader.js
 * Type: Vanila JavaScript
 * Author: Tanbin Hassan Bappi
 * Date: Oct 2021
 * Description: This file will load all nacessery Js & Json file from server
 ***********************************************************************************************************/

/*
Variable Declaration
*/
const stg = window.localStorage
let host = localStorage.getItem("host")

// get value from local storage
const scriptLink = () => {
  if (host === null) {
    const setting = require("../init.json")
    stg.setItem("host", setting.host)
  } else getScript(host)
}
// inject scripts
getScript = (src) => {
  document.write(`<script src=${src}/src/app/sampledata.js ></script>`)
  document.write(`<script src=${src}/src/app/remoteApp.js ></script>`)
  document.write(`<script src=${src}/src/app/function.js ></script>`)
}

scriptLink()

// Standard Bank Ltd
