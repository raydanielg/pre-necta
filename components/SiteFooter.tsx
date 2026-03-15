import Link from "next/link";
import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.copyright}>
          &copy; {currentYear} MOCK EXAMINATION MWANZA. All Rights Reserved.
        </div>
        <div className={styles.designer}>
          <Link href="/developers" className={styles.devLink}>
            &gt; Developers
          </Link>
          <span className={styles.separator}>|</span>
          Designed by{" "}
          <span className={styles.noniText}>Noni</span>
        </div>
      </div>
    </footer>
  );
}
