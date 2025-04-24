import React, { useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: "Arjun Mehta",
    designation: "CEO, SparkTech",
    feedback: "Their service boosted our productivity and morale.",
    img: "/Leonardo_Phoenix_10_a_confident_smiling_male_with_bright_warm_0.jpg"
  },
  {
    name: "Priya Kapoor",
    designation: "Product Head, InnovateX",
    feedback: "An amazing team that goes above and beyond!",
    img: "/Leonardo_Phoenix_10_a_smiling_confident_woman_in_her_40s_with_2.jpg"
  },
  {
    name: "Rohan Verma",
    designation: "Marketing Lead, Zento",
    feedback: "The quality and commitment are unmatched.",
    img: "/Leonardo_Phoenix_10_a_smiling_male_model_with_a_strong_jawline_1.jpg"
  },
  {
    name: "Neha Sharma",
    designation: "Founder, Artistry Lab",
    feedback: "Their creativity and speed were just perfect.",
    img: "/Leonardo_Phoenix_10_a_confident_smiling_male_with_bright_warm_3.jpg"
  },
  {
    name: "Vikram Joshi",
    designation: "COO, NextGen Health",
    feedback: "Trustworthy, professional, and results-driven.",
    img: "/Leonardo_Phoenix_10_a_confident_and_cheerful_male_in_his_mid30_0.jpg"
  }
];

const ITEMS_PER_GROUP = 2;

const Testimonials = () => {
  const [currentGroup, setCurrentGroup] = useState(0);
  const totalGroups = Math.ceil(testimonials.length / ITEMS_PER_GROUP);

  const currentTestimonials = testimonials.slice(
    currentGroup * ITEMS_PER_GROUP,
    currentGroup * ITEMS_PER_GROUP + ITEMS_PER_GROUP
  );

  return (
    <div className="testimonial-section">
      {/* Left - Heading */}
      <div className="left-panel">
        <h2 className="heading">What Our Clients Say</h2>
        <p>Your trust drives us forward</p>
        <div className="quote">“Success is best when it's shared.”</div>
      </div>

      {/* Center - Testimonials */}
      <div className="center-panel">
        {currentTestimonials.map((t, idx) => (
          <div key={idx} className="testimonial-card">
            <img src={t.img} alt={t.name} className="profile-img" />
            <div className="name">{t.name}</div>
            <div className="designation">{t.designation}</div>
            <div className="feedback">{t.feedback}</div>
            <div className="stars">★★★★★</div>
          </div>
        ))}
      </div>

      {/* Right - Dots */}
      <div className="right-panel">
        {Array.from({ length: totalGroups }).map((_, index) => (
          <div
            key={index}
            className={`dot ${currentGroup === index ? 'active' : ''}`}
            onClick={() => setCurrentGroup(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
