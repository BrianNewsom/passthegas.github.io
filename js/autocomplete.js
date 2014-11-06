function initializeACStart() {
  var start = /** @type {HTMLInputElement} */(
      document.getElementById('start'));

  var autocomplete = new google.maps.places.Autocomplete(start);
  //autocomplete.setType('address');

  var infowindow = new google.maps.InfoWindow();

  google.maps.event.addListener(autocomplete, 'place_changed', function() {
    infowindow.close();
    var place = autocomplete.getPlace();

    var address = '';
    if (place.address_components) {
      address = [
        (place.address_components[0] && place.address_components[0].short_name || ''),
        (place.address_components[1] && place.address_components[1].short_name || ''),
        (place.address_components[2] && place.address_components[2].short_name || '')
      ].join(' ');
    }

    infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
    infowindow.open(map, marker);
  });

}

function initializeACEnd() {
  var end = /** @type {HTMLInputElement} */(
      document.getElementById('end'));

  var autocomplete = new google.maps.places.Autocomplete(end);
  //autocomplete.setType('address');

  var infowindow = new google.maps.InfoWindow();

  google.maps.event.addListener(autocomplete, 'place_changed', function() {
    infowindow.close();
    var place = autocomplete.getPlace();

    var address = '';
    if (place.address_components) {
      address = [
        (place.address_components[0] && place.address_components[0].short_name || ''),
        (place.address_components[1] && place.address_components[1].short_name || ''),
        (place.address_components[2] && place.address_components[2].short_name || '')
      ].join(' ');
    }

    infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
    infowindow.open(map, marker);
  });

}


google.maps.event.addDomListener(window, 'load', initializeACStart);
google.maps.event.addDomListener(window, 'load', initializeACEnd);