import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import About from "./About";
import Stats from "./stats";
// import Services from "./Services";
import ServiceSlider from "./ServiceSlider";
import Blog from "./blog";
import Gallery from "./gllery";
import Mobile from "./mobile";
import Testimonials from "./Testimonials";  

function App() {
  return (
    <>
      {/* <Router> */}
      <Navbar />
      <Carousel />
      <About />
      <Stats />
      {/* <Services /> */}
      <ServiceSlider />
      <Blog />
      <Gallery />
      <Mobile />
      <Testimonials />
      {/* <Footer /> */}
      {/* </Router> */}
    </>
  );
}

export default App;
