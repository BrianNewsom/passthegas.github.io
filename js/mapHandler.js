//var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
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
function calcDistance() {
	var start = document.getElementById('start').value;
	var end = document.getElementById('end').value;
	var request = {
		origin:start,
		destination:end,
		travelMode: google.maps.TravelMode.DRIVING
	};
	directionsService.route(request, function(response, status) {
		if (status == google.maps.DirectionsStatus.OK) {
			var totalDistance = 0;
			var legs = response.routes[0].legs;
			for (var i=0; i < legs.length; ++i){
				totalDistance += legs[i].distance.value;
			}
			//$('#distanceOutput').text('test');//totalDistance);
			var distance = document.getElementById('distance');
			distance.value = Math.round(totalDistance / 1000);
		}
	});
}	

//google.maps.event.addDomListener(window, 'load', initialize);
