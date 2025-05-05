import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AboutPage.css";
import {
  FaUserFriends,
  FaBalanceScale,
  FaLock,
  FaGraduationCap,
  FaClock,
  FaChartLine,
  FaLightbulb,
  FaEye,
} from "react-icons/fa";

function AboutPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const yOffsets = [38, 108, 178, 248, 318, 388];
  const colors = ["#00b6c9", "#8cc63f", "#2d3e50", "#00b6c9", "#8cc63f", "#2d3e50"];
  const bgColors = [
    "#00b6c9",
    "#8cc63f",
    "#2d3e50",
    "#00b6c9",
    "#8cc63f",
    "#2d3e50",
  ];
  const coreValues = [
    "Client First – Customers interests above everything else.",
    "Conflict-Free Advice – Providing impartial, unbiased advice.",
    "Confidentiality & Trust – Protecting client data with utmost integrity.",
    "Financial Education – Empowering clients to make informed decisions.",
    "Efficient Service – Delivering timely and responsive support.",
    "Financial Freedom – Guiding clients toward long-term goals.",
  ];

  const icons = [
    <FaUserFriends />,
    <FaBalanceScale />,
    <FaLock />,
    <FaGraduationCap />,
    <FaClock />,
    <FaChartLine />,
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section" data-aos="fade-up">
        <div className="hero-image" />
        <h1 className="hero-heading">About Us</h1>
      </section>

      {/* Intro Section */}
      <section className="intro-section" data-aos="fade-left">
        <div className="intro-left">
          <h2>Blueant: A Name Built on Trust, Growth, and Strength</h2>
          <p>
            Blueant represents our values and commitment to helping individuals
            achieve reliable and secure financial futures. We stand for smart
            financial habits, credibility, discipline, and confidence.
          </p>
        </div>
        <div className="intro-right">
          <div className="colors-block green-block" />
          <div className="colors-block blue-block" />
        </div>
      </section>

      {/* Tagline Section */}
      <section className="tagline-section" data-aos="fade-up">
        <h2>Small Steps. Big Future!</h2>
      </section>

      {/* Blue & Ant Section */}
      <section className="blue-ant-section" data-aos="fade-up">
        <div className="column">
          <div className="icon-title-wrapper">
            <img src="/blue.png" alt="Blue Icon" className="section-icon" />
          </div>
          <p>
            A color that symbolizes trust, credibility, professionalism, and
            confidence. In finance, blue reflects stability and reliability,
            qualities that define our approach to financial solutions.
          </p>
          <button>Switching Financial Advisor</button>
        </div>
        <div className="column">
          <div className="icon-title-wrapper">
            <img src="/ant-1.png" alt="Ant Icon" className="section-icons" />
          </div>
          <p>
            Ants represent discipline, persistence, and teamwork. Like steady
            savings and regular investing, they reflect consistency and
            dedication-key elements in building lasting financial security.
          </p>
          <button>Looking for a Financial Advisor</button>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="core-values-section" data-aos="fade-up">
        <div className="core-values-wrapper">
          <div className="core-values-circle">
            <span>
              CORE<br />VALUES
            </span>
          </div>

          <div className="core-values-list">
            {coreValues.map((value, i) => (
              <div
                className="core-value-item"
                key={i}
                style={{ top: `${yOffsets[i] - 38}px` }}
              >
                <div
                  className="core-value-icon"
                  style={{ borderColor: colors[i], color: colors[i] }}
                >
                  {icons[i]}
                </div>
                <div className="core-value-content">
                  <div
                    className="core-value-title"
                    style={{ backgroundColor: bgColors[i] }}
                  >
                    {value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* SVG Dashed Lines */}
          <svg className="core-values-lines" width="900" height="430">
            {yOffsets.map((y, i) => (
              <polyline
                key={i}
                points={`50,195, 180,${y} 300,${y}`}
                fill="none"
                stroke={colors[i]}
                strokeWidth="2"
                strokeDasharray="4,4"
              />
            ))}
          </svg>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section" data-aos="fade-up">
        {/* Floating Bubbles */}
        <div className="bubbles">
          <div className="bubble bubble1"></div>
          <div className="bubble bubble2"></div>
          <div className="bubble bubble3"></div>
          <div className="bubble bubble4"></div>
          <div className="bubble bubble5"></div>
          <div className="bubble bubble6"></div>
          <div className="bubble bubble7"></div>
          <div className="bubble bubble8"></div>
          <div className="bubble bubble9"></div>
          <div className="bubble bubble10"></div>

        </div>

        <div className="mission mission-vision-card">
          <div className="mission-vision-content">
            <div className="icon-circle mission-icon">
              <FaLightbulb />
            </div>
            <h2>Mision</h2>
            <span className="bold-text">We don’t sell, we educate.</span><br />
            <p>
              Blueant Finserv is committed to creating a financially educated
              community where millions of individuals are empowered to utilize
              every rupee of their hard-earned money.
            </p>
          </div>
        </div>
        <div className="vision mission-vision-card">
          <div className="mission-vision-content">
            <div className="icon-circle vision-icon">
              <FaEye />
            </div>
            <h2>Vision</h2>
            <span className="bold-text">We don’t push, we guide</span><br />
            <p>
              Blueant envisions a future where financial security is accessible
              to all, empowering individuals to make small, informed investment
              decisions for lasting, long-term stability.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
