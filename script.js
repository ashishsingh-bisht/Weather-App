async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "YOUR_API_KEY"; // replace with your key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  document.getElementById("city").innerText = data.name;
  document.getElementById("temp").innerText = data.main.temp + " °C";
  document.getElementById("desc").innerText = data.weather[0].description;
}
