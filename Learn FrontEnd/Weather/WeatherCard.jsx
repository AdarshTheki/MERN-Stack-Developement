import React, { useState, useEffect } from "react";
import image from './weather.jpg'
const Card = ({
  temp,
  humidity,
  pressure,
  weatherMood,
  name,
  speed,
  country,
  sunset,
}) => {
  const [weatherState, setWeatherState] = useState("");
  useEffect(() => {
    if (weatherMood) {
      switch (weatherMood) {
        case "Clouds":
          setWeatherState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatherState("wi-fog");
          break;
        case "Clear":
          setWeatherState("wi-day-sunny");
          break;
        case "Mist":
          setWeatherState("wi-dust");
          break;

        default:
          setWeatherState("wi-day-sunny");
          break;
      }
    }
  }, [weatherMood]);

  // converting the seconds into time
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <article className='widget'>
        <div className='weatherIcon'>
          <img src={image} alt="weather" />
        </div>

        <div className='weatherInfo'>
          <div className='temperature'>
            <span>{temp}&deg;</span>
          </div>

          <div className='description'>
            <div className='weatherCondition'>{weatherMood}</div>
            <div className='place'>
              {name}, {country}
            </div>
          </div>
        </div>

        <div className='date'> {new Date().toLocaleString()} </div>

        {/* our 4column section  */}
        <div className='extra-temp'>
          <div className='temp-info-minmax'>
            <div className='two-sided-section'>
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className='extra-info-left_side'>
                {timeStr} Hours <br />
                <span>Sunset</span>
              </p>
            </div>

            <div className='two-sided-section'>
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className='extra-info-left_side'>
                {humidity} %<br />
                <span>Humidity</span>
              </p>
            </div>
          </div>

          <div className='weather-extra-info'>
            <div className='two-sided-section'>
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className='extra-info-left_side'>
                {pressure} Pa
                <br />
                <span>Pressure</span>
              </p>
            </div>

            <div className='two-sided-section'>
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className='extra-info-left_side'>
                {speed} Km/H <br />
                <span>Speed</span>
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Card;
