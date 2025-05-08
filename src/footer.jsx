import React from "react";
import "./Footer.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Social Icons - Top Right */}
        <div className="footer-socials">
          <i className="fa-brands fa-square-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-square-x-twitter"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-linkedin"></i>
        </div>

        {/* Left Section */}
        <div className="footer-left">
          <img src="blueAnt.png" alt="BlueAnt Logo" className="footer-logo" />
          <p className="footer-description">
            We at BLUEANT help you identifying appropriate and tax compliant investing opportunities to help you to fulfill your goals.
          </p>
        </div>

        {/* Services Section */}
        <div className="footer-services">
          <h3>Our Services</h3>
          <ul>
            <li>Taxes</li>
            <li>Budgeting</li>
            <li>Retirement</li>
            <li>Will & Legacy</li>
            <li>Loan Advisory</li>
            <li>Insurance Advisory</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p><i className="fas fa-map-marker-alt"></i> Unit-I: H-113 Ground Floor Sector-63 Noida Uttar Pradesh-201301</p>
          <p><i className="fas fa-map-marker-alt"></i> Unit-II: 738 F-2 1st Floor Niti Khand-1 Indirapuram Ghaziabad U.P. 201014 (India)</p>
          <p><i className="fas fa-phone-alt"></i> 999-021-8899</p>
          <p><i className="fas fa-envelope"></i> care@blueantindia.com</p>
        </div>
      </div>

      {/* Now inside footer */}
      <div className="footer-bottom">
        <p>Copyright © 2025 BlueAnt Finserv. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
