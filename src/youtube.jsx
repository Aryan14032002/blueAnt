import React from 'react';
import './youtube.css'; // Import the CSS file

const Youtube = () => {
  return (
    <section className="youtube-section">
      <div className="content">
        <h1>Secure Your <span>Financial Freedom</span> Today</h1>
        <p>
          Our expert team is committed to delivering tailored solutions to meet your financial goals.
          We pride ourselves on transparency, trust, and unparalleled client service.
        </p>
        <a href="https://www.youtube.com/@rohits-take" className="contact-btn">Get in Touch</a>
      </div>

      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/rBIuzxFkS44"  // 
          title="Financial Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Youtube;
