const arch = () => {
	const os = require('os')
	return os.arch()
}
const exe = require('child_process').exec
const web = window.open

shortcutCall = (x86,x64) => {
	console.log(x86)
	console.log(x64)
	var exec = require('child_process').exec
	if (arch() === 'x64') x64
	else x86
}








// contact & sidebar
const delay = (ms) => new Promise((res) => setTimeout(res, ms))
const openContactNav = async () => {
	document.getElementById('navContact').style.display = 'block'
	document.getElementById('navMsg').style.display = 'none'

	// Wait for animation
	await delay(300)
	const res = await axios({
		url,
		method         : 'get',
		headers        : {
			accept                      :
				'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
			'accept-language'           : 'en',
			'cache-control'             : 'max-age=0',
			'upgrade-insecure-requests' : '1'
		},
		referrerPolicy : 'strict-origin-when-cross-origin',
		mode           : 'cors',
		credentials    : 'include'
	})
	const contacts = res.data
	document.getElementById('contacts').innerHTML = `
	<thead>
  <tr>
	<th>Off Name</th>
	<th>Sip Ext</th>
	<th>Sip Desk</th>
	<th>Sip Name</th>
  </tr>
  </thead>
	<tbody id="contacts" class="overflow-y: auto;
   display: block;
   max-height: 10em;">   
	</tbody>
	`

	contacts.map(({ off_name, sip_name, sip_desk, sip_ext }) => {
		document.getElementById('contacts').innerHTML += `<tr>
			<td>${off_name}</td>
			<td>${sip_ext}</td>
			<td>${sip_desk}</td>
			<td>${sip_name}</td>
		</tr>`
	})

	document.getElementById('conLoading').remove()
}
const closeContactNav = () => {
	document.getElementById('navContact').style.display = 'none'
}
const axios = require('axios')
// axios is alternative of fatch
const url = 'http://192.168.201.88/all_ip_phone.php'
// contact api link

// search function for contact
function searchCon() {
	var input, UpperCasefilter, table, tr, td, i, txtValue
	input = document.getElementById('searchContact')
	UpperCasefilter = input.value.toUpperCase()
	table = document.getElementById('contacts')
	tr = table.getElementsByTagName('tr')
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName('td')[0]
		if (td) {
			txtValue = td.textContent || td.innerText
			if (txtValue.toUpperCase().indexOf(UpperCasefilter) > -1) {
				tr[i].style.display = ''
			} else {
				tr[i].style.display = 'none'
			}
		}
	}
}
// navbar

function closeNav() {
	document.getElementById('Sidenav').style.width = '0'
}

function notificationIcon(payload) {
	var count = Object.keys(payload).length
	document.getElementById('chatCount').setAttribute('data-badge', `${count}`)
}

const openMsgNav = () => {
	document.getElementById('navMsg').style.display = 'block'
	closeContactNav()
}
const closeMsgNav = () => {
	document.getElementById('navMsg').style.display = 'none'
}

// msgReload = () => {
// 	msgNotification(0)
// 	msgNotification(rmassagepayload)
// }

// setTimeout(() => msgReload(), 300)

// msgNotification = (payload) => {
// 	const count = Object.keys(payload).length
// 	payload.map((list) => {
// 		const { body, sender, time } = list
// 		if (count === 0) {
// 			document.getElementById('noMsg').style.display = 'block'
// 		} else {
// 			document.getElementById('noMsg').style.display = 'none'
// 			document.getElementById('notificationWrapper').innerHTML += `<div class="card">
//       <div class="card-header">
//         <div class="card-title h5 text-primary">${sender}</div>
//         <div class="card-subtitle text-gray">${time}</div>
//       </div>
//       <div class="card-body">
//       ${body}
//       </div>
//     </div>
//     <br>
//     `
// 			payload = null
// 		}
// 	})
// }

navQuickLink = (payload) => {
	document.getElementsByTagName('head').innerHTML = `<meta http-equiv="refresh" content="300">`

	// var count = Object.keys(payload).length
	payload.map((list) => {
		const { titel, url } = list
		document.getElementById('quicklink').innerHTML += `<li class="menu-item" >
			<a href="${url}" target='blank'>
			  ${titel}
			</a>
			</li>`
		payload = null
	})
}

