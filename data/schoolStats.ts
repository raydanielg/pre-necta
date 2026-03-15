export interface SchoolStat {
  id: string;
  name: string;
  pdf: string;
  type: "GOVERNMENT" | "PRIVATE";
}

export const overallSchoolStatsPdf = "reports/school-stats/10 BEST SCHOOLS F6.pdf";

export const schoolStats: SchoolStat[] = [
  { id: "GOV01", name: "GOVERNMENT SCHOOLS ANALYSIS", pdf: "reports/school-stats/government/BEST SCHOOLS GOVERNMENT.pdf", type: "GOVERNMENT" },
  { id: "PRIV01", name: "PRIVATE SCHOOLS ANALYSIS", pdf: "reports/school-stats/private/BEST SCHOOLS PRIVATE.pdf", type: "PRIVATE" },
];
