import React, { Component } from "react";
import Search from "./Search";
import Result from "./Result";
import "./weather.css";
import axios from "axios";

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: "",
      lon: "",
      weatherData: "",
      city: "",
    };
  }
  changeHandler = (event) => {
    event.preventDefault();
    const name = event.target.name;
    if (name === "city") {
      this.setState({ city: event.target.value });
    } else if (name === "lat") {
      this.setState({ lat: event.target.value });
    } else if (name === "lon") {
      this.setState({ lon: event.target.value });
    }
  };

  locationHandler = (event) => {
    event.preventDefault();
    this.setState({
      lat: "",
      lon: "",
      city: "",
      kelvin:"",
      weatherData: "",
    });
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (data) => {
          this.setState({ lat: data.coords.latitude, lon: data.coords.longitude }, () => {
              axios.get(
                  `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=eed9e24093db9fab5e6533aafd084294`)
                .then((result) => {
                  // console.log(result);
                  this.setState({ 
                    city: result.data.name,
                    kelvin: result.data.main.temp,
                    weatherData: result.data,
                  })
                })
                .catch((error) => {
                  console.log(error);
                });
          });
        },
        (error) => {
          console.log(error);
        }
      );
    } 
    else {
      console.log("Location is Not Supported");
    }
  };
  render() {
    return (
      <div>
        <Search
          lat={this.state.lat}
          lon={this.state.lon}
          city={this.state.city}
          weatherData={this.state.weatherData}
          change={this.changeHandler}
          location={this.locationHandler}
          />
        <Result 
          city={this.state.city}
          weatherData={this.state.weatherData}
        />
      </div>
    );
  }
}
