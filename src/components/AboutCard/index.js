import React from "react";
import "./style.css";
import { Animated } from "react-animated-css";

function AboutCard() {
  return (
    <div className="aboutCard">
      <Animated
        animationIn="bounceInRight"
        animationOut="fadeOut"
        isVisible={true}
      >
        <div className="aboutImage">
          <img
            alt="blog author"
            src={require("../../assets/img/Natalia.jpg")}
          ></img>
        </div>
        <h3 className="aboutCardTitle">Natalia Pilewska</h3>
        <span>I love travelling, programming and learning new languages</span>
      </Animated>
    </div>
  );
}

export default AboutCard;
