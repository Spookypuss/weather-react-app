import React, { useState } from "react";
import "./WeatherUnits.css";

export default function WeatherUnits(props) {
    let [unit, setUnit] = useState("celcius");

    function toFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function toCelcius(event) {
        event.preventDefault();
        setUnit("celcius");
    }

    if (unit === 'celcius') {
        return (
        <div className="WeatherUnits">
            <span className="current-temperature">{Math.round(props.celcius)}</span>
            <span className="units">°C | <a href="/" onClick={toFahrenheit}>°F</a></span>
        </div>
        );
    } else {
        return (
            <div className="WeatherUnits">
                <span className="current-temperature">{Math.round((props.celcius * 9/5) + 32)}</span>
                <span className="units"><a href="/" onClick={toCelcius}>°C</a> | °F</span>
            </div>
            );
    }
}