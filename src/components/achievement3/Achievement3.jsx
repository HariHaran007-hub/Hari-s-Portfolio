import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import "../achievement1/achievement1.scss";

const Achievement3 = () => {
  return (
    <div className="achievement1">
      <div className="achievement1Container">
        <div className="left">
          <div className="leftContainer">
            <Slide>
              <h3>Project Expo 2022 PSNACET 1st prize</h3>
            </Slide>
            <Slide>
              <p>
                Shown the working prototype of my bussiness model as a software
                and won first prize with cash prize of 3000 rupees.
              </p>
            </Slide>
          </div>
        </div>

        <div className="right" style={{ height: "550px" }}>
          <img src="./img/robo.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Achievement3;
