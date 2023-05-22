import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./style.css";

const App = () => {
  const [searchValue, setSearchValue] = useState("bangalore");
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=cc7f9f0cd5164de37dfd2a4476aab966`;

      let res = await fetch(url);
      let data = await res.json();
      console.log(data);

      const { temp, humidity, pressure } = data.main;
      const { main: weatherMood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherInfo = { 
        temp, humidity, pressure, weatherMood, name, speed, country, sunset,
      };

      setTempInfo(myNewWeatherInfo);
    } 
    catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  },[]);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}>
            Search
          </button>
        </div>
      </div>

      {/* our temp card  */}
      <Card {...tempInfo} />
    </>
  );
};

export default App;