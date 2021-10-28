/****************************************************
 * Module: Widget.js
 * Type: Vanila JavaScript
 * Author: Tanbin Hassan Bappi
 * Date: Oct 2021
 * Description:
 ***************************************************/

/*
Variable Declaration
*/
const publicIp = require("public-ip")
const geoip = require("geoip-lite")
const os = require("os")

/*
Widgets Time part
*/

//this function responsible for Date
getDate = () => {
  let date_ob = new Date()
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]
  let date = date_ob.getDate()
  let month = date_ob.toLocaleString("default", { month: "long" })
  let year = date_ob.getFullYear()
  const output = days[date_ob.getDay()] + " " + month + " " + date + ", " + year
  return (document.getElementById("dt").innerHTML = output)
}

// this function responsible for live clock
time = () => {
  const d = new Date()
  const s = d.getSeconds()
  const m = d.getMinutes()
  const fh = d.getHours()
  const h = (d.getHours() + 24) % 12 || 12
  let period = "AM"

  if (fh > 12) {
    period = "PM"
  }
  output =
    ("0" + h).substr(-2) +
    ":" +
    ("0" + m).substr(-2) +
    ":" +
    ("0" + s).substr(-2)

  return (document.getElementById(
    "tm"
  ).innerHTML = `<time class="text-large">${output}<sup>${period}</sup></time>`)
}

/**********************************************************************
Widgets Weather
**********************************************************************/

/*SUBSCRIBE HERE FOR API KEY: https://home.openweathermap.org/users/sign_up*/
/* Original Key 
const apiKey = '4d8fb5b93d4af21d66a2948710284366'
*/
let apiKey = window.localStorage.getItem("weatherapi")
// const weatherAPI = (apiKey,lat,lon) => {
const weatherAPI = async (apiKey) => {
  const geo = geoip.lookup(await publicIp.v4())
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${geo.city}&appid=${apiKey}&units=metric`
  // const url = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("weather").innerHTML =
        // carasol version
        //       `<div class="columns">
        // <div class="column">
        // <h3>${data.name}</h3>
        // <div class="column">
        //   <h3>${Math.round(data.main.temp)}
        //     <sup>°C</sup>
        //     <br>
        //     <h5 class="text-gray text-uppercase">${data.weather[0].main}</h5>
        //   </h3>
        //   <span class="text-small float-left">Feels like ${Math.round(
        //     data.main.feels_like
        //   )}<sup>°C</sup></span>
        //   <br>
        //   <div class="divider"></div><span class="text-error text-small float-left">Max ${
        //     data.main.temp_max
        //   }<sup>°C</sup></span>
        //   <br><span class="text-success text-small float-left">Min ${
        //     data.main.temp_min
        //   }<sup>°C</sup></span>
        //   </div>
        // </div>
        // <div class="column">
        // <img style="height: 100px;" src="./resources/img/weather/${
        //         data.weather[0].icon
        //       }.svg" alt="Icon" class="img-responsive">
        //       <div class="column">
        //       <span class="text-small float-left">Humidity :${
        //         data.main.humidity
        //       }%</span>
        //       <span class="text-small float-left">Pressure :${
        //         data.main.pressure
        //       }hPa</span>
        //       <span class="text-small float-left">Wind Speed :${
        //         data.wind.speed
        //       } m/s</span>
        //       <span class="text-small float-left">Visibility :${
        //         data.main.visibility
        //       } m/s</span>
        //       </div>
        // </div>
        // </div>`

        // widget version

        document.getElementById("weather").innerHTML = `<br>
      <div class="card-subtitle">
      	<h3>${data.name}</h3>
      </div>

      <div class="card-body" >
      	<div class="columns col-12">
      		<div class="column">
      			<h3>${Math.round(data.main.temp)}
      				<sup>°C</sup>
      				<br>
      				<h5 class="text-gray text-uppercase">${data.weather[0].main}</h5>
      			</h3>

      			<span class="text-small float-left">Feels like ${Math.round(
              data.main.feels_like
            )}<sup>°C</sup></span>

      			<br>
      			<div class="divider"></div><span class="text-error text-small float-left">Max ${
              data.main.temp_max
            }<sup>°C</sup></span>
      			<br><span class="text-success text-small float-left">Min ${
              data.main.temp_min
            }<sup>°C</sup></span>
      			</div>
      		<div class="column">
      		<img style="height: 80px;" src="./resources/img/weather/${
            data.weather[0].icon
          }.svg" alt="Icon" class="img-responsive">
      		<span class="text-small float-left">Humidity ${data.main.humidity}%</span>
      		<span class="text-small float-left">Pressure ${
            data.main.pressure
          }hPa</span>
      		<span class="text-small float-left">Wind Speed ${
            data.wind.speed
          } m/s</span>
      		<span class="text-small float-left">Visibility ${
            data.main.visibility
          } m/s</span>
      		</div>
      	</div>
      	</div>
      	<div class="card-footer">
      		</div>
      </div>`
    })
}
async function getWeather(apiKey) {
  await weatherAPI(apiKey)
}

