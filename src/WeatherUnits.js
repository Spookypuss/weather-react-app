import React from "react";
import "./WeatherUnits.css";

export default function WeatherUnits(props) {
        return (
        <div className="WeatherUnits">
            <span className="current-temperature">{Math.round(props.celcius)}</span>
            <span className="units">°C </span>
        </div>
        );
    } 