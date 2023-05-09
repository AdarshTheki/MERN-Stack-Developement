import React, { Component } from "react";
import PersonStyle from "./CSS/Person.module.css";
// import axios from "axios";

// This is class Components
class Person extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    // This is a state use:
    this.state = {
      Company: "WsCube",
      Result: 33,
      City: "Nagpur",
    };
		// this.buttonClickHandler = this.buttonClickHandler.bind(this);
  }
	// AddEventHandler 
	buttonClickHandler = () => {
		console.log(this.state);
		console.log(this.props);
		alert('Jsx')
	}

  render() {
    console.log(PersonStyle);
    const style = {
			fontSize: '20px',
			color: 'red',
			padding: '5px 15px',
		};
    return (
      <div className={PersonStyle.PersonBox}>
        <p className={PersonStyle.Props}>
          {/*This is props Use But OverWrite the when use State */}
          Dear <span>{this.props.name}</span> , Your Age is <span>{this.props.age}</span>
        </p>
        <p style={style}>
          {/* This is a State use: */}
          Dear "{this.state.Company}", "{this.state.Result}" Years city "
          {this.state.City}"
        </p>
        <p>
					{/* add EventListeners */}
					<button style={{color:'blue'}} type="button" onClick={this.buttonClickHandler}>Click button</button>
        </p>
      </div>

    );
  }
}

export default Person;
