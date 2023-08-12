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
    { name: "Jerusalem", lat: 31.784482, lng: 35.212371 },
    { name: "Tel Aviv", lat: 32.077275, lng: 34.773655 },
    { name: "Haifa", lat: 32.802092, lng: 34.987301 },
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
