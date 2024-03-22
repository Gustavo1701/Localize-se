 let latitude = document.getElementById('latitude');//{
 let longitude = document.getElementById('longitude');//{
    // constructor(latitude,longitude);{
    //    this.latitude = latitude;
    //    this.longitude = longitude;
    //}
//}
//let h3 = document.querySelector('h3');

function success(pos){
    console.log(pos.coords.latitude, pos.coords.longitude);
    latitude.textContent= `Latitude: ${pos.coords.latitude}`;
    longitude.textContent= `Longitude: ${pos.coords.longitude}`;
    
    // h3.textContent= `Longitude: ${pos.coords.longitude}`;
}

function error(err){
    console.log(err);
}

var watchID = navigator.geolocation.watchPosition(success, error, {
    enableHighAccuracy: true,
    timeout: 5000
});