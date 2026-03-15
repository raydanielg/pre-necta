"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { subjectPerformances, generalSubjectPdf } from "@/data/subjectPerformance";
import styles from "./SubjectPerformance.module.css";
import { Search, Trophy, FileText, ExternalLink, BookOpen } from "lucide-react";

export default function SubjectPerformancePage() {
  const [searchText, setSearchText] = useState("");

  const filteredSubjects = useMemo(() => {
    const text = searchText.toLowerCase();
    return subjectPerformances.filter(
      (s) =>
        s.name.toLowerCase().includes(text) ||
        s.code.toLowerCase().includes(text)
    );
  }, [searchText]);

  return (
    <div className={styles.pageWrapper}>
      <SiteHeader />
      <main className={styles.container}>
        <div className={styles.headerSection}>
          <h1 className={styles.title}>SUBJECT PERFORMANCE 2026</h1>
          <p className={styles.subtitle}>
            Uchambuzi wa ufaulu kwa masomo yote (General) na masomo maalum (Specific Subjects).
          </p>
        </div>

        <div className={styles.layout}>
          {/* Column 1: General Subject Ranking */}
          <div className={styles.columnGeneral}>
            <div className={styles.columnTitle}>
              <Trophy className={styles.titleIcon} size={24} />
              <h2>GENERAL PERFORMANCE</h2>
            </div>
            <div className={styles.generalCard}>
              <div className={styles.cardInfo}>
                <FileText size={40} className={styles.bigIcon} />
                <h3>All Subjects Ranking</h3>
                <p>Uchambuzi wa ufaulu wa masomo yote kwa ujumla katika mkoa wa Mwanza.</p>
              </div>
              <Link
                href={`/pdf?file=${encodeURIComponent(generalSubjectPdf)}`}
                className={styles.mainViewBtn}
              >
                View General Subject Ranking
              </Link>
            </div>
          </div>

          {/* Column 2: Specific Subject Analysis */}
          <div className={styles.columnSubjects}>
            <div className={styles.columnTitle}>
              <BookOpen className={styles.titleIcon} size={24} />
              <h2>SUBJECT SPECIFIC ANALYSIS</h2>
            </div>
            
            <div className={styles.searchWrapper}>
              <Search className={styles.searchIcon} size={20} />
              <input
                type="text"
                placeholder="Tafuta somo (mf. Physics, Chemistry...)"
                className={styles.searchInput}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>

            <div className={styles.subjectList}>
              {filteredSubjects.map((subject) => (
                <Link
                  key={subject.code}
                  href={`/pdf?file=${encodeURIComponent(subject.pdf)}`}
                  className={styles.subjectRow}
                >
                  <div className={styles.subjectInfo}>
                    <span className={styles.subjectCode}>{subject.code}</span>
                    <span className={styles.subjectName}>{subject.name}</span>
                  </div>
                  <ExternalLink size={18} className={styles.rowIcon} />
                </Link>
              ))}
              {filteredSubjects.length === 0 && (
                <div className={styles.noResults}>
                  Hakuna somo lililopatikana kwa "{searchText}"
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
