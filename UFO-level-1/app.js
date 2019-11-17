// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// 1) Show
// console.log(data);

// 2) Go through data
data.forEach(function(mission){
	console.log(mission);
	
});
// 3) Append a table row
data.forEach(function(mission){
	console.log(mission);
	var row = tbody.append("tr");
});

// 4) Show 'object.entries'

 data.forEach(function(mission) {
   console.log(mission);
   var row = tbody.append("tr");

   Object.entries(mission).forEach(function([key, value]) {
     console.log(key, value);
   });
 });
 
// 5) Append data
data.forEach(function(mission){
	console.log(mission);
	var row = tbody.append("tr");
	Object.entries(mission).forEach(function([key,value]){
		console.log(key,value);
	// append  cell to the row
	var cell = row.append("td");
	cell.text(value);
	});
})

// 6) Listen and filter for Date
function buttonClick() {
	d3.event.preventDefault();
	 let date = d3.select("#datetime").property("value");
	 let filteredData = tableData;
	 if (date) {
	   filteredData = filteredData.filter(row => row.datetime === date);
	 }
	 mission(filteredData);
   }
   d3.selectAll("#filter-btn").on("click", buttonClick);
