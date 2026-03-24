"use client";

import { useState, useMemo } from "react";
import { schools } from "@/data/schools";
import styles from "./SchoolsGrid.module.css";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function SchoolsGrid() {
  const [searchText, setSearchText] = useState("");
  const [activeLetter, setActiveLetter] = useState("ALL");

  const filtered = useMemo(() => {
    const text = searchText.toLowerCase();
    return schools.filter((s) => {
      const matchesText =
        !text ||
        s.name.toLowerCase().includes(text) ||
        s.code.toLowerCase().includes(text);

      let matchesFilter = false;
      if (activeLetter === "ALL") {
        matchesFilter = !s.isPC;
      } else if (activeLetter === "PC") {
        matchesFilter = !!s.isPC;
      } else {
        matchesFilter = s.name.charAt(0).toUpperCase() === activeLetter;
      }

      return matchesText && matchesFilter;
    });
  }, [searchText, activeLetter]);

  /* split filtered list into 3 columns */
  const colSize = Math.ceil(filtered.length / 3);
  const col1 = filtered.slice(0, colSize);
  const col2 = filtered.slice(colSize, colSize * 2);
  const col3 = filtered.slice(colSize * 2);

  return (
    <div className={styles.pageWrapper}>
      {/* ── Filters ── */}
      <div className={styles.filtersWrapper}>
        <div className={styles.headerSearch}>
          <input
            type="text"
            placeholder="Andika jina la shule, mf. 'Nyakato' au 'Girls'"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className={styles.searchInput}
            aria-label="Search school"
          />
          {searchText && (
            <button
              className={styles.clearBtn}
              onClick={() => setSearchText("")}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        <div className={styles.alphaFilterBar}>
          <button
            className={`${styles.alphaLink} ${activeLetter === "ALL" ? styles.active : ""}`}
            onClick={() => setActiveLetter("ALL")}
          >
            ALL CENTRES
          </button>
          <button
            className={`${styles.alphaLink} ${activeLetter === "PC" ? styles.active : ""}`}
            onClick={() => setActiveLetter("PC")}
          >
            PRIVATE CANDIDATES (PC)
          </button>
          <span className={styles.alphaLabel}>
            CLICK ANY LETTER BELOW TO FILTER SCHOOLS BY ALPHABET
          </span>
          <div className={styles.alphaLetters}>
            {ALPHABET.map((letter) => (
              <button
                key={letter}
                className={`${styles.alphaLink} ${activeLetter === letter ? styles.active : ""}`}
                onClick={() => setActiveLetter(letter)}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 && (
          <p className={styles.noResults}>
            Hakuna shule iliyoonekana kwa utafutaji huu.
          </p>
        )}
      </div>

      {/* ── Schools grid ── */}
      {filtered.length > 0 && (
        <div className={styles.container}>
          <SchoolColumn items={col1} colorClass={styles.blue} />
          <SchoolColumn items={col2} colorClass={styles.pink} />
          <SchoolColumn items={col3} colorClass={styles.green} />
        </div>
      )}
    </div>
  );
}

function SchoolColumn({
  items,
  colorClass,
}: {
  items: typeof schools;
  colorClass: string;
}) {
  return (
    <div className={`${styles.column} ${colorClass}`}>
      {items.map((school) => (
        <div key={school.code} className={styles.item}>
          <a href={`/pdf?file=${encodeURIComponent(school.file)}`}>
            {school.code} – {school.name}
          </a>
        </div>
      ))}
    </div>
  );
}
