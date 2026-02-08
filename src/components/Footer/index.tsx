import styles from "./Footer.module.css";
import SocialLinks from "@/components/SocialLinks";

/**
 * Footer component.
 * Displays copyright information and social media links.
 *
 * @returns {JSX.Element} The site footer.
 *
 * @author Tristan Mahinay
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <span className={styles.footerLogo}>Tristan Mahinay</span>
          <div className={styles.footerSocial}>
            <SocialLinks variant="light" centered />
          </div>
          <p className={styles.footerCopyright}>
            © {currentYear} Tristan Mahinay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
