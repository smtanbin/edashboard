const stg = window.localStorage
let host = localStorage.getItem('host')
const scriptLink = () => {
	if (host === null) {
		const setting = require('../init.json')
		stg.setItem('host', setting.host)
	} else getScript(host)
}
getScript = (src) => {
	document.write(`<script src=${src}/src/app/sampledata.js ></script>`)
	document.write(`<script src=${src}/src/app/remoteApp.js ></script>`)
	document.write(`<script src=${src}/src/app/function.js ></script>`)
}

scriptLink()
