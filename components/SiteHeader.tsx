import Link from "next/link";
import Image from "next/image";
import styles from "./SiteHeader.module.css";

export default function SiteHeader() {
  return (
    <header className={styles.siteHeader}>
      <div className={styles.siteHeaderTop}>
        {/* Left logo */}
        <div className={styles.logoWrap}>
          <Image
            src="/logo/ngao.png"
            alt="Tanzania Coat of Arms"
            width={60}
            height={66}
            className={styles.headerLogo}
            priority
          />
        </div>

        {/* Centre text */}
        <div className={styles.siteHeaderCenter}>
          <div className={styles.siteTitle}>
            PRE NECTA MWANZA FORM SIX EXAMINATION RESULTS 2026
          </div>
          <div className={styles.siteSubtitle}>MWANZA REGION</div>
          <div className={styles.headerLinks}>
            <Link href="/" className={styles.navLink}>ALL CENTRES</Link>
            <Link href="/reports" className={styles.navLink}>REPORTS</Link>
          </div>
        </div>

        {/* Right logo */}
        <div className={styles.logoWrap}>
          <Image
            src="/logo/thumb_33_102x110_0_0_crop.png"
            alt="Ilemela Municipal Council"
            width={60}
            height={66}
            className={styles.headerLogo}
            priority
          />
        </div>
      </div>

      {/* Marquee announcement */}
      <div className={styles.announcement}>
        <div className="marquee-wrapper">
          <span className="marquee-inner">
            Matokeo ya PRE NECTA MWANZA, Kidato cha Sita 2026 yametangazwa –
            Tafadhali tumia kifaa cha utafutaji chini kubaini shule
            unayotaka.
          </span>
        </div>
      </div>
    </header>
  );
}
