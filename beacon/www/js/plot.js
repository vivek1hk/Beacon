var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


function plotUserOnMap()
{
L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('User was plotted')
    .openPopup();
  }
