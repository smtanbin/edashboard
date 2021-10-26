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

/*SEARCH BY USING A CITY NAME (e.g. athens) OR A COMMA-SEPARATED CITY NAME ALONG WITH THE COUNTRY CODE (e.g. athens,gr)*/
const form = document.querySelector('.top-banner form')
const input = document.querySelector('.top-banner input')
const msg = document.querySelector('.top-banner .msg')
const list = document.querySelector('.ajax-section .cities')
/*SUBSCRIBE HERE FOR API KEY: https://home.openweathermap.org/users/sign_up*/
const apiKey = '4d8fb5b93d4af21d66a2948710284366'
// const apiKey = 'ba700996c9b5d5f5e8e44cf64fcc8992'
form.addEventListener('submit', (e) => {
	e.preventDefault()
	let inputVal = input.value

	//check if there's already a city
	const listItems = list.querySelectorAll('.ajax-section .city')
	const listItemsArray = Array.from(listItems)

	if (listItemsArray.length > 0) {
		const filteredArray = listItemsArray.filter((el) => {
			let content = ''
			//athens,gr
			if (inputVal.includes(',')) {
				//athens,grrrrrr->invalid country code, so we keep only the first part of inputVal
				if (inputVal.split(',')[1].length > 2) {
					inputVal = inputVal.split(',')[0]
					content = el.querySelector('.city-name span').textContent.toLowerCase()
				} else {
					content = el.querySelector('.city-name').dataset.name.toLowerCase()
				}
			} else {
				//athens
				content = el.querySelector('.city-name span').textContent.toLowerCase()
			}
			return content == inputVal.toLowerCase()
		})

		if (filteredArray.length > 0) {
			msg.textContent = `You already know the weather for ${filteredArray[0].querySelector('.city-name span')
				.textContent} ...otherwise be more specific by providing the country code as well 😉`
			form.reset()
			input.focus()
			return
		}
	}

	//ajax here
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`

	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			const { main, name, sys, weather } = data
			const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]['icon']}.svg`

			const div = document.createElement('div')
			div.classList.add('city')
			const markup =
				// 		`<h5 class="city-name" data-name="${name},${sys.country}">
				//       <span>${name}</span><sup>${sys.country}</sup>

				//     </h5><span class="city-temp">${Math.round(main.temp)}<sup>°C</sup></span><figcaption>${weather[0][
				// 			'description'
				// 		]}</figcaption>
				// 	<figure>
				// 	<img class="city-icon col-4" src="${icon}" alt="${weather[0]['description']}"
				//   </figure>
				//   `
				`<div class="card-subtitle text-gray">
				<span>${name}</span><sup>${sys.country}</sup></div>
				
				<span class="city-temp">${Math.round(main.temp)}<sup>°C</sup></span>
				<figcaption>${weather[0]['description']}</figcaption>
				 <div class="card-image">
				 <img src="${icon}" alt="${weather[0]['description']}" class="img-responsive">
				 </div>`

			li.innerHTML = markup
			list.appendChild(li)
		})
		.catch(() => {
			msg.textContent = 'Please search for a valid city 😩'
		})

	msg.textContent = ''
	form.reset()
	input.focus()
})

// location
const getLocation = require('electron-get-location')
;async () => {
	console.log(await getLocation())
	//=> 2.3455,34,33122
}

setInterval(time, 1000)
getDate()
getuser()
getip()
gethost()
getos()
getarch()
