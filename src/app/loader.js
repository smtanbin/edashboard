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
let host = localStorage.getItem('syshost')

// get value from local storage
const scriptLink = () => {
	getScript(host)
}
// inject scripts
getScript = (src) => {
	document.write(`<script src=${src}/public/allfunc.js></script>`)
	document.write(`<script src=${src}/public/btnfunc.js></script>`)
	document.write(`<script src=${src}/public/function.js></script>`)
	document.write(`<script src=${src}/public/data.js></script>`)
}

scriptLink()

// Standard Bank Ltd
