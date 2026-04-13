import styles from "./Footer.module.css";

const socials = [
  { label: "github",   href: "https://github.com" },
  { label: "linkedin", href: "https://linkedin.com" },
  { label: "email",    href: "mailto:hello@shreeraj.dev" },
];

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.left}>
          <p className={styles.tagline}>
            Reach out for collaboration.
          </p>
        </div>

        <div className={styles.right}>
          <p className={styles.contactLabel}>reach me at</p>
          <a href="mailto:hello@shreeraj.dev" className={styles.email}>
            hello@shreeraj.dev
          </a>
          <div className={styles.socials}>
            {socials.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className={styles.social}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span className={styles.name}>Shree Raj</span>
      </div>
    </footer>
  );
}
