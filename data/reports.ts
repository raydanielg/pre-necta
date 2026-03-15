export interface Report {
  id: string;
  title: string;
  description: string;
  file: string;
  category: "ranking" | "performance" | "other";
}

export const reports: Report[] = [
  {
    id: "school-ranks",
    title: "School Ranks",
    description: "Regional ranking of all schools based on performance.",
    file: "schoolranks/MWANZA SCHOOLS RANK.pdf",
    category: "ranking",
  },
  {
    id: "subject-performance",
    title: "Subject Performance",
    description: "Detailed analysis of performance by subject across the region.",
    file: "performance/SUBJECT PERFORMANCE.pdf",
    category: "performance",
  },
  {
    id: "mobility-analysis",
    title: "Mobility Analysis",
    description: "Tracking schools that have improved or declined in performance compared to previous exams.",
    file: "reports/mobility",
    category: "performance",
  },
  {
    id: "school-stats",
    title: "School Statistics",
    description: "Detailed statistical analysis of school performance, including government and private school comparisons.",
    file: "reports/school-stats/OVERALL SCHOOL STATISTICS.pdf",
    category: "other",
  },
  {
    id: "student-stats",
    title: "Student Statistics",
    description: "Detailed analysis of student performance, including top performers overall and by subject.",
    file: "reports/student-stats/BEST_STUDENTS_OVERALL.pdf",
    category: "other",
  },
  {
    id: "district-ranks",
    title: "District Ranks",
    description: "Ranking of all districts in Mwanza region based on their overall performance.",
    file: "reports/district-ranks/DISTRICT RANK OVERALL F6.pdf",
    category: "performance",
  },
];
