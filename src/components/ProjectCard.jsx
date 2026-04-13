import { useState } from "react";
import { useInView } from "../hooks/useInView";
import styles from "./ProjectCard.module.css";

const fields = [
  { key: "insight",      label: "Insight" },
  { key: "solution",     label: "What I built" },
  { key: "architecture", label: "Stack" },
  { key: "challenges",   label: "The hard part" },
  { key: "impact",       label: "What changed" },
];

export default function ProjectCard({ project, index }) {
  const [ref, visible] = useInView(0.08);
  const [open, setOpen] = useState(false);

  return (
    <article
      ref={ref}
      className={`${styles.card} ${visible ? styles.visible : ""}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      {/* Card header — always visible */}
      <header className={styles.cardHead} onClick={() => setOpen((o) => !o)}>
        <div className={styles.meta}>
          <span className={styles.year}>{project.year}</span>
          <div className={styles.tags}>
            {project.tags.map((t) => (
              <span key={t} className={styles.tag}>{t}</span>
            ))}
          </div>
        </div>

        <h3 className={styles.title}>{project.title}</h3>

        <p className={styles.problem}>{project.problem}</p>

        <button
          className={styles.toggle}
          aria-expanded={open}
          aria-label={open ? "Collapse case study" : "Expand case study"}
        >
          <span className={`${styles.toggleIcon} ${open ? styles.open : ""}`}>
            +
          </span>
          <span className={styles.toggleLabel}>
            {open ? "close" : "read case study"}
          </span>
        </button>
      </header>

      {project.repoUrl && (
        <div className={styles.repoRow}>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className={styles.repoButton}
          >
            github repo
          </a>
        </div>
      )}

      {/* Expandable body */}
      <div className={`${styles.body} ${open ? styles.bodyOpen : ""}`}>
        <div className={styles.bodyInner}>
          {fields.map(({ key, label }) => (
            <div key={key} className={styles.field}>
              <span className={styles.fieldLabel}>{label}</span>
              <p className={`${styles.fieldValue} ${key === "impact" ? styles.impact : ""}`}>
                {project[key]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
