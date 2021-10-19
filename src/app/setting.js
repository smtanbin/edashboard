const stg = window.localStorage
let host = localStorage.getItem('host')

// const package

// const scriptLink = () => {
// 	if (!host) {
// 		const setting = require('../init.json')
// 		stg.setItem('host', setting.host)
// 	} else {
// 		document.getElementById('script').innerHTML = `<script src="${host}/app/link.js"></script>`
// 	}
// }

const getHost = () => {
	if (!host) {
		const setting = require('../init.json')
		stg.setItem('host', setting.host)
		document.getElementById('ipaddress').placeholder = `Current host ${host}`
	} else {
		document.getElementById('ipaddress').placeholder = `Current host ${host}`
	}
}

const setHost = () => {
	hostvalue = document.getElementById('ipaddress').value
	if (!hostvalue) alert('Please input host url')
	else {
		stg.setItem('host', hostvalue)

		alert(`Server change to ${hostvalue} Please restart app`)
	}
}
const reSetHost = () => {
	const setting = require('../init.json')
	stg.setItem('host', setting.host)
	alert(`Server change to default Please restart app`)
}
