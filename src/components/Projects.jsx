import { useInView } from "../hooks/useInView";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

export default function Projects() {
  const [ref, visible] = useInView();

  return (
    <section id="projects" className={styles.section}>
      <div
        ref={ref}
        className={`${styles.header} ${visible ? styles.visible : ""}`}
      >
        <span className={styles.eyebrow}>selected work</span>
        <h2 className={styles.heading}>
          Things I've<br />
          <em>actually built</em>
        </h2>
        <p className={styles.subtext}>
          Not demos. Not tutorials. Real systems with real constraints.
        </p>
      </div>

      <div className={styles.grid}>
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
