document.addEventListener("DOMContentLoaded", () => {
  const stateDropdown = document.getElementById("stateDropdown");
  const districtDropdown = document.getElementById("districtDropdown");
  const placeDropdown = document.getElementById("placeDropdown");
  const weatherResult = document.getElementById("weatherResult");
  const city = document.getElementById("city");
  const temp = document.getElementById("temp");
  const desc = document.getElementById("desc");

  // Load States
  Object.keys(indiaLocations).forEach(state => {
    const option = document.createElement("option");
    option.value = state;
    option.textContent = state;
    stateDropdown.appendChild(option);
  });

  // State Change
  stateDropdown.addEventListener("change", () => {
    const state = stateDropdown.value;

    districtDropdown.innerHTML = `<option value="">Select District</option>`;
    placeDropdown.innerHTML = `<option value="">Select Place</option>`;
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

  // District Change
  districtDropdown.addEventListener("change", () => {
    const state = stateDropdown.value;
    const district = districtDropdown.value;

    placeDropdown.innerHTML = `<option value="">Select Place</option>`;

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

  // Place Change
  placeDropdown.addEventListener("change", async () => {
    const state = stateDropdown.value;
    const district = districtDropdown.value;
    const place = placeDropdown.value;

    if (!state || !district || !place) return;

    const { lat, lon } = indiaLocations[state][district][place];

    const API_KEY = "ece98ec83a6650351cf66db475256c61";

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    try {
      weatherResult.classList.remove("hidden");
      temp.textContent = "Fetching weather...";
      desc.textContent = "";

      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Weather not found");
      }

      city.textContent = data.name;
      temp.textContent = `🌡 Temperature: ${data.main.temp} °C`;
      desc.textContent = `🌥 Condition: ${data.weather[0].description}`;

    } catch (error) {
      temp.textContent = "❌ Error fetching weather";
      console.error(error);
    }
  });
});
