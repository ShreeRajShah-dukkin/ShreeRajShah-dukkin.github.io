import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

// words that cycle in the hero — feels personal, not templated
const roles = [
  "backend developer",
  "systems thinker",
  "problem finder",
  "careful builder",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setRoleIndex((i) => (i + 1) % roles.length);
        setFading(false);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="top" className={styles.hero}>
      {/* Subtle ruled lines — like a notebook page */}
      <div className={styles.ruledLines} aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className={styles.ruledLine} style={{ animationDelay: `${i * 0.06}s` }} />
        ))}
      </div>

      <div className={`${styles.content} ${mounted ? styles.visible : ""}`}>
        {/* eyebrow */}
        <p className={styles.eyebrow}>
          <span className={styles.eyebrowDot} />
          software engineer
        </p>

        {/* name block */}
        <div className={styles.nameBlock}>
          <h1 className={styles.name}>
            Shree<br />
            <em>Raj</em>
          </h1>

          {/* role cycler */}
          <div className={styles.roleWrap}>
            <span className={`${styles.role} ${fading ? styles.roleFading : ""}`}>
              {roles[roleIndex]}
            </span>
            <span className={styles.cursor} aria-hidden="true">_</span>
          </div>
        </div>

        {/* intro — sounds like a person wrote it */}
        <p className={styles.intro}>
          I build systems that solve real problems and keep working over time.
        </p>

        {/* CTAs */}
        <div className={styles.actions}>
          <a href="#projects" className={styles.btnPrimary}>
            see my work
          </a>
          <a
            href="https://github.com/ShreeRajShah-dukkin"
            target="_blank"
            rel="noreferrer"
            className={styles.btnGhost}
          >
            github ↗
          </a>
          <a href="#contact" className={styles.btnGhost}>
            get in touch
          </a>
        </div>
      </div>

      {/* Scroll nudge */}
      <div className={styles.scrollNudge} aria-hidden="true">
        <div className={styles.scrollLine} />
        <span className={styles.scrollLabel}>scroll</span>
      </div>
    </section>
  );
}
