import React, { useState, useEffect, useRef } from "react";
import "./navbar.scss";
import { BrowserRouter as Router } from "react-router-dom";

const NavBar = () => {
  const home = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <Router>
      <div className="navBar">
        <div className="navBarContainer">
          <div className="logo">
            <img src="./img/logo.svg" />
          </div>

          <div className="navList">
            <div onClick={() => scrollToSection(home)} className="navItem">
              <a ref={home} href="#home">
                Home
              </a>
            </div>
            <div
              ref={skills}
              onClick={() => scrollToSection(skills)}
              className="navItem"
            >
              <a ref={skills} href="#skills">
                Skills
              </a>
            </div>
            <div
              ref={projects}
              onClick={() => scrollToSection(projects)}
              className="navItem"
            >
              <a href="#projects">Projects</a>
            </div>
            <a className="navSocial">
              <img src="./img/nav-icon1.svg" />
            </a>
            <a className="navSocial">
              <img src="./img/nav-icon2.svg" />
            </a>
            <a className="navSocial">
              <img src="./img/nav-icon3.svg" />
            </a>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default NavBar;
