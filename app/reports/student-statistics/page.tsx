"use client";

import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { studentStats } from "@/data/studentStats";
import styles from "./StudentStats.module.css";
import { Trophy, Users, FileText, ArrowRight } from "lucide-react";

export default function StudentStatsPage() {
  return (
    <div className={styles.pageWrapper}>
      <SiteHeader />
      <main className={styles.container}>
        <div className={styles.headerSection}>
          <h1 className={styles.title}>STUDENT STATISTICS 2026</h1>
          <p className={styles.subtitle}>
            Uchambuzi wa takwimu na orodha ya wanafunzi waliofanya vizuri zaidi katika mkoa wa Mwanza.
          </p>
        </div>

        <div className={styles.grid}>
          {studentStats.map((stat) => (
            <div key={stat.id} className={styles.card}>
              <div className={styles.cardIconWrapper}>
                {stat.id === "best-overall" ? <Trophy size={32} /> : <Users size={32} />}
              </div>
              <h2 className={styles.cardTitle}>{stat.name}</h2>
              <p className={styles.cardDescription}>{stat.description}</p>
              <Link
                href={`/pdf?file=${encodeURIComponent(stat.pdf)}`}
                className={styles.viewBtn}
              >
                <span>View {stat.id === "best-overall" ? "Overall" : "Subject-wise"}</span>
                <FileText size={18} />
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
