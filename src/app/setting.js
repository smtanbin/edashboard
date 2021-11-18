/****************************************************
 * Module: Setting.js
 * Type: Vanila JavaScript
 * Author: Tanbin Hassan Bappi
 * Date: Oct 2021
 *
 ***************************************************/

/*
Variable Declaration
*/

const stg = window.localStorage
let host = localStorage.getItem('syshost')
const { ipcRenderer } = require('electron')

/****************************************************/
//                  Variables
/*************************************************** */

// default value
const dsyshost = 'http://127.0.0.1:3010'
const dNotificationHost = 'http://127.0.0.1'
const dNotificationPort = '3001'
const dWeatherapi = 'ba700996c9b5d5f5e8e44cf64fcc8992'

// use by notification
let notificationHost = localStorage.getItem('notificationHost')
let notificationPort = localStorage.getItem('notificationPort')

/*****************************************************/
//                 Reset Optations			   		//
/***************************************************/

// factory reset will reset everything
const factoryReset = () => {
	stg.setItem('syshost', dsyshost)
	stg.setItem('notificationHost', dNotificationHost)
	stg.setItem('notificationPort', dNotificationPort)
	stg.setItem('weatherapi', dWeatherapi)
	alert(`Reset Sucessful`)
	console.log(localStorage)
}

// only reset host
const resetsyshost = () => {
	stg.setItem('syshost', dsyshost)
	alert(`Server change to default Please restart app`)
}
// reset weather
const resetWeatherKey = () => {
	stg.setItem('weatherapi', dWeatherapi)
	alert(`Key change to ${dWeatherapi} Please restart app`)
}

// only reset notification host & port
const resetNotificationHost = () => {
	stg.setItem('notificationHost', dNotificationHost)
	stg.setItem('notificationPort', dNotificationPort)
	alert(`Server change to default Please restart app`)
}

/*****************************************************/
//                 Get Value  				   		//
/***************************************************/

// get host
getsyshost = () => {
	if (host === null) {
		stg.setItem('syshost', dsyshost)
		document.getElementById('syshost').innerHTML = `${host}`
	} else {
		document.getElementById('syshost').innerHTML = `${host}`
	}
}

// notification
getNotificationHost = () => {
	if (notificationHost === null) {
		stg.setItem('notificationHost', dNotificationHost)
		if (notificationPort === null || notificationPort === 0) {
			stg.setItem('notificationPort', dNotificationPort)
			document.getElementById('currentNotificationHost').innerHTML = `${notificationHost}`
			document.getElementById('currentNotificationPort').innerHTML = `${notificationPort}`
		} else {
			document.getElementById('currentNotificationHost').innerHTML = `${notificationHost}`
			document.getElementById('currentNotificationPort').innerHTML = `${notificationPort}`
		}
	} else {
		document.getElementById('currentNotificationHost').innerHTML = `${notificationHost}`
		document.getElementById('currentNotificationPort').innerHTML = `${notificationPort}`
	}
}

// get value feom main.js
ipcRenderer.on('message', function(event, text) {
	document.getElementById('appVersion').innerHTML = text
	document.getElementById('nodeVersion').innerHTML = text
	document.getElementById('electronVersion').innerHTML = text
})

/*****************************************************/
//                 Set Value  				   		//
/***************************************************/

// set host
const setsyshost = () => {
	hostvalue = document.getElementById('ipaddress').value
	if (!hostvalue) alert('Please input host url')
	else {
		stg.setItem('syshost', hostvalue)

		alert(`Server change to ${hostvalue} Please restart app`)
	}
}

// set notification
const setNotificationHost = () => {
	notificationHost = document.getElementById('notificationHost').value
	notificationPort = document.getElementById('notificationPort').value
	if (!notificationHost) alert('Please input with valid IP')
	else if (!notificationPort) alert('Please input with valid Port')
	else {
		stg.setItem('notificationHost', dNotificationHost)
		stg.setItem('notificationPort', dNotificationPort)

		alert(`Server change to ${notificationHost}:${notificationPort} Please restart app`)
	}
}

// set weather
const setWeatherKey = () => {
	hostvalue = document.getElementById('weatherKey').value
	if (!weatherKey) alert('Please input host url')
	else {
		stg.setItem('weatherapi', weatherKey)
		alert(`Server change to ${weatherKey} Please restart app`)
	}
}

/*****************************************************/
//                 Calling Functions 				   		//
/***************************************************/

getsyshost()
getNotificationHost()

//Standard Bank Ltd.
