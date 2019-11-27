import React from "react";
import "./CatItem.css";

const CatItem = props => {
  return (
    <div className="CatEachItem">
      <div
        className="CatItemImage"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <div className="CatItemContent">{props.title}</div>
    </div>
  );
};

export default CatItem;
