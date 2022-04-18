import React from "react";
import "../App.scss";
import { Button } from "./Button";
import "./Button.scss"
import "./HeroSection.scss";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="./videos/video-1.mp4" type="video/mp4" autoPlay loop muted />
      <h1>AVENTURE AWAITS</h1>
      <p>What are you waitting for?</p>
      <div className="hero-btns">
        <Button
          className="btn"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER
          <i style={{marginLeft: "5px"}} className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
