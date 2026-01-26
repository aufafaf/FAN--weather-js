const fetchWeather = async (city) => {
  try {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Jakarta&appid=API_KEY&units=metric",
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    const temp = data?.main?.temp;
    console.log(`Temperature: ${temp}K`);
  } catch (error) {
    console.log("Error:", error.message);
  }
};
