import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';// unique Id create

const Form = () => {
  // const [user, setUser] = useState({});
  // let name, value;
  // const getUserData = (event) => {
  //   name = event.target.name;
  //   value = event.target.value;
  //   setUser({ ...user, [name]: value });
  // };

  const [user, setUser] = useState({id: uuidv4()});
  const getUserData = (event) => {
    let newInput = { [event.target.name]: event.target.value };
    setUser({ ...user, ...newInput });
  };

  const postData = async (event) => {
    event.preventDefault();
    console.log(user);
    // Object Destruction
    const { name, email, password } = user;
    // send the data to firebase 
    const res = await fetch("https://new-firebase-project-8faa3-default-rtdb.firebaseio.com/reactForm.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name, email, password,
        }),
      }
    );
    // Data POST then reset data and alert massage show. 
    if(res){
      setUser({
        name:"", email:"", password:"",
      })
      alert("👉 Data has Save Successfully in Google Firebase ✅")
    }
  };
  const Style = {
    minHeight: "80vh", 
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
    flexDirection: "column", 
    fontSize: "1.5rem",  
  }
  return (
    <form method='POST' style={Style}>
      <input
        type='text'
        name='name'
        value={user.name}
        onChange={getUserData}
        placeholder='Enter name...'
        autoComplete='off'
      />
      <br />
      <input
        type='email'
        name='email'
        value={user.email}
        onChange={getUserData}
        placeholder='Enter Email...'
      />
      <br />
      <input
        type='password'
        name='password'
        value={user.password}
        onChange={getUserData}
        placeholder='Password: X X X X'
        autoComplete='off'
      />
      <br />
      <button onClick={postData}>Submit</button>
    </form>
  );
};
export default Form;
