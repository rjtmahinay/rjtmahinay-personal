import styles from "./Experience.module.css";
import { experiences } from "@/data/experience";

/**
 * Experience section component.
 * Renders a list of professional experiences using formatted cards with metrics.
 *
 * @returns {JSX.Element} The Experience section.
 *
 * @author Tristan Mahinay
 */
export default function Experience() {
  return (
    <section id="experience" className={`section ${styles.experience}`}>
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <div className={styles.header}>
                  <p className={styles.period}>{exp.period}</p>
                  <div>
                    <h3>{exp.title}</h3>
                    <p className={styles.company}>{exp.company}</p>
                  </div>
                </div>

                <div className={styles.keyImpacts}>
                  {exp.keyImpacts.map((impact, i) => (
                    <div key={i} className={styles.impactBadge}>
                      <span className={styles.impactMetric}>
                        {impact.metric}
                      </span>
                      <span className={styles.impactDesc}>
                        {impact.description}
                      </span>
                    </div>
                  ))}
                </div>

                <p className={styles.description}>{exp.description}</p>

                <ul className={styles.achievements}>
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
