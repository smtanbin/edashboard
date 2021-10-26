// let notificationHost = localStorage.getItem('notificationHost')
// let notificationPort = localStorage.getItem('notificationPort')

const { io, Socket } = require('socket.io-client')

const socket = io('10.140.8.126:3000')
const user = () => {
	const os = require('os')
	return os.userInfo().username
}

// const msgEmptyState = () => {
// 	document.getElementById(notificationWrapper).replaceWith = `
//     div class="p-centered col-11">
//                       <div class="empty bg-none" id="noMsg">
//                         <div class="empty-icon bg-none">
//                           <i class="icon icon-4x icon-message"></i>
//                         </div>
//                         <p class="empty-title h5 bg-none">You have no new notification</p>
//                       </div>
//                     </div>`
// }

const msgEmptyState = () => {
	document.getElementById(notificationWrapper).replaceWith = `
    div class="p-centered col-11">
                      <div class="empty bg-none" id="noMsg">
                        <div class="empty-icon bg-none">
                          <i class="icon icon-4x icon-message"></i>
                        </div>
                        <p class="empty-title h5 bg-none">You have no new notification</p>
                      </div>
                    </div>`
}

const msgReply = () => {
	document.getElementById(msgreplyer).style.display = ''
}

const printMsg = (payout) => {
	if (!payout) msgEmptyState()
	else {
		document.getElementById(notificationWrapper).innerHTML += `

    
      <div class="tile p-2">
        <div class="tile-content">
          <p class="tile-title text-primary">${payout.sender}</p>
          <p class="tile-subtitle">${payout.body}</p>
          <small class="tile-subtitle text-success">${payout.time}</small>
        </div>
        <div class="tile-action">
          <small class="tile-subtitle">${payout.division}</small>
        </div>
      </div>`
	}
}

socket.on('connect', () => {})
