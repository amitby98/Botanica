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

  const cities = [
    { name: "Jerusalem", lat: 31.7683, lng: 35.2137 },
    { name: "Tel Aviv", lat: 32.0853, lng: 34.7818 },
    { name: "Haifa", lat: 32.794, lng: 34.9896 },
  ];

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
