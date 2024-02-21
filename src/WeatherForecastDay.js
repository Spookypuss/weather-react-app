import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    console.log(props.data);

    function maxTemperature(){
        let temperature = Math.round(props.data.main.temp_max);
        return `${temperature}°`;
    }

    function minTemperature(){
        let temperature = Math.round(props.data.main.temp_min);
        return `${temperature}°`;
    }

    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
    }

    return (
        <div>
            <div className="WeatherForecastDay">{day()} </div>
            <WeatherIcon code={props.data.weather[0].icon} size={40}/>
            <div className="WeatherForecastTemperatures">
                <span className="WeatherTemperaturesTemperatureMax">{maxTemperature()}</span>
                <span className="WeatherTemperaturesTemperatureMin">{minTemperature()}</span>
            </div>
        </div>
    );
}