// appButtonListOne = (payload, titel) => {
// 	var count = Object.keys(payload).length
// 	if (count != 0) {
// 		document.getElementById('rowOneTitel').innerHTML =
// 			titel.substring(0, 1).toUpperCase() + titel.substring(1).toLowerCase()
// 		payload.map((list) => {
// 			const { name, func, className } = list
// 			document.getElementById(
// 				'rowOne'
// 			).innerHTML += `<button class="btn ${className}" onclick="shortcutCall(${x86,x64})">${Titel}</button>`
// 		})
// 	}
// }
appButtonListTwo = (payload, titel) => {
	var count = Object.keys(payload).length
	if (count != 0) {
		document.getElementById('rowTwoTitel').innerHTML =
			titel.substring(0, 1).toUpperCase() + titel.substring(1).toLowerCase()
		payload.map((list) => {
			const { name, func, className } = list
			document.getElementById(
				'rowTwo'
			).innerHTML += `<button class="btn ${className}" onclick="${func}">${name}</button>`
		})
	}
}

appButtonListThree = (payload, titel) => {
	var count = Object.keys(payload).length
	if (count != 0) {
		document.getElementById('rowThreeTitel').innerHTML =
			titel.substring(0, 1).toUpperCase() + titel.substring(1).toLowerCase()
		payload.map((list) => {
			const { name, func, className } = list
			document.getElementById(
				'rowThree'
			).innerHTML += `<button class="btn ${className}" onclick="${func}">${name}</button>`
		})
	}
}

appButtonListFour = (payload, titel) => {
	var count = Object.keys(payload).length
	if (count != 0) {
		document.getElementById('rowFourTitel').innerHTML =
			titel.substring(0, 1).toUpperCase() + titel.substring(1).toLowerCase()
		payload.map((list) => {
			const { name, func, className } = list
			document.getElementById(
				'rowFour'
			).innerHTML += `<button class="btn ${className}" onclick="${func}">${name}</button>`
		})
	}
	appButtonListFive = (payload, titel) => {
		var count = Object.keys(payload).length
		if (count != 0) {
			document.getElementById('rowFiveTitel').innerHTML =
				titel.substring(0, 1).toUpperCase() + titel.substring(1).toLowerCase()
			payload.map((list) => {
				const { name, func, className } = list
				document.getElementById(
					'rowFive'
				).innerHTML += `<button class="btn ${className}" onclick="${func}">${name}</button>`
			})
		}
	}
}
appButtonListSix = (payload, titel) => {
	var count = Object.keys(payload).length
	if (count != 0) {
		document.getElementById('rowSixTitel').innerHTML =
			titel.substring(0, 1).toUpperCase() + titel.substring(1).toLowerCase()
		payload.map((list) => {
			const { name, func, className } = list
			document.getElementById(
				'rowSix'
			).innerHTML += `<button class="btn ${className}" onclick="${func}">${name}</button>`
		})
	}
}

const removeLoading = async () => {
	await delay(3)
	document.getElementById('loading').remove()
}


appButtonListOne = (payload) => {
	var count = Object.keys(payload).length
	if (count != 0) {
		payload.map((titel) => {
			const { catagory} = titel
			document.getElementById('rowOneTitel').innerHTML =
			catagory.substring(0, 1).toUpperCase() + catagory.substring(1).toLowerCase()
			
		})
		payload.map((list) => {
			const { catagory,titel, x86,x64, className } = list	
			
			document.getElementById(
				'rowOne'
			).innerHTML += `<button class="btn ${className}" onclick="() => shortcutCall(${x86},${x64})">${titel}</button>`
		})
}
}


const btndata = async () => {
	const url = `http://localhost:4000/getbtn`
	 
	fetch(url)
	  .then((response) => response.json())
	  .then((data) => {console.log(data)
	  appButtonListOne(data)
	   })
	
	}

btndata()

openMsgNav()
// msgNotification(rmassagepayload)
notificationIcon(0)
navQuickLink(DropdownList)
// appButtonListOne(BankingAppPayload, 'Application')
appButtonListTwo(cashPayload, 'cash')
appButtonListThree(remittancePayload, 'remittance')
appButtonListFour(GBPayload, 'Genaral Banking')
appButtonListFive(invPayload, 'Investment')
appButtonListSix(otherPayload, 'Other')
removeLoading()
