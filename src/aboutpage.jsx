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
  FaHandshake,
  FaCalculator,
  FaPiggyBank,
  FaCogs,
  FaPeopleCarry,
  FaBullseye,
  FaHeadset,
  FaUserCog,
  FaUserShield,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import TeamSection from './TeamSection';  // Import TeamSection

function AboutPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const yOffsets = [38, 108, 178, 248, 318, 388];
  const colors = ["#f98089", "#88d2f7", "#fff490", "#a8b7e0", "#ffcd88", "#b7e5a5"];
  const bgColors = ["#f98089", "#88d2f7", "#fff490", "#a8b7e0", "#ffcd88", "#b7e5a5"];
  const coreValues = [
    "Client First – Customers interests above everything else.",
    "Conflict-Free Advice – Providing impartial, unbiased advice.",
    "Confidentiality & Trust – Protecting client data with utmost integrity.",
    "Financial Education – Empowering clients to make informed decisions.",
    "Efficient Service – Delivering timely and responsive support.",
    "Financial Freedom – Guiding clients toward long-term goals.",
  ];
  const coreIcons = [
    <FaUserFriends />, <FaBalanceScale />, <FaLock />, <FaGraduationCap />, <FaClock />, <FaChartLine />,
  ];

  const whyUsPoints = [
    { title: "Trust & <br/>Ethical Approach", icon: <FaHandshake /> },
    { title: "Simplifying <br/>Finance for You", icon: <FaCalculator /> },
    { title: "Transparency in <br/> Every Step", icon: <FaUserShield /> },
    { title: "Small but Regular<br/> Savings Philosophy", icon: <FaPiggyBank /> },
    { title: "Personalized Financial Solutions", icon: <FaUserCog /> },
    { title: "Long-Term Relationship <br/>& Customer-Centric Approaches", icon: <FaPeopleCarry /> },
    { title: "Goal-Oriented<br/> Investment Strategies", icon: <FaBullseye /> },
    { title: "Dedicated Support<br/> Team", icon: <FaHeadset /> },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section" data-aos="fade-up">
        <div className="hero-image" />
        <h1 className="hero-heading">About Us</h1>
      </section>

      {/* Intro Section */}
      <section className="intro-section" data-aos="fade-up">
        <div className="about-main">
          <div className="about-left">
            <div className="about-tagline">
              <img src="blueAnt.png" alt="Blueant Logo" className="about-logo" />
              <span>A Name Rooted in Purpose</span>
              <span> and Progress</span>
            </div>
            <div className="about-info">
              <p>It reflects our unwavering commitment to empowering individuals and families to build a financially secure future, guided by strong values and a client-first mindset.</p>
              <p><span className="bold-ants">For over 12 years, Blueant Finserv Pvt. Ltd. has been a trusted name in financial services.</span></p>
              <p>Rooted in integrity, transparency, and personalized guidance, we have helped thousands navigate their financial journeys with smart, ethical, and consistent investment strategies.</p>
              <p><span className="bold-ants">When you think of Blueant, think of steady growth, unwavering support, and trusted financial insight.</span></p>
              <p>Like the humble ant—disciplined, persistent, and strong—we work tirelessly for your success.</p>
            </div>
          </div>
          <div className="about-right">
            <div className="about-image-container">
              <video autoPlay muted loop playsInline width="100%" height="auto" className="about-video">
                <source src="/Video 2.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
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
          <p>A color that symbolizes trust, credibility, professionalism, and confidence. In the world of finance, blue reflects stability, transparency, and reliability—qualities that define our approach to delivering thoughtful, long-term financial solutions and empowering clients with clarity, assurance, and peace of mind.</p>
          <button>Switching Financial Advisor</button>
        </div>
        <div className="column">
          <div className="icon-title-wrapper">
            <img src="/ant-1.png" alt="Ant Icon" className="section-icons" />
          </div>
          <p>Ants represent discipline, persistence, and teamwork. Like consistent savings and steady investing, they embody dedication, resilience, and unity—core traits that mirror our unwavering commitment to helping clients build enduring, sustainable wealth through structured, goal-driven financial planning and collaboration.</p>
          <button>Looking for a Financial Advisor</button>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="core-values-section" data-aos="fade-up">
        <div className="core-values-wrapper">
          <div className="core-values-circle">
            <span>CORE<br />VALUES</span>
          </div>
          <div className="core-values-list">
            {coreValues.map((value, i) => (
              <div className="core-value-item" key={i} style={{ top: `${yOffsets[i] - 38}px` }}>
                <div className="core-value-icon" style={{ borderColor: colors[i], color: colors[i] }}>
                  {coreIcons[i]}
                </div>
                <div className="core-value-content">
                  <div className="core-value-title" style={{ backgroundColor: bgColors[i] }}>
                    {value}
                  </div>
                </div>
              </div>
            ))}
          </div>

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
        <div className="bubbles">
          {[...Array(10)].map((_, i) => <div key={i} className={`bubble bubble${i + 1}`}></div>)}
        </div>
        <div className="mission mission-vision-card">
          <div className="mission-vision-content">
            <div className="icon-circle mission-icon"><FaLightbulb /></div>
            <h2>MISSION</h2>
            <span className="bold-text">We don't sell, we educate.</span>
            <p>Blueant Finserv is committed to creating a financially educated community where millions of individuals are empowered to utilize every rupee of their hard-earned money.</p>
          </div>
        </div>
        <div className="vision mission-vision-card">
          <div className="mission-vision-content">
            <div className="icon-circle vision-icon"><FaEye /></div>
            <h2>VISION</h2>
            <span className="bold-text">We don't push, we guide</span>
            <p>Blueant Finserv envisions a future where financial security is accessible to all, empowering individuals to make small, informed, and confident investment decisions for lasting, long-term stability.</p>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="why-us-section" data-aos="fade-up">
        <h2 className="why-us-heading">Why Choose Blueant Finserv?</h2>
        <div className="why-us-cards">
          {whyUsPoints.map((point, i) => (
            <div className="why-us-card" key={i}>
              <div className="why-us-icon">{point.icon}</div>
              <h3 dangerouslySetInnerHTML={{ __html: point.title }} />
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <TeamSection /> {/* Added TeamSection here */}

    </div>
  );
}

export default AboutPage;
