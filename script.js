var mapOptions = {
    mapTypeId: 'satellite',
    center: new google.maps.LatLng(-36.931331, 174.669777),
    zoom: 18
};

var map = new google.maps.Map(document.getElementById("map"),
    mapOptions);

// Predefine all the paths
var paths = [];

paths['1_to_2'] = new google.maps.Polyline({
    path: [
        new google.maps.LatLng(47.656, -122.360),
        new google.maps.LatLng(47.656, -122.343),
        new google.maps.LatLng(47.690, -122.310)
    ], strokeColor: '#FF0000'
});

paths['1_to_3'] = new google.maps.Polyline({
    path: [
        new google.maps.LatLng(47.656, -122.360),
        new google.maps.LatLng(47.656, -122.343),
        new google.maps.LatLng(47.690, -122.270)
    ], strokeColor: '#FF0000'
});

paths['2_to_3'] = new google.maps.Polyline({
    path: [
        new google.maps.LatLng(47.690, -122.310),
        new google.maps.LatLng(47.690, -122.270)
    ], strokeColor: '#FF0000'
});

function drawDirections() {
    var start = 1 + document.getElementById('start').selectedIndex;
    var end = 1 + document.getElementById('end').selectedIndex;
    var i;

    if (start === end) {
        alert('Please choose different buildings');
    }
    else {
        // Hide all polylines
        for (i in paths) {
            paths[i].setOptions({ map: null });
        }

        // Show the route
        if (typeof paths['' + start + '_to_' + end] !== 'undefined') {
            paths['' + start + '_to_' + end].setOptions({ map: map });
        }
        else if (typeof paths['' + end + '_to_' + start] !== 'undefined') {
            paths['' + end + '_to_' + start].setOptions({ map: map });
        }
    }
}