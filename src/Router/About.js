import React from 'react'
import { Route, useNavigate, useLocation } from 'react-router-dom';
import Home from "./Home"

function About() {
  const Navigate = useNavigate();

  const location = useLocation();
  console.log(location);
  return<>
    <h1>This is About Page.</h1>
    <button onClick={() => Navigate('/contact')}>contact</button>
    <br />
    <Route path='/' element={<Home/>}/>
  </>
}
export default About;