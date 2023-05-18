import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import User from "./User";
import "./App.css";
import Industry from "./Industry";
import Company from "./Company";
import Nested from "./Nested";
import Login from "./Login";
import Protected from "./Protected";

function App() {
  return (
    <div>

      <Router>
        <h1>This is Navigation Main Container</h1>
        <ul>
          <li><NavLink className="nav-links" to='/'>Home</NavLink></li>
          <li><NavLink className="nav-links" to='/about'>About</NavLink></li>
          <li><NavLink className="nav-links" to='/contact'>Contact</NavLink></li>
          <li><NavLink className="nav-links" to='/nested'>Nested</NavLink></li>
          <li><NavLink className="nav-links" to='/user/anil'>Anil</NavLink></li>
          <li><NavLink className="nav-links" to='/user/peter'>Peter</NavLink></li>
        </ul>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/user/:name' element={<User/>} />
          {/* <Route path='*' element={<Navigate to="/" comment="Redirect Page to Home"/>} />  */}
          
          {/* Nested Route in Nested Components */}
          <Route path="/nested" element={<Nested/>}>
            <Route path="/" element={<><h1>This is Blog Page.</h1></>}/>
            <Route path="industry" element={<Industry/>}/>
            <Route path="company" element={<Company/>}/>
          </Route>

          {/* Use Protected Components */}
          {/* <Route path="/" element={<Protected Component={Home}/>}/>
          <Route path="/login" element={<Login/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}
export default App;
