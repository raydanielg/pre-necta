"use client";

import { useState, useMemo } from "react";
import SiteHeader from "@/components/SiteHeader";
import { mobilityData } from "@/data/mobilityData";
import { Search, ArrowUp, ArrowDown, Building2, Hash, School, BarChart2, TrendingUp, ShieldCheck } from "lucide-react";
import styles from "./Mobility.module.css";

export default function MobilityPage() {
  const [searchText, setSearchText] = useState("");

  const filteredData = useMemo(() => {
    const text = searchText.toLowerCase();
    return mobilityData.filter(
      (s) =>
        s.schoolName.toLowerCase().includes(text) ||
        s.centerNumber.toLowerCase().includes(text) ||
        s.council.toLowerCase().includes(text)
    );
  }, [searchText]);

  return (
    <div className={styles.pageWrapper}>
      <SiteHeader />
      <main className={styles.container}>
        <div className={styles.headerSection}>
          <h1 className={styles.title}>MOBILITY ANALYSIS 2026</h1>
          <p className={styles.subtitle}>
            Uchambuzi wa mabadiliko ya ufaulu (GPA) kwa kila shule ikilinganishwa na matokeo yaliyopita.
          </p>
          
          <div className={styles.searchWrapper}>
            <Search className={styles.searchIcon} size={20} />
            <input
              type="text"
              placeholder="Tafuta kwa jina la shule, namba ya kituo au halmashauri..."
              className={styles.searchInput}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.tableWrapper}>
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th><div className={styles.headerCell}><Hash size={16} /><span>NA.</span></div></th>
                  <th><div className={styles.headerCell}><Building2 size={16} /><span>HALMASHAURI</span></div></th>
                  <th><div className={styles.headerCell}><Hash size={16} /><span>KITUO</span></div></th>
                  <th><div className={styles.headerCell}><School size={16} /><span>SHULE</span></div></th>
                  <th className={styles.textCenter}><div className={styles.headerCellCenter}><BarChart2 size={16} /><span>GPA ZONAL</span></div></th>
                  <th className={styles.textCenter}><div className={styles.headerCellCenter}><TrendingUp size={16} /><span>GPA REGIONAL</span></div></th>
                  <th className={styles.textCenter}><div className={styles.headerCellCenter}><TrendingUp size={16} /><span>MOBILITY</span></div></th>
                  <th className={styles.textCenter}><div className={styles.headerCellCenter}><ShieldCheck size={16} /><span>STATUS</span></div></th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item) => (
                  <tr key={item.centerNumber} className={styles.row}>
                    <td>{item.rank}</td>
                    <td>{item.council}</td>
                    <td className={styles.centerNumber}>{item.centerNumber}</td>
                    <td className={styles.schoolName}>{item.schoolName}</td>
                    <td className={styles.textCenter}>{item.gpaTotal.toFixed(4)}</td>
                    <td className={styles.textCenter}>{item.gpaRegional.toFixed(4)}</td>
                    <td className={`${styles.textCenter} ${item.mobility < 0 ? styles.positive : styles.negative}`}>
                      {item.mobility > 0 ? `+${item.mobility.toFixed(4)}` : item.mobility.toFixed(4)}
                    </td>
                    <td className={styles.textCenter}>
                      <span className={`${styles.statusBadge} ${item.status === "IMEPANDA" ? styles.up : styles.down}`}>
                        {item.status === "IMEPANDA" ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredData.length === 0 && (
            <div className={styles.noResults}>
              Hakuna shule iliyopatikana kwa "{searchText}"
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