/*
Widgets Computer Info function
*/

// Get current device local ip
getip = () => {
  const interfaces = os.networkInterfaces()
  const addresses = []
  for (const k in interfaces) {
    for (const k2 in interfaces[k]) {
      const address = interfaces[k][k2]
      if (address.family === "IPv4" && !address.internal) {
        addresses.push(address.address)
      }
    }
  }
  return (document.getElementById("ip").innerHTML = addresses)
}

// Get current device host address
gethost = () => {
  const os = require("os")
  const output = os.hostname()
  return (document.getElementById("host").innerHTML = output)
}

// Get current device Operting System
getos = () => {
  const os = require("os")
  const output = os.version()
  return (document.getElementById("osinfo").innerHTML = output)
}
// Get current device Operting Architucher
getarch = () => {
  const os = require("os")
  // const output = os.arch()
  if (os.arch() == "x64") {
    output = "64-bit Architucher"
  } else if (os.arch() == "arm") {
    output = "ARM Architucher"
  } else {
    output = "32-bit Architucher"
  }
  return (document.getElementById("arch").innerHTML = output)
}
// Get current user
getuser = () => {
  const os = require("os")
  const output = os.userInfo().username
  return (document.getElementById("user").innerHTML = output)
}

/*
Widgets Age Calculator function
*/

findage = () => {
  const from = new Date(document.getElementById("fromdate").value)
  console.log(from)
  const to = new Date(document.getElementById("todate").value)
  console.log(to)
  if (from == null || from == "" || to == null || to == "") {
    console.log("please")
    return (document.getElementById("result").innerHTML =
      "Choose a date please!")
  } else {
    const age = to.getFullYear() - from.getFullYear()

    return (document.getElementById(
      "result"
    ).innerHTML = `Age is ${age} years. `)
  }
}

/*
Widgets EMI Calculator function
*/

Calculate = () => {
  // Extracting value in the amount
  // section in the constiable
  const amount = document.querySelector("#amount").value
  // Extracting value in the interest
  // rate section in the constiable
  const rate = document.querySelector("#rate").value
  // Extracting value in the months
  // section in the constiable
  const months = document.querySelector("#months").value
  // Calculating interest per month
  const interest = (amount * (rate * 0.01)) / months
  // Calculating total payment
  const total = (amount / months + interest).toFixed(2)
  document.querySelector("#total").innerHTML = "EMI: " + total + " Taka"
}

/*
Widgets Dropdown function
*/
document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]")
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return

  let currentDropdown
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]")
    currentDropdown.classList.toggle("active")
  }
  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    if (dropdown === currentDropdown) return
    dropdown.classList.remove("active")
  })
})

getWeather(apiKey)
setInterval(time, 1000)
getDate()
getuser()
getip()
gethost()
getos()
getarch()

// Standard Bank Ltd.
