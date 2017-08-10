var mapOptions = {
    mapTypeId: 'satellite',
    center: new google.maps.LatLng(-36.931331, 174.669777),
    zoom: 18
};
var map = new google.maps.Map(document.getElementById("map"),
    mapOptions);
var paths = [];

var place = [
    //lat, lang
    //courts
    [-36.929946, 174.670722],
    //library
    [-36.931473, 174.669062],
    //gym
    [-36.930766, 174.670630]
];

function go() {
    navigator.geolocation.getCurrentPosition(drawDirections);
}

function drawDirections(pos) {
    var start = document.getElementById('start').selectedIndex;
    var crd = pos.coords;
    var picLat = place[start][0];
    var picLng = place[start][1];

    paths['1_to_2'] = new google.maps.Polyline({
        path: [
            new google.maps.LatLng(crd.latitude, crd.longitude),
            new google.maps.LatLng(picLat, picLng)
        ], strokeColor: '#009aff'
    });
    // Show the route
    paths['1_to_2'].setOptions({ map: map });
}
