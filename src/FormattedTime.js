import React from "react";

export default function FormattedTime(props) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day = days[props.time.getDay()];
    let hour = props.time.getHours();
    if (hour < 10) {
        hour = `0${hour}`;
    }
    let minutes = props.time.getHours();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    return (
        <p>{day}, {hour}:{minutes}</p>
    )
}
