export interface SchoolStat {
  id: string;
  name: string;
  pdf: string;
  type: "GOVERNMENT" | "PRIVATE";
}

export const overallSchoolStatsPdf = "reports/school-stats/SCHOOLS RANK MASOMO SHULE-SERIKALI TU.pdf";

export const schoolStats: SchoolStat[] = [
  { id: "GOV01", name: "GOVERNMENT SCHOOLS ANALYSIS", pdf: "reports/school-stats/government/SCHOOLS RANK GOVERNMENT.pdf", type: "GOVERNMENT" },
  { id: "PRIV01", name: "PRIVATE SCHOOLS ANALYSIS", pdf: "reports/school-stats/private/SCHOOLS RANK PRIVATE.pdf", type: "PRIVATE" },
];
