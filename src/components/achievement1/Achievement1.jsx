import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import "./achievement1.scss";

const Achievement1 = () => {
  return (
    <div className="achievement1">
      <Fade>
        <h2>My Achievements</h2>
        <p>
          Over past 2 years I have attended lot of competations and won some of
          them. They are listed below.
        </p>
      </Fade>
      <div className="achievement1Container">
        <div className="left">
          <div className="leftContainer">
            <Slide>
              <h3>Smart India Hackathon 2022 Software edition winner</h3>
            </Slide>
            <Slide>
              <p>
                One of the India's Larges hackathon is Smart India Hackathon. I
                have developed 2 mobile applications and 1 website for the
                problem statement provided by the Ministry of Disability ,
                India. So being among 7 teams as finalist we won the SIH title
                with 1 lakh rupees as cash prize.
              </p>
            </Slide>
          </div>
        </div>

        <div className="right">
          <img src="./img/sih.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Achievement1;
