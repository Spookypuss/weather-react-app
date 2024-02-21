import React from "react";
import FormattedTime from "./FormattedTime";
import WeatherIcon from "./WeatherIcon";
import WeatherUnits from "./WeatherUnits";
import 'bootstrap/dist/css/bootstrap.css';
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <h1>{props.data.name}</h1>
                <div className="row">
                    <div className="col-6">
                        <ul>
                            <li><FormattedTime time={props.data.time} /></li>
                            <li className="current-description highlight">{props.data.description}</li>
                            <li>Humidity: <span className="highlight">{props.data.humidity}%</span></li>
                            <li>Wind: <span className="highlight">{props.data.wind}m/s</span></li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <div className="d-flex current-weather">
                            <div className="current-icon">
                                <WeatherIcon code={props.data.icon} />
                            </div>
                            <WeatherUnits celcius={props.data.temperature} />
                        </div>
                    </div>
                </div>
        </div>
    )
}