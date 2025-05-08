import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./stats.module.scss";

const stats = [
  { title: "Years of Exp.", value: 12 },
  { title: "Cr. of AUM", value: 700 },
  { title: "No. of Clients", value: 2600 },
  { title: " Employees", value: 50 },
];

function Stats() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const { ref, inView } = useInView({ threshold: 0.3 });

  useEffect(() => {
    let counterInterval;

    if (inView) {
      const duration = 1000;
      const steps = 60;
      const interval = duration / steps;

      const increments = stats.map(stat => stat.value / steps);
      let currentStep = 0;

      counterInterval = setInterval(() => {
        setCounts(prev =>
          prev.map((count, i) => {
            const next = count + increments[i];
            return next >= stats[i].value ? stats[i].value : next;
          })
        );
        currentStep++;
        if (currentStep >= steps) {
          clearInterval(counterInterval);
          setCounts(stats.map(stat => stat.value)); // Snap to exact
        }
      }, interval);
    } else {
      // Reset to zero when not in view
      setCounts(stats.map(() => 0));
    }

    return () => clearInterval(counterInterval);
  }, [inView]);

  return (
    <div ref={ref} className={styles.stats}>
      <div className={styles.redStrip}>
        <div className={styles.statsWrapper}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <h3>{Math.round(counts[index])}+</h3>
              <p>{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stats;
