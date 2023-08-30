import React from "react"
import "./App.css";
import Weather from "./Weather"

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Edinburgh"/>
        <footer>
          This project is coded by Henrika Smith and is open-sourced on{" "}
          <a
            href="https://github.com/iamhenrika/react-forecast-app"
            target="_blank"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}
