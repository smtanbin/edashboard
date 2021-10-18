getip = () => {
	const os = require('os')
	const interfaces = os.networkInterfaces()
	const addresses = []
	for (const k in interfaces) {
		for (const k2 in interfaces[k]) {
			const address = interfaces[k][k2]
			if (address.family === 'IPv4' && !address.internal) {
				addresses.push(address.address)
			}
		}
	}
	return (document.getElementById('ip').innerHTML = addresses)
}

// var pjson = require('.../package.json')
// console.log(pjson.version)

gethost = () => {
	const os = require('os')
	const output = os.hostname()
	return (document.getElementById('host').innerHTML = output)
}

getos = () => {
	const os = require('os')
	const output = os.version()
	return (document.getElementById('osinfo').innerHTML = output)
}
getarch = () => {
	const os = require('os')
	// const output = os.arch()
	if (os.arch() == 'x64') {
		output = '64-bit Architucher'
	} else if (os.arch() == 'arm') {
		output = 'ARM Architucher'
	} else {
		output = '32-bit Architucher'
	}
	return (document.getElementById('arch').innerHTML = output)
}

getuser = () => {
	const os = require('os')
	const output = os.userInfo().username
	return (document.getElementById('user').innerHTML = output)
}
getDate = () => {
	let date_ob = new Date()
	let date = date_ob.getDate()
	let month = date_ob.getMonth() + 1
	let year = date_ob.getFullYear()
	const output = year + '-' + month + '-' + date
	return (document.getElementById('dt').innerHTML = output)
}

// this function responsible for live clock
time = () => {
	const d = new Date()
	const s = d.getSeconds()
	const m = d.getMinutes()
	const h = d.getHours()
	output = ('0' + h).substr(-2) + ':' + ('0' + m).substr(-2) + ':' + ('0' + s).substr(-2)
	return (document.getElementById('tm').innerHTML = output)
}

findage = () => {
	const from = new Date(document.getElementById('fromdate').value)
	console.log(from)
	const to = new Date(document.getElementById('todate').value)
	console.log(to)
	if (from == null || from == '' || to == null || to == '') {
		console.log('please')
		return (document.getElementById('result').innerHTML = 'Choose a date please!')
	} else {
		const age = to.getFullYear() - from.getFullYear()

		return (document.getElementById('result').innerHTML = `Age is ${age} years. `)
	}
}

// emiCalculator
Calculate = () => {
	// Extracting value in the amount
	// section in the constiable
	const amount = document.querySelector('#amount').value
	// Extracting value in the interest
	// rate section in the constiable
	const rate = document.querySelector('#rate').value
	// Extracting value in the months
	// section in the constiable
	const months = document.querySelector('#months').value
	// Calculating interest per month
	const interest = amount * (rate * 0.01) / months
	// Calculating total payment
	const total = (amount / months + interest).toFixed(2)
	document.querySelector('#total').innerHTML = 'EMI: ' + total + ' Taka'
}

// drop
document.addEventListener('click', (e) => {
	const isDropdownButton = e.target.matches('[data-dropdown-button]')
	if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

	let currentDropdown
	if (isDropdownButton) {
		currentDropdown = e.target.closest('[data-dropdown]')
		currentDropdown.classList.toggle('active')
	}

	document.querySelectorAll('[data-dropdown].active').forEach((dropdown) => {
		if (dropdown === currentDropdown) return
		dropdown.classList.remove('active')
	})
})

setInterval(time, 1000)
getDate()
getuser()
getip()
gethost()
getos()
getarch()
