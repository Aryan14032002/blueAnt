// Services.js
import React, { useState, useEffect, useRef } from "react";

const services = [
  { name: "Will and Legacy", desc: "Helps plan distribution of assets after life.", img: "/will.jpeg" },
  { name: "Loan", desc: "Provides financial aid for personal or business use.", img: "/loan.jpeg" },
  { name: "Taxes", desc: "Taxes fund government services like education, roads, and defense.", img: "/tax.jpeg" },
  { name: "Retirement", desc: "Helps plan and secure your post-retirement life.", img: "/download.jpeg" },
  { name: "Future Plans", desc: "Secure your future with planned investments.", img: "/future.jpeg" },
  { name: "Kid's Needs", desc: "Plan for your child's education and future.", img: "/kids.jpeg" },
  { name: "Budgeting", desc: "Control your expenses with personalized budgeting.", img: "/budget.jpeg" },
  { name: "Insurance", desc: "Protects against financial loss or risk.", img: "/insaurance.jpeg" },
];

function Services() {
  const [centerIndex, setCenterIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const wheelRef = useRef(null);
  const touchStartX = useRef(0);

  const rotate = (direction) => {
    if (isAnimating) return;
    setIsAnimating(true);

    setCenterIndex((prevIndex) => {
      const newIndex =
        direction === "left"
          ? (prevIndex - 1 + services.length) % services.length
          : (prevIndex + 1) % services.length;
      return newIndex;
    });

    setTimeout(() => {
      setIsAnimating(false);
    }, 400);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    if (touchStartX.current - touchEndX > 50) {
      rotate("right");
    } else if (touchEndX - touchStartX.current > 50) {
      rotate("left");
    }
  };

  const handleWheel = (e) => {
    e.preventDefault();
    rotate(e.deltaY > 0 ? "right" : "left");
  };

  useEffect(() => {
    const wheel = wheelRef.current;
    wheel.addEventListener("touchstart", handleTouchStart, { passive: true });
    wheel.addEventListener("touchend", handleTouchEnd, { passive: true });
    wheel.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      wheel.removeEventListener("touchstart", handleTouchStart);
      wheel.removeEventListener("touchend", handleTouchEnd);
      wheel.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const getCardClass = (index) => {
    const diff = (index - centerIndex + services.length) % services.length;
    if (diff === 0) return "center";
    if (diff === 1 || diff === -services.length + 1) return "right";
    if (diff === -1 || diff === services.length - 1) return "left";
    if (diff === 2 || diff === -services.length + 2) return "next-right";
    if (diff === -2 || diff === services.length - 2) return "next-left";
    return "";
  };

  return (
    <div className="carousel-container">
      <div className="container">
        <div className="wheel-wrapper">
          <button className="arrow left" onClick={() => rotate("left")}>
            ◀
          </button>
          <div className="wheel" ref={wheelRef}>
            {services.map((service, index) => {
              const positionClass = getCardClass(index);
              return (
                <div key={index} className={`service ${positionClass}`}>
                  <img src={service.img} alt={service.name} />
                  <p>{service.name}</p>
                </div>
              );
            })}
          </div>
          <button className="arrow right" onClick={() => rotate("right")}>
            ▶
          </button>
        </div>

        <div className="details">
          <div className="section-heading">Service</div> {/* Custom Heading */}
          <h2>{services[centerIndex].name}</h2>
          <p>{services[centerIndex].desc}</p>
          <button className="btn">Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Services;
