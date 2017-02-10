let directionsMap;


function initMap() {
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;
  var directionsMap = new google.maps.Map(document.getElementById('directionsMap'), {
    zoom: 14,
    center: {lat: 37.7699298, lng: -122.4469157}
  });
  directionsDisplay.setMap(directionsMap);
  calculateAndDisplayRoute(directionsService, directionsDisplay);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  directionsService.route({
    origin: localStorage.loc,
    destination: `${localStorage.destination} SF`,
    travelMode: 'WALKING'
  }, function(response, status) {
    if (status === 'OK') {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}