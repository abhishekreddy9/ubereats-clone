import React from "react";
import "./Hero.css";
import map from "../assets/img/location.svg";

const Hero = () => {
  return (
    <div className="hero-container full-width">
      <img
        className="hero-image hero-image-1"
        src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/317b14d7b051b7e496c9f1ba4db156b4.svg"
      />
      <div className="hero-2">
        <div className="hero-heading">
          <h1>Your favourite food, delivered with Uber</h1>
        </div>
        <div className="hero-input">
          <img className="hero-icon" src={map} />
          <input type="text" placeholder="Enter delivery address" />
          <button>Find Food</button>
        </div>
      </div>
      <img
        className="hero-image hero-image-2"
        src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/2d72424dcc82f116a7d8850d1f44ec09.svg"
      />
    </div>
  );
};

export default Hero;
