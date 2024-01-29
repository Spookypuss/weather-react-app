import React from "react";
import axios from "axios";

export default function Weather(props) {
    function showWeather(response) {
        alert(`The current temperature in ${response.data.name} is ${Math.round(response.data.main.temp)}°C`)
    }
    
    let apiKey = "28966f9a5b2543fb60e8a809ec2c1fd9";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(url).then(showWeather);
}
