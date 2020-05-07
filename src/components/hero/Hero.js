import "./Hero.css";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="showcase-content">
        <h1>See what's next</h1>
        <p>Watch anywhere. Cancel anytime</p>
        <a href="#" className="btn btn-xl">
          Watch Free For 30 Days{" "}
          <i className="fas fa-chevron-right btn-icon"></i>
        </a>
      </div>
    </>
  );
};

export default Hero;
