import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response) {
        setForecast(response.data.list);
        setLoaded(true);
    }

    if (loaded) {
        console.log(forecast);
    return <div className="WeatherForecast">
                <div className="row">
                    <div className="col">
                        <div className="WeatherForecastDay">{forecast[0].dt}</div>
                        <WeatherIcon code={forecast[0].weather[0].icon} size={40}/>
                        <div className="WeatherForecastTemperatures">
                            <span className="WeatherTemperaturesTemperatureMax">{Math.round(forecast[0].main.temp_max)}°</span>
                            <span className="WeatherTemperaturesTemperatureMin">{Math.round(forecast[0].main.temp_min)}°</span>
                        </div>
                    </div>
                </div>
            </div>
    } else {
        let apiKey = "28966f9a5b2543fb60e8a809ec2c1fd9";
        let lon = props.longitude;
        let lat = props.latitude;
        let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

        axios.get(url).then(handleResponse);

        return null;
    }
}

/*import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    function handleResponse(response) {
        console.log(response.data);
    }

    let apiKey = "28966f9a5b2543fb60e8a809ec2c1fd9";
    let longitude = props.longitude;
    let latitude = props.latitude;
    let url= `api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    axios.get(url).then(handleResponse);

    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecastDay">Thu</div>
                    <WeatherIcon code="few-clouds-day" size={36}/>
                    <div className="WeatherForecastTemperatures">
                        <span className="WeatherTemperaturesTemperatureMax">19°</span>
                        <span className="WeatherTemperaturesTemperatureMin">10°</span>
                    </div>
                </div>
            </div>
        </div>
    )
}*/