import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Avinash Kr",
    role: "Co-Founder at xyz",
    image: "public/Leonardo_Phoenix_10_a_confident_smiling_male_with_bright_warm_0.jpg",
    text: `Like this vide and ask your questions in comment section, don't forget to Subscribe Easy Tutorials YouTube channel to watch more videos of website designing, digital marketing and photoshop.`,
  },
  {
    name: "Bharat Kunal",
    role: "Manager at xyz",
    image: "public/Leonardo_Phoenix_10_a_smiling_male_model_with_a_strong_jawline_1.jpg",
    text: `Like this vide and ask your questions in comment section, don't forget to Subscribe Easy Tutorials YouTube channel to watch more videos of website designing, digital marketing and photoshop.`,
  },
  {
    name: "Prabhakar D",
    role: "Founder / CEO at xyz",
    image: "public/Leonardo_Phoenix_10_a_confident_smiling_male_with_bright_warm_3.jpg",
    text: `Like this vide and ask your questions in comment section, don't forget to Subscribe Easy Tutorials YouTube channel to watch more videos of website designing, digital marketing and photoshop.`,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonial-box">
        <h2>TESTIMONIALS</h2>
        <p className="subtext">Stories from our growing community</p>
        <div className="testimonials-container">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <img src={item.image} alt={item.name} className="testimonial-img" />
              <p className="testimonial-text">❝ {item.text} ❞</p>
              <p className="testimonial-name">{item.name}</p>
              <p className="testimonial-role">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
