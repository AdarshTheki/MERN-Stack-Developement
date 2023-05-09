import React from "react";
import "../App.css";
import Styled from 'styled-components'

export default function Registered(props) {
  // let btnStyle;
  // btnStyle = {
  //   backgroundColor: "green",
  //   color: "white",
  //   width: '150px',
  // };

  // Add Classes use with Dynamics arrays.
  let btnClasses = ['btn', 'm-2']

  let btnText, passBoxTypes;
  if (props.showPass === true) {
    // btnStyle.backgroundColor = 'red';
    btnClasses.push('btn-danger');
    passBoxTypes = "text";
    btnText = "Hide Password";
  } else {
    passBoxTypes = "password";
    btnText = "Show Password";
    btnClasses.push('btn-success');
  }

  const StyleRegister = Styled.div `
  width: 600px;
  displays: flex;
  &:hover {
    box-shadow: 0px 0px 5px gray; 
  }
  @media (min-width:0px) and (max-width:600px){
    width: 300px;
    
  }
  `;

  return (
    <StyleRegister className='container card p-3 mt-2'>
      <h2 className='text-center'>Registration Forms</h2>
      {/* Submit Handler class.js inputs */}
      <form onSubmit={props.submit}>
        <div className='form-group m-2'>
          <label htmlFor='name'>
            Name<span className='text-danger'>*</span>:{" "}
          </label>
          <input
            id='name'
            type='text'
            name='name'
            className='form-control'
            required
          />
        </div>
        <div className='form-group m-2'>
          <label htmlFor='email'>
            Email<span className='text-danger'>*</span>:{" "}
          </label>
          <input
            id='email'
            type='email'
            name='email'
            className='form-control'
            required
          />
        </div>
        <div className='form-group m-2'>
          <label htmlFor='password'>
            Password<span className='text-danger'>*</span>:{" "}
          </label>
          <input
            id='password'
            // passBoxTypes select text and password  
            type={passBoxTypes}
            name='password'
            className='form-control'
            required
          />
        </div>
        <button
          type='button'
          // change class  
          className={btnClasses.join(' ')}
          // get class.js inputs handlers
          onClick={props.click}
          // style={btnStyle}
        >
          {btnText}
        </button>
        <button type='submit' className='btn btn-primary m-2'>
          Submit
        </button>
      </form>
    </StyleRegister>
  );
}
