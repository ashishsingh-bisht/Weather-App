document.addEventListener("DOMContentLoaded", () => {
  const stateDropdown = document.getElementById("stateDropdown");
  const districtDropdown = document.getElementById("districtDropdown");
  const placeDropdown = document.getElementById("placeDropdown");

  // Load States
  Object.keys(indiaLocations).forEach(state => {
    const option = document.createElement("option");
    option.value = state;
    option.textContent = state;
    stateDropdown.appendChild(option);
  });

  // When State Changes
  stateDropdown.addEventListener("change", () => {
    const state = stateDropdown.value;

    districtDropdown.innerHTML = "<option value=''>Select District</option>";
    placeDropdown.innerHTML = "<option value=''>Select Place</option>";
    placeDropdown.disabled = true;

    if (!state) {
      districtDropdown.disabled = true;
      return;
    }

    districtDropdown.disabled = false;

    Object.keys(indiaLocations[state]).forEach(district => {
      const option = document.createElement("option");
      option.value = district;
      option.textContent = district;
      districtDropdown.appendChild(option);
    });
  });

  // When District Changes
  districtDropdown.addEventListener("change", () => {
    const state = stateDropdown.value;
    const district = districtDropdown.value;

    placeDropdown.innerHTML = "<option value=''>Select Place</option>";

    if (!district) {
      placeDropdown.disabled = true;
      return;
    }

    placeDropdown.disabled = false;

    Object.keys(indiaLocations[state][district]).forEach(place => {
      const option = document.createElement("option");
      option.value = place;
      option.textContent = place;
      placeDropdown.appendChild(option);
    });
  });

  // When Place Changes
  placeDropdown.addEventListener("change", fetchWeather);
});

// Fetch Weather
async function fetchWeather() {
  const state = document.getElementById("stateDropdown").value;
  const district = document.getElementById("districtDropdown").value;
  const place = document.getElementById("placeDropdown").value;

  if (!state || !district || !place) return;

  const { lat, lon } = indiaLocations[state][district][place];
  const apiKey = "YOUR_API_KEY_HERE";

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  try {
    document.getElementById("temp").innerText = "Fetching weather...";
    document.getElementById("desc").innerText = "";

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error("Weather not found");
    }

    document.getElementById("city").innerText = data.name;
    document.getElementById("temp").innerText = `🌡 Temperature: ${data.main.temp} °C`;
    document.getElementById("desc").innerText = `🌥 Condition: ${data.weather[0].description}`;
  } catch (error) {
    document.getElementById("temp").innerText = "Error fetching weather";
    console.error(error);
  }
}
