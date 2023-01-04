import React from "react";
import { Slide } from "react-awesome-reveal";
import "./myprojects.scss";

const MyProjects = () => {
  return (
    <div className="myProjects" id="projects">
      <h1>Projects</h1>
      <p>Take look at some of my projects for better understanding</p>

      <div className="projectsContainer">
        <Slide direction="up" triggerOnce="true">
          <div className="item">
            <img src="/img/adip.jpg" alt="" />
            {/* <div className="itemAction">
            <a>Demo</a>
            <a>View Code</a>
          </div> */}
            <h4>ADIP verification system</h4>
            <a href="https://www.ajay.live/">View demo</a>
          </div>
        </Slide>

        <Slide direction="up" delay={100} triggerOnce="true">
          <div className="item">
            <img src="/img/flora.jpg" alt="" />
            <h4>Smart agriculture system</h4>
            <a>View demo</a>
          </div>
        </Slide>

        <Slide direction="up" delay={150} triggerOnce="true">
          <div className="item">
            <img src="/img/golgol.jpg" alt="" />
            <h4>Physical gaming social platform</h4>
            <a>View demo</a>
          </div>
        </Slide>
        <Slide direction="up" delay={200} triggerOnce="true">
          <div className="item">
            <img src="/img/runtrack.jpg" alt="" />
            <h4>Running tracker mobile applciation</h4>
            <a>View demo</a>
          </div>
        </Slide>

        <Slide direction="up" delay={250} triggerOnce="true">
          <div className="item">
            <img src="/img/newsrepo.jpg" alt="" />
            <h4>Daily News viewer</h4>
            <a>View demo</a>
          </div>
        </Slide>
        <Slide direction="up" delay={300} triggerOnce="true">
          <div className="item">
            <img src="/img/admin.png" alt="" />
            <h4>General Admin panel</h4>
            <a>View demo</a>
          </div>
        </Slide>
        <Slide direction="up" delay={350} triggerOnce="true">
          <div className="item">
            <img src="/img/scribble.jpg" alt="" />
            <h4>Mobile app (Scribble.io) in development</h4>
            <a>View demo</a>
          </div>
        </Slide>
        <Slide direction="up" delay={400} triggerOnce="true">
          <div className="item">
            <img src="/img/linked-in-clone.png" alt="" />
            <h4>Linked-in Clone</h4>
            <a>View demo</a>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default MyProjects;
