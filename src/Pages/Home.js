import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Info from "../components/Info";
import TC from "../components/TopCategories";

class Home extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Hero />
        <Info />
        <TC />
      </>
    );
  }
}

export default Home;
