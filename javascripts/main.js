console.log('This would be the main JS file.');

var initialize = function() {
  var gpsDataObj = [];
  for (var i=0; i < gpsData.length; i++) {
    gpsDataObj.push(gpsData[i].split(','));
  }

  var myLatlng = new google.maps.LatLng(gpsDataObj[0][1],gpsDataObj[0][2]);
  var mapOptions = {
    zoom: 6,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

  for (var j=0; j<gpsDataObj.length; j++) {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(gpsDataObj[j][1],gpsDataObj[j][2]),
      title:"Vehicle ID: " + gpsDataObj[j][0] + ", Speed: " + gpsDataObj[j][4] + "kmph"
    });
    // To add the marker to the map, call setMap();
    marker.setMap(map);
  }

  // Mapbox map
  L.mapbox.accessToken = 'pk.eyJ1Ijoic2FuamF5cG9qbyIsImEiOiJYcGVzdDk4In0.lcVPF6zqBpDlEc7Sbwmv3A';
  var mapBox = L.mapbox.map('mapbox-canvas', 'sanjaypojo.jgl9ojan')
    .setView([gpsDataObj[0][1],gpsDataObj[0][2]], 6);

  for (var k=0; k<gpsDataObj.length; k++) {
    marker = L.marker([gpsDataObj[k][1],gpsDataObj[k][2]], {
      icon: L.mapbox.marker.icon({
        'marker-color': '#f86767'
      })
    }).addTo(mapBox);
  }
}

google.maps.event.addDomListener(window, 'load', initialize);
