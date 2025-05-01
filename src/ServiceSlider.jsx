import React, { useState, useEffect } from "react";
import "./ServiceSlider.css";

const images = [
  "retirement.jpg",
  "Taxes.jpg",
  "willandlegacy.jpg",
  "budget.jpg",
  "slide5.jpg",
  "slide6.jpg",
  "slide7.jpg",
  "slide8.jpg",
];

const ServiceSlider = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 100000);
    return () => clearInterval(interval);
  }, []);

  const getClassName = (i) => {
    if (i === index) return "slide center";
    if (i === (index + 1) % images.length) return "slide right";
    if (i === (index - 1 + images.length) % images.length) return "slide left";
    return "slide hidden";
  };

  return (
    <div className="slider-wrapper">
      <div className="slider">
        <div className="service-label">SERVICE</div>
        <button className="arrow left" onClick={prevSlide}>
          <img src="arrow-right arrow.png" alt="Previous" />
        </button>
        <div className="carousel">
          {images.map((src, i) => (
            <img key={i} src={src} className={getClassName(i)} alt={`slide-${i}`} />
          ))}
        </div>
        <button className="arrow right" onClick={nextSlide}>
          <img src="arrow-left arrow.png" alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default ServiceSlider;