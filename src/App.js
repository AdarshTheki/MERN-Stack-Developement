import React, { Component } from "react";
import './App.css';
import  Navigation  from "./Router/Navigation";

class App extends Component {
  render() {
    return (
      <div className='App' style={{margin:'auto', width:'80vw'}}>
        <Navigation/>
      </div>
    );
  }
}

export default App;

