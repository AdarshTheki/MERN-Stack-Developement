import React, { Component } from "react";
import Register from "./Registered.js";
import Greet from "./Greet.js";

class Class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegistered: false,
      name: "",
      email: "",
      password: "",
      showPassword: false,
    };
  }
  registrationHandler = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    this.setState({ name, email, password, isRegistered: true });
  };

  showPasswordHandler = () => {
    this.setState({ showPassword: !this.state.showPassword });
  }

  render() {
    return (
      <div>
        {this.state.isRegistered 
        ? ( <Greet  name={this.state.name}
                    email={this.state.email} /> ) 
        : ( <Register submit={this.registrationHandler}
                      showPass={this.state.showPassword}  
                      click={this.showPasswordHandler}  />)}
      </div>
    );
  }
}
export default Class;
