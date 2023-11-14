var apiKey = "3c71e146acae833c878e6418b7536759";

function searchWeather() {
    var cityInput = document.getElementById("cityInput").value;
    fetchWeatherData(cityInput);
}

async function fetchWeatherData(city) {

}

function displayForecast(data) {
    try (
       var currentWeather = await fetch(apiKey);
       var forecastWeather = await fetch(apiKey);
    )

}

function addToSearchHistory(city) {

}