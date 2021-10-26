const stg = window.localStorage
let host = localStorage.getItem('host')
const { ipcRenderer } = require('electron')

const getSysHost = () => {
	if (!host) {
		const setting = require('../init.json')
		stg.setItem('host', setting.host)
		document.getElementById('sysHost').innerHTML = `${host}`
	} else {
		document.getElementById('sysHost').innerHTML = `${host}`
	}
}

const setSysHost = () => {
	hostvalue = document.getElementById('ipaddress').value
	if (!hostvalue) alert('Please input host url')
	else {
		stg.setItem('host', hostvalue)

		alert(`Server change to ${hostvalue} Please restart app`)
	}
}

const resetSysHost = () => {
	const setting = require('../init.json')
	stg.setItem('msgipaddress', setting.msgip)
	stg.setItem('notificationPort', setting.notificationPort)
	alert(`Server change to default Please restart app`)
}

let notificationHost = localStorage.getItem('notificationHost')
let notificationPort = localStorage.getItem('notificationPort')

const getNotificationHost = () => {
	if (!notificationHost) {
		const setting = require('../init.json')
		stg.setItem('msgipaddress', setting.msgip)
		if (!notificationPort) {
			stg.setItem('notificationPort', setting.notificationPort)
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

const setNotificationHost = () => {
	notificationHost = document.getElementById('notificationHost').value
	notificationPort = document.getElementById('notificationPort').value
	if (!notificationHost) alert('Please input with valid IP')
	else if (!notificationPort) alert('Please input with valid Port')
	else {
		stg.setItem('notificationHost', notificationHost)
		stg.setItem('notificationPort', notificationPort)

		alert(`Server change to ${notificationHost}:${notificationPort} Please restart app`)
	}
}
const resetNotificationHost = () => {
	const setting = require('../init.json')
	stg.setItem('notificationHost', setting.notificationHost)
	stg.setItem('notificationPort', setting.notificationPort)
	alert(`Server change to default Please restart app`)
}

ipcRenderer.on('message', function(event, text) {
	document.getElementById('appVersion').innerHTML = text
	document.getElementById('nodeVersion').innerHTML = text
	document.getElementById('electronVersion').innerHTML = text
})
getSysHost()
getNotificationHost()

refreshall = () => {
	getHost()
	getnotificationHost()
}
resetall = () => {
	reSetnotificationHost()
	reSetHost()
}
