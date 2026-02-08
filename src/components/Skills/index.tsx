import styles from "./Skills.module.css";


import { skillCategories } from "@/data/skills";

/**
 * Skills section component.
 * Displays a categorized list of technical skills and technologies.
 *
 * @returns {JSX.Element} The Skills section.
 *
 * @author Tristan Mahinay
 */
export default function Skills() {
  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className={styles.skillsGrid}>
          {skillCategories.map((category, index) => (
            <div key={index} className={styles.skillCategory}>
              <h3>{category.title}</h3>
              <ul className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className={styles.skillItem}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
