import React from "react";
import styles from "./About.module.scss";

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.main}>
        <div className={styles.left}>
          <div className={styles.title}>ABOUT</div>

          <div className={styles.tagline}>
            <img src="blueAnt.png" alt="Blueant Logo" className={styles.logo} />
            <span>A Name Rooted in Purpose</span>
            <span> and Progress</span>
          </div>

          <div className={styles.info}>
            <p>
              <span className={styles.blue}>"BLUe"</span>A color known for its trust, credibility, calmness, and professionalism.
            </p>
            <p>
              <span className={styles.ant}>"Ant"</span>A creature known for its discipline, persistence, and teamwork.
            </p>
            <p>
              Just like Ants build mighty colonies with one grain at a time, you
              too can create your Financial Empire by taking small and smart steps with the help of Blueant.
            </p>
            <p>Let<span className={styles.ants}> Blueant</span> will navigate you through the journey of building wealth.</p>
            <button className="read-more-btn">
            Read More 
          </button>
          </div>
        </div>

        <div className={styles.right}>
        <div className={styles.aboutImage}>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          width="100%" 
          height="auto"
          className={styles.video}
    >
      <source src="/Video 2.mp4" type="video/mp4" />
    </video>
  </div>
</div>
      </div>
    </div>
  );
}

export default About;
