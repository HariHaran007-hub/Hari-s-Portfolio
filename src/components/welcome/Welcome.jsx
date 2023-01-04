import React, { useEffect, useState } from "react";
import "./welcome.scss";
import "animate.css";
import { Bounce } from "react-awesome-reveal";

const Welcome = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Android App Developer", "Web developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="welcome" id="home">
      <Bounce>
        <div className="welcomeContainer">
          <div className="right">
            <div className="welcomeBox animate__animated  animate__rubberBand">
              <span style={{ color: "white" }}>Welcome to my Portfolio!!</span>
            </div>

            <div className="myName">
              <span>
                {"Hi! I'm Hari "}
                {""}
                <span
                  className="textRotate"
                  dataPeriod="1000"
                  data-rotate='[ " an Android App Developer", "Web developer" ]'
                >
                  <span className="wrap">{text}</span>
                </span>
              </span>
            </div>

            <div className="shortNote">
              <span>
                I'm a android developer and aspiring web developer in
                MERN-Stack. I have 1.5 years experience in android development.{" "}
              </span>
            </div>

            <button>Let's connect</button>
          </div>

          <div className="left">
            {/* <span style={{ color: "white" }}>Welcome to my Portfolio!!</span> */}
            <img src="/img/welcom-img.svg" />
          </div>
        </div>
      </Bounce>
    </div>
  );
};

export default Welcome;
