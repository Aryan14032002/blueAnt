import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import About from "./About";
import Stats from "./stats";

import ServiceSlider from "./ServiceSlider";
import Mobile from "./mobile";
import Calculator from "./Calculator";
import Blog from "./blog";
import Gallery from "./gllery";
import Youtube from "./youtube";
import ImpactStories from "./ImpactStories";
// import Calculator from "./Calculator"; 

import Footer from "./footer";

function App() {
  return (
    <>
      {/* <Router> */}
      <Navbar />
      <Carousel />
      <About />
      <Stats />
      <ServiceSlider />
      <Mobile />
      <Calculator />
      <Blog />
      <Gallery />
      <Youtube />
      <ImpactStories />
      {/* <Footer /> */}
      {/* <Calculator /> */}
      <Footer />
      {/* </Router> */}
    </>
  );
}

export default App;
