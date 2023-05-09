import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import LogIn from "./LogIn.js";
import NavBar from "./NavBar";
import NotFound from "./NotFound";
import images1 from "../image.png";
import "./Account.css";

// main container 
class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 1 = LogIn, 0 = LogOut
      auth: false,
    };
  }

  authHandler = (event) => {
    event.preventDefault();
    this.setState({ auth: !this.state.auth });
  }

  render() {
    return (
      <Router>
        <div className="text-center">
          <h1>This is Links of navigation all the pages.</h1>
          <NavBar login={this.authHandler} status={this.state.auth} />
          <hr />
          <Routes> 
            <Route path="/" element={<Home title="props.use(title)" pic={images1} alt="image" />} />  
            <Route path='/login'  element={<LogIn login={this.authHandler} status={this.state.auth}/>} /> 
            {/* Redirect Use */}
            <Route path='/about' element={this.state.auth === false ? <redirect to="/"/> : <About />} /> 
            <Route path='/contact'  element={<Contact/>} /> 
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
export default Navigation;
