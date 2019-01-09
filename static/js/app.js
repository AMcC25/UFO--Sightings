// from data.js
// Get references to the tbody element, input field and button
var tbody = document.querySelector("tbody");
var dateIn = document.querySelector("#datetime");
var searchButton = document.querySelector("#filter-btn");

// Add event listener to the search button, call handleSearchClick
searchButton.addEventListener("click", function(event) {
  handleSearchButtonClick(event)
});

// Set ufoData to data
var ufoData = data;

// renderTable renders the ufoData to the tbody
function renderTable() {
    tbody.innerHTML = "";
   
    for (var i = 0; i < ufoData.length; i++) {
  
      var sightings = ufoData[i];
      var columns = Object.keys(sightings);
      
      var row = tbody.insertRow(i);
      for (var j = 0; j < columns.length; j++) {
        
        var column = columns[j];
        var cell = row.insertCell(j);
        cell.innerText = sightings[column];
      }
    }
  }
  
function handleSearchButtonClick(event) {
    event.preventDefault();

    var dateResults = dateIn.value.trim();
    
    if (dateResults.length != 0) {
        ufoData = data.filter(function(sightings) {
            var sightingsDate = sightings.datetime;
            return sightingsDate === dateResults;
        });
    }

    renderTable();
}
// Render the table for the first time on page load
renderTable();