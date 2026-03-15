"use client";

import Link from "next/link";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useSearchParams } from "next/navigation";
import styles from "./pdf.module.css";

function getSafePdfFile(rawFile: string | null) {
  if (!rawFile) return null;

  let decoded = rawFile;
  try {
    decoded = decodeURIComponent(rawFile);
  } catch {
    decoded = rawFile;
  }

  const trimmed = decoded.trim();
  if (!trimmed.toLowerCase().endsWith(".pdf")) return null;
  
  if (trimmed.includes("..")) return null;
  if (trimmed.startsWith("/") || trimmed.startsWith("\\")) return null;

  return trimmed;
}

function PdfViewerContent() {
  const viewerRef = useRef<HTMLDivElement | null>(null);
  const [viewerWidth, setViewerWidth] = useState<number>(0);
  const [numPages, setNumPages] = useState<number>(0);
  const [scale, setScale] = useState<number>(1);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const searchParams = useSearchParams();
  const fileParam = searchParams.get("file");
  const pageParam = searchParams.get("page");

  const file = getSafePdfFile(fileParam);
  const pdfUrl = file ? `/${file}` : null;

  const pdfFile = useMemo(() => {
    if (!pdfUrl) return null;
    return { url: pdfUrl };
  }, [pdfUrl]);

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
  }, []);

  useEffect(() => {
    const el = viewerRef.current;
    if (!el) return;

    const ro = new ResizeObserver(() => {
      setViewerWidth(el.clientWidth);
    });

    ro.observe(el);
    setViewerWidth(el.clientWidth);

    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    setNumPages(0);
    setScale(1);
    setLoadError(null);
  }, [pdfUrl]);

  const onPrint = () => {
    if (!pdfUrl) return;
    const w = window.open(pdfUrl, "_blank", "noopener,noreferrer");
    if (!w) return;
    const t = window.setInterval(() => {
      try {
        if (w.document?.readyState === "complete") {
          window.clearInterval(t);
          w.focus();
          w.print();
        }
      } catch {
        window.clearInterval(t);
      }
    }, 250);
  };

  const zoomOut = () => setScale((s) => Math.max(0.5, Math.round((s - 0.25) * 100) / 100));
  const zoomIn = () => setScale((s) => Math.min(3, Math.round((s + 0.25) * 100) / 100));

  const devicePixelRatio = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;

  return (
    <main className={styles.page}>
      <div className={styles.backgroundBlur} />
      <div className={styles.topActions}>
        <Link href="/" className={styles.backLink}>
          Back
        </Link>

        <div className={styles.spacer} />

        {pdfUrl && (
          <>
            <button type="button" className={styles.actionBtn} onClick={zoomOut}>
              -
            </button>
            <div className={styles.pageInfo}>{Math.round(scale * 100)}%</div>
            <button type="button" className={styles.actionBtn} onClick={zoomIn}>
              +
            </button>
            <button type="button" className={styles.actionBtn} onClick={onPrint}>
              Print
            </button>
            <a className={styles.actionBtn} href={pdfUrl} download>
              Download
            </a>
          </>
        )}
      </div>

      {!pdfUrl ? (
        <div className={styles.emptyState}>
          PDF haijapatikana. Tafadhali rudi kwenye list ya shule.
        </div>
      ) : (
        <div className={styles.viewerWrap} ref={viewerRef}>
          {loadError ? (
            <div className={styles.emptyState}>
              Imeshindikana kufungua PDF kwenye kifaa hiki. Tafadhali tumia
              Download.
            </div>
          ) : (
            <div className={styles.pdfStage}>
              <Document
                file={pdfFile}
                loading={<div className={styles.loading}>Inafunguka...</div>}
                onLoadSuccess={({ numPages: n }) => {
                  setNumPages(n);
                  if (isInitialLoad && pageParam === "last") {
                    setTimeout(() => {
                      const viewer = viewerRef.current;
                      if (viewer) {
                        viewer.scrollTop = viewer.scrollHeight;
                      }
                      setIsInitialLoad(false);
                    }, 500);
                  }
                }}
                onLoadError={(e) => {
                  setLoadError(e instanceof Error ? e.message : String(e));
                }}
              >
                {Array.from(new Array(numPages), (el, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    width={viewerWidth ? Math.min(viewerWidth, 1100) : undefined}
                    scale={scale}
                    devicePixelRatio={Math.min(devicePixelRatio, 2)}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    loading={<div className={styles.loading}>Inapakia ukurasa wa {index + 1}...</div>}
                    className={styles.pdfPage}
                  />
                ))}
              </Document>
            </div>
          )}
        </div>
      )}
    </main>
  );
}

export default function PdfViewerPage() {
  return (
    <Suspense fallback={<div className={styles.loading}>Inapakia...</div>}>
      <PdfViewerContent />
    </Suspense>
  );
}
