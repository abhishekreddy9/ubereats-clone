import React from "react";
import "./TopCategories.css";
import categories from "../assets/JSON/categories.json";
import CatItem from "./CatItem.js";

const TC = () => {
  const data = categories.map(function(value) {
    return (
      <CatItem key={value.title} title={value.title} image={value.imageUrl} />
    );
  });

  return (
    <div className="TopCategoriesMainSection">
      <div className="TopCategoriestop container">
        <div className="TopCategoriesLeft">
          <h2>Top Categories In Hyderabad</h2>
        </div>
        <div className="TopCategoriesRight">
          <a href="#">View All</a>
        </div>
      </div>
      <div className="TopCategoriesHeader"></div>
      <div class="TopCategoriesSection">
        <div className="TopCategoriesHeader container">{data}</div>
      </div>
    </div>
  );
};

export default TC;
