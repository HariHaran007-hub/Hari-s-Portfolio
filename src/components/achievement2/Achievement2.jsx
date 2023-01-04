import React from "react";
import { Slide } from "react-awesome-reveal";
import "./achievement2.scss";
const Achievement2 = () => {
  return (
    <div className="achievement2">
      <div className="achievement2Container">
        <div className="left">
          <img src="./img/mit.jpg" />
        </div>
        <div className="right">
          <div className="rightContainer">
            <Slide direction="right">
              <h3>Manipal Hackathon 2022 winner</h3>
            </Slide>
            <Slide direction="right">
              <p>
                Won Manipal Hackathon 2022 held at Manipal Institute of
                technology, Manipal {"(MIT)"}. I developed an android
                application and developed an API(NODE JS) for storing the data
                received from sensors to the database and integrated python
                flask service for Machine learning.
              </p>
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement2;
