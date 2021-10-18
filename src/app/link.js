const linkFile = [
	{
		url : 'http://10.140.8.127/edash/src/app/sampledata.js'
	},
	{
		url : 'http://10.140.8.127/edash/src/app/remoteApp.js'
	},
	{
		url : 'http://10.140.8.127/edash/src/app/function.js'
	}
]

createscripttag = (payload) => {
	payload.map((list) => {
		const { url } = list
		document.getElementById('scripts').innerHTML += `<script src="${url}"></script>`
	})
	payload = null
}
createscripttag(linkFile)
