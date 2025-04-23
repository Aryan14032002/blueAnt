import React from 'react';
import './mobile.css';

function Mobile() {
  return (
    <div className="mobile-strip">
      {/* Floating Bubbles */}
      <div className="bubble bubble1"></div>
      <div className="bubble bubble2"></div>
      <div className="bubble bubble3"></div>
      <div className="bubble bubble4"></div>
      <div className="bubble bubble5"></div>
      <div className="bubble bubble6"></div>

      {/* Left side: text and download buttons */}
      <div className="mobile-text">
        <h2>CLICK. DOWNLOAD. GO!</h2>
        <h3 className="tagline-subtext">Because smart investing starts with the right tools</h3>
        <div className="download-buttons">
          <a
            href="https://play.google.com/store/apps/details?id=com.iwell.blueant"
            target="_blank"
            rel="noopener noreferrer"
            className="btn black"
          >
            <img src="android.png" alt="Android" />
            ANDROID
          </a>
          <a
            href="https://apps.apple.com/in/app/blueant/id1209984452"
            target="_blank"
            rel="noopener noreferrer"
            className="btn blacks"
          >
            <img src="apple.png" alt="Apple" />
            iOS
          </a>
        </div>
      </div>

      {/* Right side: app image */}
      <div className="right-part">
        <div className="color-block"></div>
      </div>
    </div>
  );
}

export default Mobile;
