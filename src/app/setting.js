const stg = window.localStorage
let host = localStorage.getItem('host')

const scriptLink = () => {
	if (!host) {
		const setting = require('../init.json')
		stg.setItem('host', setting.host)
	} else {
		document.getElementById('notificationWrapper').innerHTML = `<script src="${host}/link.js"></script>`
	}
}

const gethost = () => {}
