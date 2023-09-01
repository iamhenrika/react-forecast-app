import React, { useState } from "react";

export default function WeatherTemperature(props) {
  let [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature"> {props.celsius} </span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            {" "}
            °F{" "}
          </a>
        </span>
      </div>
    );
  } else {
    function fahrenheit() {
      return Math.round((props.celsius * 9) / 5 + 32);
    }
    //let fahrenheit = Math.round((props.celsius * 9/5) + 32)

    return (
      <div className="WeatherTemperature">
        <span className="temperature"> {fahrenheit()} </span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            °C{" "}
          </a>{" "}
          | °F
        </span>
      </div>
    );
    return "Fahrenheit";
  }
}
