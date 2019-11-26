import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Info from "../components/Info";

class Home extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Hero />
        <Info />
      </>
    );
  }
}

export default Home;
