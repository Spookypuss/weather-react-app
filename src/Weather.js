import React, { useState } from "react";
import axios from "axios";
import FormattedTime from "./FormattedTime";
import "./Weather.css";

export default function Search() {
  let [city, setCity] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState(null);

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      name: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      time: new Date(response.data.dt * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "28966f9a5b2543fb60e8a809ec2c1fd9";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <h2>{weather.name} current weather</h2>
        <FormattedTime time={weather.time} />
        
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Wind: {weather.wind}m/s</li>
          <li>Humidity: {weather.humidity}%</li>
          <li className="description">Description: {weather.description}</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}