
let latitude = document.getElementById('latitude');
let longitude = document.getElementById('longitude');

var map; // essa variavel map foi criada para atualizar o mapa caso mude de localização e recarregue o mapa.
console.log(map);

function success(pos){
    console.log(pos.coords.latitude, pos.coords.longitude);
    latitude.textContent= `Latitude: ${pos.coords.latitude}`;
    longitude.textContent= `Longitude: ${pos.coords.longitude}`;

    //esse If Else significa Se a variavel MAP não tem nenhum valor ainda, ai sim ela cria um novo mapa
    if (map === undefined){
        map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 13);
    } else { //se a variavel MAP ja tiver um valor, ela removera informação
        map.remove();
        map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 13);
    }// o parametro 13 é o nivel de zoom, quanto maior, mais aproximado é a localização

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { //tileLayer esta dando forma ao mapa que puxamos da biblioteca openstreetmap
       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(map) // marker é o pontinho do mapa
    .bindPopup('Você está aqui')
    .openPopup();

}

function error(err){
    console.log(err);
}


var watchID = navigator.geolocation.watchPosition(success, error, {
    enableHighAccuracy: true, //enablehigth é uma função de mais precisão
    timeout: 5000 // timeout é a função de tempo de espera que o navegador deve ter
});
