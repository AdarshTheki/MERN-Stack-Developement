import React from "react";
import "./Style/style.css";
import Journey from "./Journey";
import image1 from "./assets/image_1.png";
import Typewriter from "typewriter-effect"; // effect
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // icons = menu, close
import { useState } from "react";

const Navbar = [
  {
    title: "Home",
    path: "/",
    setClass: "links",
    toggleClass: "toggle-links",
  },
  {
    title: "About",
    path: "/about",
    setClass: "links",
    toggleClass: "toggle-links",
  },
  {
    title: "Service",
    path: "/services",
    setClass: "links",
    toggleClass: "toggle-links",
  },
  {
    title: "Project",
    path: "/project",
    setClass: "links",
    toggleClass: "toggle-links",
  },
  {
    title: "Contact Us",
    path: "/contact",
    setClass: "links",
    toggleClass: "toggle-links",
  },
];

const FooterSection = [
  {
    title: ["Home", "About", "Contact"],
    footerPath: ['/','/about','/about'],
    footerClassName: "footer-links",
  },
  {
    title: ["Home1", "About1", "Contact1"],
    footerPath: ['/1','/about1','/about1'],
    footerClassName: "footer-links",
  },
  {
    title: ["Home2", "About2", "Contact2"],
    footerPath: ['/2','/about2','/about2'],
    footerClassName: "footer-links",
  },
];

const Website = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <header className='header-section'>
        <div className='header-section_left'>
          <a href='/'>🎉Adarsh's🎉</a>
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
            console.log(toggle);
            return (
              <li key={index}>
                <a href={e.path} className={e.toggleClass}>
                  {e.title}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className='header-section_right'>
          {Navbar.map((e, index) => {
            return (
              <li key={index}>
                <a href={e.path} className={e.setClass}>
                  {e.title}
                </a>
              </li>
            );
          })}
        </ul>
      </header>

      <section className='main-section'>
        <div className='main-section_left'>
          Hi, My name is <span>🦸‍♂️Adarsh Verma</span> and I am passionate about{" "}
          <Typewriter
            options={{
              strings: [
                "Front-end Developer",
                "React Developer",
                "Web Developer",
                "Website Created",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
          <a href='/' className='button'>Download Resume</a>
          <a href='/' className='button'>Visit GitHub</a>
        </div>
        <div className='main-section_right'>
          <img src={image1} alt={image1} />
        </div>
      </section>
      <hr />
      <Journey />
      <hr />
      <footer className='footer-main-container'>
        <div className='footer-container'>
          <div className='footer-content'>
            <h3>Adarsh Developers Portfolio</h3>
          </div>
          {/* Multiple footer Navigation */}
          {FooterSection.map((e, indx) => {
            return (
              <div key={indx} className='footer-content'>
                {e.title.map((ele, index) => {
                  return <a key={index} href={e.footerPath[index]}>{ele}</a>;
                })}
              </div>
            );
          })}
        </div>
        <div className='footer-copyright'>
          <p>Copyright@Adarsh'sPortfolio.com | All Rights Reversed </p>
        </div>
      </footer>
    </>
  );
};
export default Website;
