import React from "react";
import TechStack from "../TechStack/TechStack";
import NavBar from "../navbar/NavBar";
import Welcome from "../welcome/Welcome";
import "./home.scss";
import MyService from "../MyService/MyService";
import Achievement1 from "../achievement1/Achievement1";
import Achievement2 from "../achievement2/Achievement2";
import MyProjects from "../myprojects/MyProjects";
import AboutMe from "../AboutMe/AboutMe";
import Contact from "../contact/Contact";
import Achievement3 from "../achievement3/Achievement3";

const Home = () => {
  return (
    <div className="home">
      <div className="homeContainer">
        <NavBar />
        <div className="content">
          <Welcome />
          <AboutMe />
          <MyService />
          <TechStack />
          <Achievement1 />
          <Achievement2 />
          <Achievement3 />
          <MyProjects />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;
