//////// Map Function
let map;
let infowindow;

async function initMap() {
  const position = { lat: 31.24, lng: 35.04 };

  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  map = new Map(document.getElementById("map"), {
    zoom: 6,
    center: position,
    mapId: "my-project-botanica-395208",
  });

  const response = await fetch("http://localhost:3000/api/addresses");
  const cities = await response.json();

  infowindow = new google.maps.InfoWindow();

  cities.forEach(city => {
    const marker = new AdvancedMarkerElement({
      map: map,
      position: { lat: city.lat, lng: city.lng },
      title: `Botanica shop, ${city.name}`,
    });
  });
}
initMap();
