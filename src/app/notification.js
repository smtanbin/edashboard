// let notificationHost = localStorage.getItem('notificationHost')
// let notificationPort = localStorage.getItem('notificationPort')

// const { io } = require('socket.io-client')
// const socket = io(notificationHost)
// socket.on('connect', () => {
// 	document.getElementById(connectionStd).innerHTML = `<div class="card">
//          <div class="card-header">
//           <div class="card-title h5 text-primary">${message.username}</div>
//           <div class="card-subtitle text-gray">${message.time}</div>
//         </div>
//         <div class="card-body">
//         ${message.text}
//         </div>
//       </div>
//       <br>`
// })

// inesilize Socket
const { io, Socket } = require('socket.io-client')

const socket = io('127.0.0.1:3000')
