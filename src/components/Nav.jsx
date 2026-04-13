import { useEffect, useState } from "react";
import styles from "./Nav.module.css";

const links = [
  { label: "work",    href: "#projects" },
  { label: "skills",  href: "#skills" },
  { label: "contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <a href="#top" className={styles.logo}>
        <span className={styles.logoMark}>SR</span>
        <span className={styles.logoDot} />
      </a>

      <nav className={styles.links}>
        {links.map(({ label, href }) => (
          <a key={label} href={href} className={styles.link}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
