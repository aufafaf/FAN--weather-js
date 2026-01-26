const API_KEY = "95858a8993ce99df6fd91d338fbb67c0";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

const inputForm = document.getElementById("input-form");
const inputButton = document.getElementById("search-btn");
const loading = document.getElementById("loading");
const error = document.getElementById("error");
const weather = document.getElementById("displayWeather");

console.log("input form :", inputForm);
console.log("search button :", inputButton);
console.log("loading :", loading);
console.log("error :", error);
console.log("weather :", weather);

const weatherForm = document.getElementById("form");

weatherForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const city = inputForm.value.trim();

  if (!city) {
    error.textContent = "Nama kota tidak boleh kosong";
    error.classList.remove("hidden");
    return;
  }

  error.classList.add("hidden");
  weather.classList.add("hidden");

  loading.classList.remove("hidden");

  console.log("Kota yang dicari:", city);

  setTimeout(() => {
    loading.classList.add("hidden");

    weather.innerHTML = `
      <div class="weather-item">Kota: ${city}</div>
      <div class="weather-item">Status: (dummy data)</div>
    `;
    weather.classList.remove("hidden");
  }, 1000);
});
