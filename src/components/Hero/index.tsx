import styles from "./Hero.module.css";

/**
 * Hero section component.
 * Displays the main introduction, professional title, and call-to-action buttons.
 *
 * @returns {JSX.Element} The Hero section.
 *
 * @author Tristan Mahinay
 */
export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Tristan Mahinay</h1>
        <p className={styles.heroSubtitle}>
          Tech Community Leader, Innovator & Open-source Committer
        </p>
        <p className={styles.heroDescription}>
          Building enterprise applications and contributing to open-source
          projects. Passionate about Java, Spring Boot, and cloud technologies.
        </p>
        <div className={styles.heroCta}>
          <a href="#about" className={styles.btnHeroPrimary}>
            Learn More
          </a>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
