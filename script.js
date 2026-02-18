// Example data structure for locations
const indiaLocations = {
  Uttarakhand: {
    Nainital: {
      "Mallital": { lat: 29.3919, lon: 79.4542 },
      "Tallital": { lat: 29.3780, lon: 79.4636 }
    }
  }
};

// Load states automatically when page opens
window.onload = function() {
  const stateDropdown = document.getElementById("stateDropdown");
  Object.keys(indiaLocations).forEach(state => {
    stateDropdown.innerHTML += `<option value="${state}">${state}</option>`;
  });
};

function loadDistricts() {
  const state = document.getElementById("stateDropdown").value;
  const districtDropdown = document.getElementById("districtDropdown");
  districtDropdown.innerHTML = "<option value=''>Select District</option>";

  if (state && indiaLocations[state]) {
    Object.keys(indiaLocations[state]).forEach(district => {
      districtDropdown.innerHTML += `<option value="${district}">${district}</option>`;
    });
  }
}

function loadPlaces() {
  const state = document.getElementById("stateDropdown").value;
  const district = document.getElementById("districtDropdown").value;
  const placeDropdown = document.getElementById("placeDropdown");
  placeDropdown.innerHTML = "<option value=''>Select Place</option>";

  if (state && district && indiaLocations[state][district]) {
    Object.keys(indiaLocations[state][district]).forEach(place => {
      placeDropdown.innerHTML += `<option value="${place}">${place}</option>`;
    });
  }
}

async function fetchWeather() {
  const state = document.getElementById("stateDropdown").value;
  const district = document.getElementById("districtDropdown").value;
  const place = document.getElementById("placeDropdown").value;

  if (!state || !district || !place) return;

  const { lat, lon } = indiaLocations[state][district][place];
  const apiKey = "4b2bb1752bce93d0df41adc6bfd3ff52"; // Your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      alert("Weather data not found");
      return;
    }

    document.getElementById("city").innerText = data.name;
    document.getElementById("temp").innerText = `Temperature: ${data.main.temp} °C`;
    document.getElementById("weather").innerText = `Condition: ${data.weather[0].description}`;
  } catch (error) {
    alert("Error fetching weather data");
    console.error(error);
  }
}
