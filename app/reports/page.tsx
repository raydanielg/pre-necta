import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { reports } from "@/data/reports";
import styles from "./Reports.module.css";
import { BarChart3, TrendingUp, ClipboardList, ArrowRight, ArrowUpRight } from "lucide-react";

export default function ReportsPage() {
  const getIcon = (report: any) => {
    if (report.id === "mobility-analysis") {
      return <ArrowUpRight className={styles.icon} />;
    }
    switch (report.category) {
      case "ranking":
        return <BarChart3 className={styles.icon} />;
      case "performance":
        return <TrendingUp className={styles.icon} />;
      case "other":
        return <ClipboardList className={styles.icon} />;
      default:
        return <ClipboardList className={styles.icon} />;
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <SiteHeader />
      <main className={styles.container}>
        <div className={styles.headerSection}>
          <h1 className={styles.title}>EXAMINATION REPORTS 2026</h1>
          <p className={styles.subtitle}>
            Select a category below to view detailed examination reports and rankings.
          </p>
        </div>

        <div className={styles.grid}>
          {reports.map((report) => (
            <div key={report.id} className={styles.card}>
              <div className={styles.cardIconWrapper}>
                {getIcon(report)}
              </div>
              <h2 className={styles.cardTitle}>{report.title}</h2>
              <p className={styles.cardDescription}>{report.description}</p>
              <Link 
                href={report.id === "school-ranks" ? "/reports/school-ranks" : 
                      report.id === "mobility-analysis" ? "/reports/mobility" : 
                      report.id === "subject-performance" ? "/reports/subject-performance" :
                      report.id === "school-stats" ? "/reports/school-statistics" :
                      report.id === "student-stats" ? "/reports/student-statistics" :
                      `/pdf?file=${encodeURIComponent(report.file)}`}
                className={styles.viewBtn}
              >
                <span>View {report.id === "school-ranks" ? "Ranks" : "Report"}</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
