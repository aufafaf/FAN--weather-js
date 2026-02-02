const API_KEY = "95858a8993ce99df6fd91d338fbb67c0";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

const inputForm = document.getElementById("input-form");
const inputButton = document.getElementById("search-btn");
const loading = document.getElementById("loading");
const error = document.getElementById("error");
const weather = document.getElementById("displayWeather");
const weatherForm = document.getElementById("form");

fetchweather = async (city) => {
  try {
    showLoading();
    error.classList.add("hidden");
    weather.classList.add("hidden");

    const url = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Kota tidak ditemukan");
    }

    const data = await response.json();

    displayWeather(data);
  } catch (err) {
    showError(err);
  } finally {
    hideLoading();
  }
};

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = inputForm.value.trim();

  if (!city) {
    error.textContent = "Nama Kota Salah";
    error.classList.remove("hidden");
    return;
  }

  fetchweather(city);
});

function displayWeather(data) {
  const { temp } = data.main;
  const { name } = data;
  weather.innerHTML = `
      <div class=weather-item">Kota : ${name} <div/> 
      <div class=weather-item">temperature : ${temp}^C <div/>
    `;

  weather.classList.remove("hidden");
}

function showError(err) {
  error.textContent = err.message;
  error.classList.remove("hidden");
}

function showLoading() {
  loading.classList.remove("hidden");
}

function hideLoading() {
  loading.classList.add("hidden");
}
