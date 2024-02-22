import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false); //reset 'loaded' to false
    }, [props.latitude]) //if latitude changes

    function handleResponse(response) {
        setForecast(response.data.list);
        setLoaded(true);
    }

    if (loaded) { //due to inability to access free 5 day forecast, the following is selected from free 3-hourly live data forecast
        // hence the lack of variation in max and min temperatures.
    return <div className="WeatherForecast">
                <div className="row">
                    <div className="col">
                        <WeatherForecastDay data={forecast[7]} />
                    </div>
                    <div className="col">
                        <WeatherForecastDay data={forecast[15]} />
                    </div>
                    <div className="col">
                        <WeatherForecastDay data={forecast[23]} />
                    </div>
                    <div className="col">
                        <WeatherForecastDay data={forecast[31]} />
                    </div>
                    <div className="col">
                        <WeatherForecastDay data={forecast[39]} />
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