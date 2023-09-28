import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;

const Header = () => {
  return (
    <h1>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='about'>About</NavLink>
      <NavLink to='github'>GitHub</NavLink>
    </h1>
  );
};
const Footer = () => {
  return <h1>Footer</h1>;
};
