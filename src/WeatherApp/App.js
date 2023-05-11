import React, { Component } from "react";
import Header from "./Header";
import Home from "./Home";
import Weather from "./Weather";
import "./App.css";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/weather" element={<Weather />}/>
          </Routes>
        </div>
      </Router>
    )
  }
}
