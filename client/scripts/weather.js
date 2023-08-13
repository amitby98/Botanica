const apiKey = "a54684cb93ddf0cef290baf403454258";
const defaultCity = "Tel Aviv";

function getWeather(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  $.ajax({
    url: apiUrl,
    method: "GET",
    success: function (data) {
      const temperature = data.main.temp;
      const weatherDescription = data.weather[0].description;
      const iconCode = data.weather[0].icon;
      const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
      $("#weather-info").html(`
        <p>Temperature: ${temperature} °C</p>
        <p>Weather: ${weatherDescription}</p>
        <img src="${iconUrl}" alt="Weather Icon" />
      `);
    },
    error: function (error) {
      console.error("Error fetching weather data:", error);
    },
  });
}
$(document).ready(function () {
  getWeather(defaultCity);
});
