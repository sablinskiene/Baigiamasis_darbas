"use strict"

//header

let menuTrigger = document.getElementById("mobile-menu-trigger");
let mobileMenu = document.querySelector("header nav");

menuTrigger.addEventListener('click', function() {
  this.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});


//Weather

//my APIkey: 376aa1c5de2a9b773884484c9d294823

const url = "https://api.openweathermap.org/data/2.5/weather?q=Vilnius&units=metric&appid=376aa1c5de2a9b773884484c9d294823";
const weatherElement = document.getElementById("weather-in-celsius");
function getCurrentWeatherInCelsius() {
    const http = new XMLHttpRequest();
    http.open("GET", url);
    http.addEventListener('load', function() {
        const response = JSON.parse(http.response);
        const temperature = response.main.temp;

        if (temperature > 0) {
            weatherElement.innerText = "+" + temperature.toFixed(0);
        } else {
            weatherElement.innerText = temperature.toFixed(0);
        }
    })
    http.send();
}
window.addEventListener('load', getCurrentWeatherInCelsius)