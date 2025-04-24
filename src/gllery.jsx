import React from "react";
import "./gallery.css";

const images = [
  "workshop-4.jpg",  // Big
  "workshop-6.jpg",  // Medium
  "workshop-7.jpg",  // Small
  "workshop-11.jpg", // Small
  "workshop-18.jpg", // Medium
  "workshop-19.jpg", // Big
];

const captions = [
  "Workshop Highlights",
  "Skill in Action",
  "Learning Moments",
  "Team Engagement",
  "Hands-On Session",
  "Location : NOIDA",
];

const Gallery = () => {
  return (
    <div className="gallery-section">
      <div className="gallery-container">
        {/* ONLY changed this header part - kept everything else identical */}
        <div className="gallery-header">
          <div className="header-wrapper">
            <h1>GALLERY</h1>
            <p className="tagline">Workshop Your Way to Wow</p>
          </div>
          <button className="view-all-btn">View All </button>
        </div>

        {/* EXACTLY your original gallery rows below - no changes */}
        <div className="gallery-row">
          <div className="img-box img-big" style={{ backgroundImage: `url(${images[0]})` }}>
            <div className="overlay">
              <p className="overlay-text">{captions[0]}</p>
            </div>
          </div>
          <div className="img-box img-medium" style={{ backgroundImage: `url(${images[1]})` }}>
            <div className="overlay">
              <p className="overlay-text">{captions[1]}</p>
            </div>
          </div>
          <div className="img-box img-small" style={{ backgroundImage: `url(${images[2]})` }}>
            <div className="overlay">
              <p className="overlay-text">{captions[2]}</p>
            </div>
          </div>
        </div>

        <div className="gallery-row">
          <div className="img-box img-small" style={{ backgroundImage: `url(${images[3]})` }}>
            <div className="overlay">
              <p className="overlay-text">{captions[3]}</p>
            </div>
          </div>
          <div className="img-box img-medium" style={{ backgroundImage: `url(${images[4]})` }}>
            <div className="overlay">
              <p className="overlay-text">{captions[4]}</p>
            </div>
          </div>
          <div className="img-box img-big" style={{ backgroundImage: `url(${images[5]})` }}>
            <div className="overlay">
              <p className="overlay-text">{captions[5]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
