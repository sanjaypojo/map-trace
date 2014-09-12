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
}

google.maps.event.addDomListener(window, 'load', initialize);
