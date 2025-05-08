import React from 'react';
import './ContactUs.css';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { 
     FaFacebookF,
     FaInstagram, 
     FaXTwitter, 
     FaYoutube, 
     FaLinkedinIn,
} from 'react-icons/fa6';
const ContactUs = () => {
  return (
    <div className="contact-container">

      {/* Hero Section */}
      <div className="heros-section">
        <div className="hero-overlay">
          <h1>Contact Us</h1>
        </div>
      </div>

      {/* Contact Header */}
      <div className="contact-header">
        <p>We’d Love to Hear From You.</p>
      </div>

      {/* Social Media Icons */}
      {/* <div className="partner-logos social-icons">
        <FaFacebookF className="icon" />
        <FaInstagram className="icon" />
        <FaXTwitter className="icon" />
        <FaYoutube className="icon" />
        <FaLinkedinIn className="icon" />
      </div> */}

      {/* Form & Address */}
      <div className="form-section">
        <form className="contact-form">
          <div className="form-row">
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone" />
          </div>
          <input type="text" placeholder="Name" />
          <textarea placeholder="Message" rows="4"></textarea>
          <button type="submit">Submit Button</button>
        </form>

        <div className="newsletter">
          <h3>Our Address</h3>
          <div className="address-block">
            <FaMapMarkerAlt className="icon" />
            <p>Unit-I: H-113 Ground Floor, Sector-63, Noida, Uttar Pradesh - 201301</p>
          </div>
          <div className="address-block">
            <FaMapMarkerAlt className="icon" />
            <p>Unit-II: 738 F-2, 1st Floor, Niti Khand-1, Indirapuram, Ghaziabad, U.P. - 201014</p>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="contact-info">
        <div className="info-box">
          <FaPhoneAlt className="icon" />
          <p>+91 999-021-8899</p>
        </div>
        <div className="info-box2">
          <FaEnvelope className="icon" />
          <p>care@blueantindia.com</p>
        </div>
        <div className="info-box">
          <FaWhatsapp className="icon" />
          <p>+91 999-021-8899</p>
        </div>
      </div>

      {/* Google Map */}
      <div className="map-container">
        <h3>We’re Here — View Map</h3>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.6114248545314!2d77.36279497444579!3d28.641405883679596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb524c445edb%3A0xbfc5e3118468c30f!2sBLUEANT%20FINSERV%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1741677489276!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
        </iframe>

      </div>
    </div>
  );
};

export default ContactUs;
