import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <ul className='navigation'>
      <li><Link to='/'>Home</Link></li>
      <li>
        <Link onClick={props.login}> 
          {props.status ? "LogIn" : "LogOut"}
        </Link>
      </li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      {/* <li><Link to='*'>NotFound</Link></li> */}
    </ul>
  );
}
