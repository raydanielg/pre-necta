import Link from "next/link";
import styles from "./NotFound.module.css";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.bgAnimation}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
      
      <div className={styles.content}>
        <h1 className={styles.errorCode}>404</h1>
        <div className={styles.divider}></div>
        <h2 className={styles.title}>Ukurasa Haupatikani</h2>
        <p className={styles.description}>
          Samahani, ukurasa unaoutafuta haupo au umehamishwa. Tafadhali rudi mwanzo au utumie menu kupata unachotaka.
        </p>
        
        <div className={styles.buttonGroup}>
          <Link href="/" className={styles.homeBtn}>
            <Home size={20} />
            <span>Rudi Nyumbani</span>
          </Link>
          <Link href="/reports" className={styles.secondaryBtn}>
            <Search size={20} />
            <span>Angalia Ripoti</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
