import React, { Component } from "react";
import Person from "./Person";
import Man from "./Man";

class Main extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      School: [
        {
          name: "Shubham",
          age: "23",
        },
        {
          name: "Ravi",
          age: "20",
        },
        {
          name: "Rahul",
          age: "26",
        },
        {
          name: "Rohit",
          age: "50",
        },
      ],
      isShow: false, 
    };
    this.toggleHandler = this.toggleHandler.bind(this);
  }

  toggleHandler (){
    this.setState({ isShow: !this.state.isShow })
  }
  
  render() {
    const Style = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };

    let school;
    if(this.state.isShow){
      school = this.state.School.map( (p, index) => {
        return <Person key={index} name={p.name} age={p.age} /> 
      })
    }else {
      school='';
    }

    return (
      <div>
        <Person name="Adarsh" age="22" />
        <Man link="https://www.ankita.com/" />

        {/* Long Way to render data */}
        <Person name={this.state.School[2].name} age={this.state.School[2].age}/>
        
        <div style={Style}>
        <p>
        <button onClick={this.toggleHandler} >
          toggle
        </button>
        {/* This is Short-Way to Render list */}
        {school}  
        </p>
        </div>

      </div>
    );
  }
}
export default Main;
