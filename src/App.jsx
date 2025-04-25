import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import About from "./About";
import Stats from "./stats";

import ServiceSlider from "./ServiceSlider";
import Blog from "./blog";
import Gallery from "./gllery";
import Mobile from "./mobile";
import ImpactStories from "./ImpactStories";
// import Calculator from "./Calculator"; 

function App() {
  return (
    <>
      {/* <Router> */}
      <Navbar />
      <Carousel />
      <About />
      <Stats />
      <ServiceSlider />
      <Blog />
      <Gallery />
      <Mobile />
      <ImpactStories />
      {/* <Calculator /> */}
      {/* <Footer /> */}
      {/* </Router> */}
    </>
  );
}

export default App;
