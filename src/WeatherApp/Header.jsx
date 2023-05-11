import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <>
      <div className="container">
        <div className="weather-app">
          <h3>Weather App</h3>
        </div>
        <div className="menu-button">
          <Link to="/" className="btn btn-info" >Home</Link>
          <Link to="/weather" className="btn btn-warning">Weather</Link>
        </div>
      </div>  
    </>
  );
}
