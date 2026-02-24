document.addEventListener("DOMContentLoaded", initApp);

function initApp() {
  const stateDropdown = document.getElementById("stateDropdown");
  const districtDropdown = document.getElementById("districtDropdown");
  const placeDropdown = document.getElementById("placeDropdown");

  const weatherSection = document.getElementById("weatherResult");
  const cityEl = document.getElementById("city");
  const tempEl = document.getElementById("temp");
  const descEl = document.getElementById("desc");

  // Hide weather initially
  weatherSection.classList.add("hidden");

  loadStates(stateDropdown);

  stateDropdown.addEventListener("change", () =>
    handleStateChange(stateDropdown, districtDropdown, placeDropdown)
  );

  districtDropdown.addEventListener("change", () =>
    handleDistrictChange(stateDropdown, districtDropdown, placeDropdown)
  );

  placeDropdown.addEventListener("change", () =>
    fetchWeather(stateDropdown, districtDropdown, placeDropdown, {
      weatherSection,
      cityEl,
      tempEl,
      descEl,
    })
  );
}

/* ---------------------------
   Load States
---------------------------- */
function loadStates(stateDropdown) {
  Object.keys(indiaLocations).forEach((state) => {
    const option = createOption(state);
    stateDropdown.appendChild(option);
  });
}

/* ---------------------------
   Handle State Change
---------------------------- */
function handleStateChange(stateDropdown, districtDropdown, placeDropdown) {
  const state = stateDropdown.value;

  resetDropdown(districtDropdown, "Select District");
  resetDropdown(placeDropdown, "Select Place");
  placeDropdown.disabled = true;

  if (!state) {
    districtDropdown.disabled = true;
    return;
  }

  districtDropdown.disabled = false;

  Object.keys(indiaLocations[state]).forEach((district) => {
    districtDropdown.appendChild(createOption(district));
  });
}

/* ---------------------------
   Handle District Change
---------------------------- */
function handleDistrictChange(stateDropdown, districtDropdown, placeDropdown) {
  const state = stateDropdown.value;
  const district = districtDropdown.value;

  resetDropdown(placeDropdown, "Select Place");

  if (!district) {
    placeDropdown.disabled = true;
    return;
  }

  placeDropdown.disabled = false;

  Object.keys(indiaLocations[state][district]).forEach((place) => {
    placeDropdown.appendChild(createOption(place));
  });
}

/* ---------------------------
   Fetch Weather
---------------------------- */
async function fetchWeather(
  stateDropdown,
  districtDropdown,
  placeDropdown,
  elements
) {
  const state = stateDropdown.value;
  const district = districtDropdown.value;
  const place = placeDropdown.value;

  if (!state || !district || !place) return;

  const { lat, lon } = indiaLocations[state][district][place];

  const API_KEY = "YOUR_API_KEY_HERE";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  try {
    elements.weatherSection.classList.remove("hidden");
    elements.tempEl.textContent = "Fetching weather...";
    elements.descEl.textContent = "";

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch weather");
    }

    const data = await response.json();

    elements.cityEl.textContent = data.name;
    elements.tempEl.textContent = `🌡 Temperature: ${data.main.temp} °C`;
    elements.descEl.textContent = `🌥 Condition: ${capitalize(
      data.weather[0].description
    )}`;
  } catch (error) {
    elements.tempEl.textContent = "❌ Error fetching weather";
    console.error("Weather Error:", error);
  }
}

/* ---------------------------
   Helper Functions
---------------------------- */

function createOption(value) {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = value;
  return option;
}

function resetDropdown(dropdown, placeholder) {
  dropdown.innerHTML = `<option value="">${placeholder}</option>`;
  dropdown.disabled = false;
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
