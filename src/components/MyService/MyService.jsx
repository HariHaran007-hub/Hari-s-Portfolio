import React from "react";
import { Bounce, Slide } from "react-awesome-reveal";
import "./myservice.scss";

const MyService = () => {
  return (
    <div className="myservice" id="skills">
      <div className="myserviceContainer">
        <Bounce>
          <h2>Service I provide for your bussiness</h2>
        </Bounce>

        <span>
          Over 2 years I have learned and mastered this skills and i put all
          these skills into work and produce a master piece for your bussiness{" "}
        </span>

        <p></p>
        <div className="topItem">
          <div className="left">
            <img src="/img/android-studio-icon.svg" />
          </div>

          <div className="right">
            <h1>Android application development</h1>

            <div className="listContainer">
              <ul>
                <Slide direction="right" triggerOnce="true">
                  <li>
                    <h4>Adaptive design</h4>
                    <p>
                      Today there is an technology traffic where all people
                      using varity of phones where the screen size should varied
                      a lot. So I optimize to 70% to 80% screen size while
                      building mobile applications.
                    </p>
                  </li>
                </Slide>
                <Slide direction="right" delay={50} triggerOnce="true">
                  <li>
                    <h4>Code quality</h4>
                    <p>
                      The best part of app development is not only building the
                      projects other than than how efficiently code is
                      understandable and maintainable. I build the projects in
                      such a way that the code is readable and maintainable.
                    </p>
                  </li>
                </Slide>

                <Slide direction="right" delay={100} triggerOnce="true">
                  <li>
                    <h4>Architecture</h4>
                    <p>
                      I develop mobile applications by incorporate latest
                      architecture such as MVVM architecture and MVVM clean
                      architecture which are the best architecture suggested by
                      google. Other than that I also have experience in MVC
                      architecture.
                    </p>
                  </li>
                </Slide>
                <Slide direction="right" delay={150} triggerOnce="true">
                  <li>
                    <h4>Dependency Injection</h4>
                    <p>
                      I use dependency Injections in one of the complex topics
                      and it has a large learning curve in android app
                      development.So I use dependency injection in my projects
                      to enhance the performance of the application.
                    </p>
                  </li>
                </Slide>
              </ul>
            </div>
          </div>
        </div>

        {/**/}

        <div className="bottomItem">
          <div className="left">
            <img src="https://img.freepik.com/free-vector/custom-style-script-website-optimization-coding-software-development-female-programmer-cartoon-character-working-adding-javascript-css-code_335657-2370.jpg?w=2000" />
          </div>

          <div className="right">
            <h1>Full stack web development</h1>

            <div className="listContainer">
              <ul>
                <Slide direction="right" delay={50} triggerOnce="true">
                  <li>
                    <h4>Front-end development</h4>
                    <p>
                      To increase the usages of the website should be creative
                      and attractive. I create website attrative which is the
                      face of your busssiness.
                    </p>
                  </li>
                </Slide>
                <Slide direction="right" delay={100} triggerOnce="true">
                  <li>
                    <h4>Adaptive design</h4>
                    <p>
                      Now a days creating website to adapt all screen sizes is
                      very important. I will make website responsive such that
                      it adapts to devices such as mobile screens, laptop
                      screens, smart tv screens etc...
                    </p>
                  </li>
                </Slide>
                <Slide direction="right" delay={150} triggerOnce="true">
                  <li>
                    <h4>Frame work I use</h4>
                    <p>
                      I use React JS for building the front-end web application
                      and I use HTML and CSS also. I will also use Styled
                      components and Tailwind css if it necessary/
                    </p>
                  </li>
                </Slide>
                <Slide direction="right" delay={200} triggerOnce="true">
                  <li>
                    <h4>Backend development</h4>
                    <p>I use Node JS for the back-end development.</p>
                  </li>
                </Slide>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyService;
