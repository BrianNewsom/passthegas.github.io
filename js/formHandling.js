// formHandling.js
// Author: Brian Newsom
// Date: 9/24/2014
// Javascript handler for html form element in index.html
//var directionsDisplay;
src="./js/jquery.min.js";
var directionsService = new google.maps.DirectionsService();
var startGlobal;
var endGlobal;

//var map;
/*
function initialize() {
  directionsDisplay = new google.maps.DirectionsRenderer();
  var chicago = new google.maps.LatLng(41.850033, -87.6500523);
  var mapOptions = {
    zoom:7,
    center: chicago
  };
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  directionsDisplay.setMap(map);
}

function calcRoute() {
  var start = document.getElementById('start').value;
  var end = document.getElementById('end').value;
  var request = {
      origin:start,
      destination:end,
      travelMode: google.maps.TravelMode.DRIVING
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
}
*/
function calcDistance(start, end) {
  alert("CALLING MAPS YO");
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
      var totalDistance = 0;
      var legs = response.routes[0].legs;
      for (var i=0; i < legs.length; ++i){
        totalDistance += legs[i].distance.value;
      }
      alert("distance km" + totalDistance);

      //$('#distanceOutput').text('test');//totalDistance);
      var distance = document.getElementById('distance');
      distance.value = Math.round(totalDistance / 1000);
    }
  });
} 


$('kmbox').click(function() {
  if (($this).is(':checked')){
    alert("checked");
  } else {
    alert("UN");
  }
});
//google.maps.event.addDomListener(window, 'load', initialize);

function calculateCosts() {
	distance = document.forms["Input"]["distance"].value;
	mileage = document.forms["Input"]["mileage"].value;
	passengers = document.forms["Input"]["passengers"].value;
	gasPrice = document.forms["Input"]["gasPrice"].value;
	unRounded = distance/mileage * gasPrice / passengers; 
	rounded = Math.round(unRounded * 100) / 100;
	return rounded;
}
function enterForm() { 
  var start = document.getElementById('start').value;
  var end = document.getElementById('end').value;
  
  if (start != startGlobal || end != endGlobal)
    calcDistance(start,end);   
	cost = calculateCosts()
	if(isFinite(cost) && cost != 0)
		$('#returnVal').text('This trip costs $' + cost + ' per person.');
}

