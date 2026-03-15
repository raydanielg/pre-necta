"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { schoolRanks, generalRankPdf } from "@/data/schoolRanks";
import { Search, FileText, ExternalLink, GraduationCap, Trophy } from "lucide-react";
import styles from "./SchoolRanks.module.css";

export default function SchoolRanksPage() {
  const [searchText, setSearchText] = useState("");

  const filteredRanks = useMemo(() => {
    const text = searchText.toLowerCase();
    return schoolRanks.filter(
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
          <h1 className={styles.title}>SCHOOL PERFORMANCE & RANKS</h1>
          <p className={styles.subtitle}>
            Access the general regional ranking and individual school performance reports.
          </p>
        </div>

        <div className={styles.layout}>
          {/* Column 1: General Rank */}
          <div className={styles.columnGeneral}>
            <div className={styles.columnTitle}>
              <Trophy className={styles.titleIcon} size={24} />
              <h2>REGIONAL RANKING</h2>
            </div>
            <div className={styles.generalCard}>
              <div className={styles.cardInfo}>
                <FileText size={40} className={styles.bigIcon} />
                <h3>All Schools Ranking</h3>
                <p>Complete regional ranking for all participating schools in Mwanza.</p>
              </div>
              <Link
                href={`/pdf?file=${encodeURIComponent(generalRankPdf)}`}
                className={styles.mainViewBtn}
              >
                View General Ranking
              </Link>
            </div>
          </div>

          {/* Column 2: Individual Schools */}
          <div className={styles.columnSchools}>
            <div className={styles.columnTitle}>
              <GraduationCap className={styles.titleIcon} size={24} />
              <h2>SCHOOL SPECIFIC REPORTS</h2>
            </div>
            
            <div className={styles.searchWrapper}>
              <Search className={styles.searchIcon} size={20} />
              <input
                type="text"
                placeholder="Search school name or code..."
                className={styles.searchInput}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>

            <div className={styles.schoolList}>
              {filteredRanks.map((school) => (
                <Link
                  key={school.code}
                  href={`/pdf?file=${encodeURIComponent(school.pdf)}&page=last`}
                  className={styles.schoolRow}
                >
                  <div className={styles.schoolInfo}>
                    <span className={styles.schoolCode}>{school.code}</span>
                    <span className={styles.schoolName}>{school.name}</span>
                  </div>
                  <ExternalLink size={18} className={styles.rowIcon} />
                </Link>
              ))}
              {filteredRanks.length === 0 && (
                <div className={styles.noResults}>
                  No schools found matching "{searchText}"
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
