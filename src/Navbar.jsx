import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>
        <img src="blueAnt.png" alt="Logo" />
      </div>
      <div className={styles.menuWrapper}>
        <div className={styles.contactIcons}>
          <a href="https://wa.me/999-021-8899" className={styles.iconLink}>
            <img src="whatsapp icon.png" alt="WhatsApp" className={styles.iconImage} />
          </a>
          <a href="tel: 999-021-8899" className={styles.iconLink}>
            <img src="call icon.png" alt="Phone" className={styles.iconImage} />
          </a>
          <p style={{ marginLeft: "-15px", color: "black", fontWeight: "bolder" }}>999-021-8899</p>
        </div>
        <div className={styles.menuContainer}>
          <div className={styles.menuButton}>
            <span className={styles.menuText}>MENU</span>
            <div className={styles.menuIcon}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <ul className={styles.dropdown}>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SERVICES</li>
            <li>WORKSHOP</li>
            <li>CALCULATORS</li>
            <li>BLOG</li>
            <li>PORTFOLIO</li>
            <li>STOCK</li>
            <li>CONTACT</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
