const publicIp = require('public-ip');
const geoip = require('geoip-lite');
const os = require('os')



getip = () => {
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


/*SUBSCRIBE HERE FOR API KEY: https://home.openweathermap.org/users/sign_up*/
// const apiKey = '4d8fb5b93d4af21d66a2948710284366'
const apiKey = 'ba700996c9b5d5f5e8e44cf64fcc8992'


// const weatherAPI = (apiKey,lat,lon) => {
const weatherAPI = async (apiKey) => {
	//ajax here
	const url = `https://api.openweathermap.org/data/2.5/weather?q=Dhaka&appid=${apiKey}&units=metric`
	// const url = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`

	fetch(url).then((response) => response.json()).then((data) => {
		// const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`
		// const icon =`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
		console.log(data)
		// const { main, name, sys, weather } = data
		document.getElementById('weather').innerHTML =
			`<br>
			<div class="card-subtitle">
				<span>${data.name}</span>
				<sup>${data.sys.country}</sup>
			</div>

			<div class="card-body" >
				<div class="columns col-12">
					<div class="column">
						<h3>${Math.round(data.main.temp)}
							<sup>°C</sup>
							<br>
							<h5 class="text-gray text-uppercase">${data.weather[0].main}</h5>
						</h3>
						
						<span class="text-small float-left">Feels like ${Math.round(data.main.feels_like)}<sup>°C</sup></span>
					
					<br>
						<span class="text-error text-small float-left">Max ${data.main.temp_max}<sup>°C</sup></span>
						<br><span class="text-success text-small float-left">Min ${data.main.temp_min}<sup>°C</sup></span>
						</div>
					<div class="column">
					<img src="./resources/img/weather/${data.weather[0].icon}.svg" alt="Icon" class="img-responsive">
					
					<span class="text-small float-left">Humidity ${data.main.humidity}%</span>
					<span class="text-small float-left">Pressure ${data.main.pressure}hPa</span>
					<span class="text-small float-left">Wing Speed ${data.wind.speed} m/s</span>	
					<span class="text-small float-left">Visibility ${data.main.visibility} m/s</span>				
						
					</div>
				</div>
				</div>
				<div class="card-footer">

					</div>
			</div>`
	})
}

{
	/* <div class="card-image">
<img src="${data.icon}" alt="${data.weather[0]['description']}" class="img-responsive">
</div> */
}

const ip = async () => { await publicIp.v4().then(ip => { return ip }); }

console.log(ip());
// const getip = async () => {
// 	geoip.lookup(await publicIp.v4()).then((data) => data.value);

// }



// const publicip = async () => {
// 	console.log(await publicIp.v4());
// 	let x = (await publicIp.v4())
// 	return x
// }
// const ip = publicip()
// console.log(ip);
// const geo = geoip.lookup(ip);
const geo = geoip.lookup(ip());
console.log(geo);

async function getWeather(apiKey) {
	// console.log(showPosition())
	// console.log(getCurrentPosition())
	// await weatherAPI(apiKey,lat,lon)
	await weatherAPI(apiKey)
}

getWeather(apiKey)
setInterval(time, 1000)
getDate()
getuser()
getip()
gethost()
getos()
getarch()
