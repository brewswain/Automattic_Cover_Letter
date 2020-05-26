import React from "react";

import Fade from "react-reveal/Fade";

import "./hero-text.styles.scss";

const HeroText = ({ children }) => (
  <div className="hero-text-container">
    <Fade top>
      <h1 className="hero-text">{children}</h1>
    </Fade>
  </div>
);

export default HeroText;
