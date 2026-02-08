import Image from "next/image";
import styles from "./About.module.css";
import SocialLinks from "@/components/SocialLinks";

/**
 * About section component.
 * Displays the professional summary, profile image, and career statistics.
 *
 * @returns {JSX.Element} The About Me section.
 *
 * @author Tristan Mahinay
 */
export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className={styles.aboutContent}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/profile_latest.jpg"
              alt="Reynaldo John Tristan Mahinay Jr."
              width={300}
              height={300}
              className={styles.profileImage}
              priority
            />
            <div className={styles.imageDecor}></div>
          </div>
          <div className={styles.aboutText}>
            <h3>Tech Community Leader & Open-source Committer</h3>
            <p>
              Tristan Mahinay is a results-driven technical leader specializing in
              enterprise software development, API design, and microservices. With
              deep expertise in modern Java and cloud technologies, he has
              successfully led end-to-end projects, driving innovation,
              efficiency, and cost savings for businesses.
            </p>
            <p>
              A recognized Full Stack Capability Leader, Innovations Leader and mentor, Tristan is
              passionate about building strong developer communities, leading the
              Java User Group Philippines and Apache Kafka Manila, and sharing insights through blogging
              and industry discussions. His proven track record of delivering
              high-impact solutions makes him a valuable asset in driving
              technology transformation.
            </p>
            <div className={styles.careerGlance}>
              <h4>Career at a Glance</h4>
              <div className={styles.glanceGrid}>
                <div className={styles.glanceItem}>
                  <span className={styles.glanceValue}>8+</span>
                  <span className={styles.glanceLabel}>Years Exp.</span>
                </div>
                <div className={styles.glanceItem}>
                  <span className={styles.glanceValue}>3</span>
                  <span className={styles.glanceLabel}>Giant Projects</span>
                </div>
                <div className={styles.glanceItem}>
                  <span className={styles.glanceValue}>10+</span>
                  <span className={styles.glanceLabel}>Contributions</span>
                </div>
              </div>
            </div>
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
