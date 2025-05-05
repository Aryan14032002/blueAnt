import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

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
      <Link to={"/"} style={{textDecoration:"none"}}>
          <img src="blueAnt.png" alt="Logo" />
      </Link>
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
            <Link style={{textDecoration:"none"}} to={"./"}><li>HOME</li></Link>
            <Link style={{textDecoration:"none"}} to={"./about"}><li>ABOUT</li></Link>
            <Link style={{textDecoration:"none"}} to={"./service"}><li>SERVICES</li></Link>
            <Link style={{textDecoration:"none"}} to={"./"}><li>WORKSHOP</li></Link>
            <Link style={{textDecoration:"none"}} to={"./"}><li>CALCULATORS</li></Link>
            <Link style={{textDecoration:"none"}} to={"./"}><li>BLOG</li></Link>
            <a href="https://blueantindia.investwell.app/app/#/login" style={{textDecoration:"none"}}><li>PORTFOLIO</li></a>
            <a href="https://newtrade.sharekhan.com/" style={{textDecoration:"none"}}><li >STOCK </li></a>
            <Link style={{textDecoration:"none"}} to={"./"}><li>CONTACT</li></Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
