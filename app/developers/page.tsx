'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Code, Copy, Check, Terminal, Globe, Cpu, Layout, BookOpen } from 'lucide-react';
import styles from './Developers.module.css';

export default function DevelopersPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const embedCodes = [
    {
      id: 'full-portal',
      title: 'Full Results Portal',
      description: 'Embed the entire results portal into your website using an iframe.',
      code: '<iframe src="https://pre-necta-mwanza.vercel.app/" width="100%" height="800px" frameborder="0"></iframe>',
      icon: <Globe className={styles.cardIcon} />
    },
    {
      id: 'reports-only',
      title: 'Reports & Statistics',
      description: 'Show only the reports and analysis section on your page.',
      code: '<iframe src="https://pre-necta-mwanza.vercel.app/reports/" width="100%" height="600px" frameborder="0"></iframe>',
      icon: <Cpu className={styles.cardIcon} />
    }
  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Header Section */}
      <header className={styles.header}>
        <div className={styles.container}>
          <Link href="/" className={styles.backLink}>
            ← Back to Portal
          </Link>
          <div className={styles.headerContent}>
            <Terminal size={48} className={styles.mainIcon} />
            <h1 className={styles.title}>Developer Documentation</h1>
            <div className={styles.subtitle}>
              Integrate MOCK EXAMINATION MWANZA 2026 results into your own school portal or educational website.
            </div>
          </div>
        </div>
      </header>

      <main className={styles.container}>
        {/* Quick Start Section */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <BookOpen className={styles.sectionIcon} />
            <h2>Quick Integration</h2>
          </div>
          <p className={styles.sectionDesc}>
            Use the following embed codes to display results directly on your platform. 
            All links are optimized for performance and mobile responsiveness.
          </p>

          <div className={styles.grid}>
            {embedCodes.map((item) => (
              <div key={item.id} className={styles.card}>
                <div className={styles.cardHeader}>
                  {item.icon}
                  <h3>{item.title}</h3>
                </div>
                <p>{item.description}</p>
                <div className={styles.codeBox}>
                  <code>{item.code}</code>
                  <button 
                    onClick={() => copyToClipboard(item.code, item.id)}
                    className={styles.copyBtn}
                    title="Copy Code"
                  >
                    {copiedId === item.id ? <Check size={18} color="#22c55e" /> : <Copy size={18} />}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Customization Section */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <Layout className={styles.sectionIcon} />
            <h2>Implementation Guide</h2>
          </div>
          <div className={styles.guideCard}>
            <ul className={styles.guideList}>
              <li>
                <strong>Responsive Design:</strong> Our portal is fully responsive. 
                When embedding, ensure your container has `width: 100%` for the best mobile experience.
              </li>
              <li>
                <strong>Direct Linking:</strong> You can link directly to specific school results by appending the school ID to the URL (e.g., `/pdf?file=...`).
              </li>
              <li>
                <strong>Static Hosting:</strong> This portal is built with Next.js static export, ensuring 99.9% uptime and lightning-fast load speeds.
              </li>
            </ul>
          </div>
        </section>

        {/* Preview Section */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <Code className={styles.sectionIcon} />
            <h2>Live Preview</h2>
          </div>
          <div className={styles.previewContainer}>
            <div className={styles.previewHeader}>
              <div className={styles.dots}>
                <span></span><span></span><span></span>
              </div>
              <div className={styles.urlBar}>your-website.com/results</div>
            </div>
            <div className={styles.previewFrame}>
              <div className={styles.placeholderUI}>
                <div className={styles.pulseBar} style={{ width: '40%' }}></div>
                <div className={styles.pulseGrid}>
                  {[1, 2, 3, 4].map(i => <div key={i} className={styles.pulseCard}></div>)}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.pageFooter}>
        <p>Technical support provided by Zerixa Technologies</p>
      </footer>
    </div>
  );
}
