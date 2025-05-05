import React from 'react'
import Carousel from "./Carousel";
import About from "./About";
import Stats from "./Stats";
import ServiceSlider from "./ServiceSlider";
import Mobile from "./Mobile";
import Calculator from "./Calculator";
import Blog from "./Blog";
import Gallery from "./Gallery";
import Youtube from "./Youtube";
import ImpactStories from "./ImpactStories";

function Landing() {
  return (
    <>
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
      </>
  )
}

export default Landing
