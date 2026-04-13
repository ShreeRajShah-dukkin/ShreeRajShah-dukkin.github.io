import { useInView } from "../hooks/useInView";
import { skills } from "../data/skills";
import styles from "./Skills.module.css";

export default function Skills() {
  const [ref, visible] = useInView();

  return (
    <section id="skills" className={styles.section}>
      <div
        ref={ref}
        className={`${styles.header} ${visible ? styles.visible : ""}`}
      >
        <span className={styles.eyebrow}>capabilities</span>
        <h2 className={styles.heading}>
          What I reach for<br />
          <em>and why</em>
        </h2>
      </div>

      <div className={styles.grid}>
        {skills.map((group, i) => (
          <SkillGroup key={group.group} group={group} index={i} />
        ))}
      </div>
    </section>
  );
}

function SkillGroup({ group, index }) {
  const [ref, visible] = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`${styles.group} ${visible ? styles.groupVisible : ""}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className={styles.groupHead}>
        <h3 className={styles.groupTitle}>{group.group}</h3>
        <p className={styles.groupDesc}>{group.description}</p>
      </div>
      <ul className={styles.list}>
        {group.items.map((item) => (
          <li key={item} className={styles.item}>
            <span className={styles.dot} aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
