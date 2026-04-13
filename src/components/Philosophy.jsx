import { useInView } from "../hooks/useInView";
import styles from "./Philosophy.module.css";

const lines = [
  {
    num: "01",
    heading: "Understand the problem first.",
    body: "Half the systems I've seen fail weren't broken — they were solving the wrong problem. I spend more time asking questions than writing code.",
  },
  {
    num: "02",
    heading: "Complexity is a choice.",
    body: "Every abstraction has a cost. I try to add them deliberately, not defensively. Simple systems break in simple ways.",
  },
  {
    num: "03",
    heading: "Reliability over cleverness.",
    body: "Clever code is fun to write and painful to maintain. I'd rather have something boring that works at 3am than something elegant that doesn't.",
  },
];

export default function Philosophy() {
  const [ref, visible] = useInView();

  return (
    <section className={styles.section}>
      <div
        ref={ref}
        className={`${styles.header} ${visible ? styles.visible : ""}`}
      >
        <span className={styles.eyebrow}>on building</span>
        <h2 className={styles.heading}>
          How I think<br />
          <em>about the work</em>
        </h2>
      </div>

      <div className={styles.lines}>
        {lines.map((line, i) => (
          <PhilosophyLine key={line.num} line={line} index={i} />
        ))}
      </div>
    </section>
  );
}

function PhilosophyLine({ line, index }) {
  const [ref, visible] = useInView(0.2);

  return (
    <div
      ref={ref}
      className={`${styles.line} ${visible ? styles.lineVisible : ""}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      <span className={styles.lineNum}>{line.num}</span>
      <div className={styles.lineContent}>
        <h3 className={styles.lineHeading}>{line.heading}</h3>
        <p className={styles.lineBody}>{line.body}</p>
      </div>
    </div>
  );
}
