import React, { Component } from "react";
import Styled from "styled-components";   //This is Library in React

function Greet(props) {
  return (
    <div>
      <StyleRegister className='card p-3 mt-3 text-center'>
        <h3>Name: {props.name} </h3>
        <h3>Verification Send to Email: {props.email} </h3>
        <h3>Thank you for Joining us. 👇👇</h3>
      </StyleRegister>
    </div>
  );
}
// styled-components used Outside the render component. 
const StyleRegister = Styled.div`
width: 600px;
displays: flex;
&:hover {
  box-shadow: 0px 0px 5px gray; 
}
@media (min-width:0px) and (max-width:600px){
  width: 300px;
}
`;

function Registered(props) {
  let btnClasses = ["btn", "m-2"];
  let btnText, passBoxTypes;
  if (props.showPass === true) {
    btnClasses.push("btn-danger");
    passBoxTypes = "text";
    btnText = "Hide Password";
  } else {
    passBoxTypes = "password";  
    btnText = "show password";
    btnClasses.push("btn-success");
  }
const StyledButton = Styled.button `
display: ${props => props.flag ? "inline-block" : "block"};
padding: 10px 5px;
border-radius: 5px;
width: ${props => props.flag==='1' ? "45%" : "100%"};
background-color: ${props => props.bgcolor};
color: white;
font-weight: bold; 
border: 0;
margin: 2px;
transition: 0.2s ease-out; 
&:hover {
  background: red;
}
&:active {
  background: blue; 
}  
`;
  return (
    <StyleRegister className='container card p-3 mt-2'>
      <h2 className='text-center'>Registration Forms</h2>
      <form onSubmit={props.submit}>
        <div className='form-group m-2'>
          <label> Name:  </label>
          <input type='text' name='name' className='form-control' required />
        </div>
        <div className='form-group m-2'>
          <label> Email:  </label>
          <input type='email' name='email' className='form-control' required />
        </div>
        <div className='form-group m-2'>
          <label htmlFor='password'>Password: </label>
          {/* Password show and hide */}
          <input id='password' type={passBoxTypes} name='password' className='form-control' required />
        </div>
        {/* Use Dynamic Classes and click eventHandler */}
        <button type='button' className={btnClasses.join(" ")} onClick={props.click}>
              {btnText}
        </button>
        <button type='submit' className='btn btn-primary m-2'> Submit </button>
      </form>
      <StyledButton type="button" flag="1" bgcolor='orange'>btn1</StyledButton>
      <StyledButton type="button" flag="1" bgcolor='green'>btn2</StyledButton>
      <StyledButton type="button" flag="0" bgcolor='blue'>btn2</StyledButton>
    </StyleRegister>
  );
}

// This is main component of dynamically classes.
class Dynamic_Class extends Component {
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
  };
  render() {
    return (
      <div>
        { (this.state.isRegistered) 
          ? ( <Greet name={this.state.name} email={this.state.email} />)
          : ( <Registered
            submit={this.registrationHandler}
            showPass={this.state.showPassword}
            click={this.showPasswordHandler} 
            /> )
        }
      </div>
    );
  }
}
export default Dynamic_Class;
