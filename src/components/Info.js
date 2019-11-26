import React from "react";
import "./Info.css";

const Info = () => {
  return (
    <div className="info-component">
      <div className="container info-container">
        <div className="info-links">
          <a href="">India</a> > <a href="">Hyderabad</a>
        </div>
        <div className="info-heading">
          <h2>Food delivery in Hyderabad</h2>
        </div>
        <div className="info-content">
          Have your favorite Hyderabad restaurant food delivered to your door
          with Uber Eats. Whether you want to order breakfast, lunch, dinner, or
          a snack, Uber Eats makes it easy to discover new and nearby places to
          eat in Hyderabad. Browse tons of food delivery options, place your
          order, and track it by the minute.
        </div>
      </div>
    </div>
  );
};

export default Info;
