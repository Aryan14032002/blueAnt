import React from "react";
import "./blog.css";

const BlogSection = () => {
  return (
    <div className="blog-section">
      <div className="orange-bg"></div>

      <div className="blog-card">
        <span className="blog-tag">BLOG</span>
        <h2 className="blog-title">
          Finance Unlocked :<br /> Smarter Money Starts Here
        </h2>
        <p className="blog-desc">April 25, 2025</p>

        <div className="button-row">
          <button className="blog-btn">
            Read More <span>➜</span>
          </button>
          <div className="arrow-buttons">
          <button className="arrow-btn">
          <img src="public/left-arrow.png" alt="Left Arrow" />
          </button>
          <button className="arrow-btn">
          <img src="public/right-arrow.png" alt="Left Arrow" />
          </button>
          </div>
        </div>
      </div>

      <div className="right-box">{/* Image is here */}</div>
    </div>
  );
};

export default BlogSection;
