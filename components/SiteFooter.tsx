import Link from "next/link";
import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.copyright}>
          &copy; {currentYear} PRE-NECTA MWANZA. All Rights Reserved.
        </div>
        <div className={styles.designer}>
          Designed by{" "}
          <Link 
            href="https://zerixa.co.tz" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.link}
          >
            Zerixa Technologies
          </Link>
        </div>
      </div>
    </footer>
  );
}
