import React, { useState } from "react";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const apiKey = "YOUR_API_KEY"; // replace with your OpenWeatherMap API key

 const getWeather = async () => {
  if (!city) return;
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();
    console.log("API Response:", data); // 🔍 Debug log
    setWeather(data);
  } catch (error) {
    console.error("Error fetching weather:", error);
  }
};

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🌤 Weather App</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Get Weather</button>

      {weather && weather.main && (
        <div>
          <h2>{weather.name}</h2>
          <p>🌡 {weather.main.temp}°C</p>
          <p>☁ {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default App;