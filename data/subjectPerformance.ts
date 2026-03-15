export interface SubjectPerformance {
  code: string;
  name: string;
  pdf: string;
}

export const generalSubjectPdf = "reports/performance/MASOMO OVERALL F6.pdf";

export const subjectPerformances: SubjectPerformance[] = [
  { code: "SUB01", name: "ADVANCED MATHEMATICS", pdf: "reports/performance/subjects/ADV. MATH.pdf" },
  { code: "SUB02", name: "BIOLOGY", pdf: "reports/performance/subjects/BIOLOGY.pdf" },
  { code: "SUB03", name: "CHEMISTRY", pdf: "reports/performance/subjects/CHEM.pdf" },
  { code: "SUB04", name: "COMMERCE", pdf: "reports/performance/subjects/COMM.pdf" },
  { code: "SUB05", name: "ECONOMICS", pdf: "reports/performance/subjects/ECONOMICS.pdf" },
  { code: "SUB06", name: "ENGLISH LANGUAGE", pdf: "reports/performance/subjects/ENGL.pdf" },
  { code: "SUB07", name: "GEOGRAPHY", pdf: "reports/performance/subjects/GEO.pdf" },
  { code: "SUB08", name: "GENERAL STUDIES", pdf: "reports/performance/subjects/GS.pdf" },
  { code: "SUB09", name: "HISTORY", pdf: "reports/performance/subjects/HISTORY.pdf" },
  { code: "SUB10", name: "KISWAHILI", pdf: "reports/performance/subjects/KISW.pdf" },
];
