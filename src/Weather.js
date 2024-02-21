import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  let [city, setCity] = useState(props.startCity);
  let [weather, setWeather] = useState({ready: false});

  function getWeather(response) {
    setWeather({
      ready: true,
      name: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].main,
      icon: response.data.weather[0].icon,
      time: new Date(response.data.dt * 1000),
      longitude: response.data.coord.lon,
      latitude: response.data.coord.lat,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search()
  } 

  function search() {
    let apiKey = "28966f9a5b2543fb60e8a809ec2c1fd9";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(getWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" onChange={updateCity} className="search-input" placeholder="Enter a city" autoFocus="on"/>
      <input type="submit" value="Search" className="search-button"/>
    </form>
  );

  if (weather.ready) {
    return (
      <div>
        {form}
        <WeatherInfo data={weather}/>
        <hr />
        <WeatherForecast longitude={weather.longitude} latitude={weather.latitude} />
      </div>
    );
  } else {
    search();
    return("Loading...");
  }
}