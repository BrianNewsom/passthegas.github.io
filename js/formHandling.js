//Javascript handler for html form element in index.html
//======================================================
//formHandling.js
//---------------
//Authors: Brian Newsom, Adrian Chen

//Date: 9/24/2014

var directionsService = new google.maps.DirectionsService();
var startGlobal;
var endGlobal;
var unitsGlobal;

//Calculate the distance by splitting the journey into its various legs and adding them together
function calcDistance(start, end, units) {
  startGlobal = start;
  endGlobal = end;
  var request = {
    origin:start,
    destination:end,
    travelMode:google.maps.TravelMode.DRIVING,
    unitSystem:google.maps.UnitSystem.METRIC
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      var meterDistance = 0;
      var legs = response.routes[0].legs;
      for (var i=0; i < legs.length; ++i){
        meterDistance += legs[i].distance.value;
      }
      var kilometerDistance = meterDistance / 1000;
      var mileDistance = toMiles(kilometerDistance);

      var distance = document.getElementById('distance');
      if ((unitsGlobal = units) == "Metric"){
        distance.value = Math.round(kilometerDistance);
        return Math.round(kilometerDistance);
      }
      else {
        distance.value = Math.round(mileDistance);
        return Math.round(mileDistance);
      }
    }
    else{
      // If an error occurred, return 0
      return 0;
    }
  });
}

//Take km as input and return miles
function toMiles(kminput){
  return kminput * .621371;
}

//Take in distance and update distance html id
function updateUnits() {
  document.getElementById('unitspgallon').innerHTML = document.getElementById('units').value + "/Gallon";
  document.getElementById('unitsdistance').innerHTML = document.getElementById('units').value;
  enterForm();
  return;
}

//Swap between Imperial and Metric systems
function changeUnits() {
  if(document.getElementById('unitbtn').innerHTML == "Imperial"){
    document.getElementById('mileage_btn').innerHTML = "km/l";
    document.getElementById('unitbtn').innerHTML = "Metric";
    document.getElementById('gas_btn').innerHTML = "per Liter";
    document.getElementById('distance_btn').innerHTML = "km";
    calcDistance(startGlobal,endGlobal,"Metric");
  }
  else {
    document.getElementById('unitbtn').innerHTML = "Imperial";
    document.getElementById('mileage_btn').innerHTML = "mi/gal";
    document.getElementById('distance_btn').innerHTML = "mi";
    document.getElementById('gas_btn').innerHTML = "per Gallon";
    calcDistance(startGlobal,endGlobal,"Imperial");
  }
}

//Helper function to retieve input values and return the price split value
function calculateCosts() {
	distance = document.getElementById('distance').value;
	mileage = document.getElementById('mileage').value;
	passengers = document.getElementById('passengers').value;
	gasPrice = document.getElementById('gasPrice').value;
	unRounded = distance/mileage * gasPrice / passengers;
	rounded = Math.round(unRounded * 100) / 100;
	return rounded;
}

//Compute calculations and generate output
function enterForm() {
  var start = document.getElementById('start').value;
  var end = document.getElementById('end').value;
  var units = document.getElementById('distance_btn').innerHTML;
  // Only call api if both exist & >0 changed since last call
  if((start && end) && ((start != startGlobal)||(end !=endGlobal)||(units != unitsGlobal))){
    calcDistance(start,end,units);
	}
  cost = calculateCosts();
	if(isFinite(cost) && cost != 0){
        $('#returnVal').text('This trip costs $' + cost + ' per person.');
        //Since we have succesful data, store in DB
        storeEntry();
    }
}

