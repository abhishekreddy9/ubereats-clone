import React from "react";
import "./NavBar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container container">
        <div className="logo">
          <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/f8f0721f871b3704cce92eb96bc6e504.svg" />
        </div>
        <div className="signin">
          <a href="">Sign in</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
