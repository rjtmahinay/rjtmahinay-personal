import styles from "./Engagements.module.css";
import { engagements } from "@/data/engagements";

/**
 * Engagements section component.
 * Showcases community leadership, speaking roles, and other professional engagements.
 *
 * @returns {JSX.Element} The Engagements section.
 *
 * @author Tristan Mahinay
 */
export default function Engagements() {
  return (
    <section id="engagements" className={`section ${styles.engagements}`}>
      <div className="container">
        <h2 className="section-title">Engagements & Community</h2>
        <div className={styles.engagementsGrid}>
          {engagements.map((item, index) => (
            <div key={index} className={styles.engagementCard}>
              <div className={styles.cardHeader}>
                <h3>{item.title}</h3>
                <span className={styles.role}>{item.role}</span>
                <span className={styles.period}>{item.period}</span>
              </div>
              <p className={styles.description}>{item.description}</p>
              <div className={styles.cardFooter}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Visit Profile
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
