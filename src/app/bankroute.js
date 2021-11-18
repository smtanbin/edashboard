
function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[6];
      td = tr[i].getElementsByTagName("td")[5];
      td = tr[i].getElementsByTagName("td")[3];
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  const createTable = () => {
	const payload = require('./routingdata.js')

	payload.map((list) => {
		const { Bank_code, Bank_Name, Dist_code, Dist_Name, Branch_code, Branch_Name, Routing_No } = list
		document.getElementById('routingInfo').innerHTML += `<tr>
            <td>${Bank_code}</td>
            <td>${Bank_Name}</td>
            <td>${Dist_code}</td>
            <td>${Dist_Name}</td>
            <td>${Branch_code}</td>
            <td>${Branch_Name}</td>
            <td>${Routing_No}</td>
            </tr>`
	})
}

createTable()
const data = require('./bankroute.json')
console.log(data)