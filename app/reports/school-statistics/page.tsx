"use client";

import { useState } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { schoolStats, overallSchoolStatsPdf } from "@/data/schoolStats";
import styles from "./SchoolStats.module.css";
import { BarChart3, FileText, ExternalLink, GraduationCap, Building2, Landmark, Trophy } from "lucide-react";

export default function SchoolStatsPage() {
  return (
    <div className={styles.pageWrapper}>
      <SiteHeader />
      <main className={styles.container}>
        <div className={styles.headerSection}>
          <h1 className={styles.title}>SCHOOL STATISTICS 2026</h1>
          <p className={styles.subtitle}>
            Uchambuzi wa takwimu za shule zote, zikigawanywa katika makundi ya Serikali na Binafsi.
          </p>
        </div>

        <div className={styles.layout}>
          {/* Column 1: Overall Statistics */}
          <div className={styles.columnGeneral}>
            <div className={styles.columnTitle}>
              <BarChart3 className={styles.titleIcon} size={24} />
              <h2>OVERALL STATISTICS</h2>
            </div>
            <div className={styles.generalCard}>
              <div className={styles.cardInfo}>
                <Trophy size={40} className={styles.bigIcon} />
                <h3>10 Best Schools</h3>
                <p>Orodha ya shule 10 bora zilizofanya vizuri zaidi katika mtihani wa Kidato cha Sita (F6).</p>
              </div>
              <Link
                href={`/pdf?file=${encodeURIComponent(overallSchoolStatsPdf)}`}
                className={styles.mainViewBtn}
              >
                View 10 Best Schools
              </Link>
            </div>
          </div>

          {/* Column 2: Specific School Types */}
          <div className={styles.columnSubjects}>
            <div className={styles.columnTitle}>
              <GraduationCap className={styles.titleIcon} size={24} />
              <h2>SCHOOL TYPE ANALYSIS</h2>
            </div>
            
            <div className={styles.subjectList}>
              {schoolStats.map((stat) => (
                <Link
                  key={stat.id}
                  href={`/pdf?file=${encodeURIComponent(stat.pdf)}`}
                  className={styles.subjectRow}
                >
                  <div className={styles.subjectInfo}>
                    <div className={styles.typeIconWrapper}>
                      {stat.type === "GOVERNMENT" ? <Landmark size={20} /> : <Building2 size={20} />}
                      <span className={styles.subjectCode}>{stat.type}</span>
                    </div>
                    <span className={styles.subjectName}>{stat.name}</span>
                  </div>
                  <ExternalLink size={18} className={styles.rowIcon} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
