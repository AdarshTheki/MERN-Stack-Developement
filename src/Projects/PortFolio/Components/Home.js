import React from "react";
import "./Style/Home.css";
import image1 from "./assets/image_1.png";
import Typewriter from "typewriter-effect"; // effect
import { NavLink } from "react-router-dom";

const FooterSection = [
  {
    title: ["Home", "About", "Service"],
    footerPath: ["/", "/about", "/service"],
    className: "footer__links",
  },
  {
    title: [
      "Project",
      "Contact Us",
      "Copyright@Adarsh's Portfolio.com | All Rights Reversed",
    ],
    footerPath: ["/project", "/contact", "#"],
    className: "footer__links",
  },
];

const Home = () => {
  return (
    <>
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
          <NavLink to='https://www.resume' className='button'>Download Resume</NavLink>
          <NavLink to='https://www.Github' className='button'>Visit GitHub</NavLink>
        </div>
        <div className='main-section_right'>
          <img src={image1} alt={image1} />
        </div>
      </section>

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
                  return (
                    <NavLink
                      key={index}
                      to={e.footerPath[index]}
                      className={e.className}
                    >
                      {ele}
                    </NavLink>
                  );
                })}
              </div>
            );
          })}
        </div>
      </footer>
    </>
  );
};
export default Home;
