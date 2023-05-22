import React, { useState } from "react";
import "./Style/Header.css";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = [
  {
    title: "Home",
    path: "/",
    setClass: "nav-links",
    toggleClass: "toggle-links",
  },
  {
    title: "About",
    path: "/about",
    setClass: "nav-links",
    toggleClass: "toggle-links",
  },
  {
    title: "Service",
    path: "/service",
    setClass: "nav-links",
    toggleClass: "toggle-links",
  },
  {
    title: "Project",
    path: "/project",
    setClass: "nav-links",
    toggleClass: "toggle-links",
  },
  {
    title: "Contact Us",
    path: "/contact",
    setClass: "nav-links",
    toggleClass: "toggle-links",
  },
];

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <header className='header-section'>
        <div className='header-section_left'>
          <NavLink className='logo' title='logo' to='#'>
            🎉Adarsh's🎉
          </NavLink>
        </div>

        {toggle ? (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            className='close-btn'
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setToggle(!toggle)}
            className='menu-btn'
          />
        )}
        {/* Toggle used responsive Menu Bar */}
        <ul className={`${toggle ? "open-toggle" : "close-toggle"} `}>
          {Navbar.map((e, index) => {
            return (
              <li key={index}>
                <NavLink to={e.path} className={e.toggleClass}>
                  {e.title}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <ul className='header-section_right'>
          {Navbar.map((e, val) => {
            return (
              <li key={val}>
                <NavLink to={e.path} className={e.setClass}>
                  {e.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </header>
    </>
  );
};
export default Header;
