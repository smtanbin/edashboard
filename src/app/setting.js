// pure javascript
// let object
// let httpRequest = new XMLHttpRequest() // asynchronous request
// httpRequest.open('GET', '../setting.json', true)
// httpRequest.send()
// httpRequest.addEventListener('readystatechange', function() {
// 	if (this.readyState === this.DONE) {
// 		// when the request has completed
// 		object = JSON.parse(this.response)
// 	}
// })
// console.log(object)

loadJSON = (callback) => {
	var xobj = new XMLHttpRequest()
	xobj.overrideMimeType('application/json')
	xobj.open('GET', '../setting.json', true)
	xobj.onreadystatechange = function() {
		if (xobj.readyState == 4 && xobj.status == '200') {
			// .open will NOT return a value but simply returns undefined in async mode so use a callback
			callback(xobj.responseText)
		}
	}
	xobj.send(null)
}
// Call to function with anonymous callback
loadJSON(function(response) {
	// Do Something with the response e.g.
	jsonresponse = JSON.parse(response)

	// Assuming json data is wrapped in square brackets as Drew suggests
	console.log(jsonresponse[0].name)
})
// Call to function with anonymous callback
const data = loadJSON(function(response) {
	jsonresponse = JSON.parse(response)
	url = jsonresponse.server

	return url
})
console.log(data)
