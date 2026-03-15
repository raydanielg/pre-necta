export interface StudentStat {
  id: string;
  name: string;
  description: string;
  pdf: string;
}

export const studentStats: StudentStat[] = [
  {
    id: "best-overall",
    name: "BEST STUDENTS OVERALL",
    description: "Orodha ya wanafunzi bora waliofanya vizuri katika masomo yote mkoani Mwanza.",
    pdf: "reports/student-stats/BEST STUDENTS OVERALL F6.pdf"
  },
  {
    id: "best-subject-wise",
    name: "BEST STUDENTS SUBJECT-WISE",
    description: "Orodha ya wanafunzi bora waliofanya vizuri katika kila somo mkoani Mwanza.",
    pdf: "reports/student-stats/10 BEST STUDENT SUBJECTWISE F6.pdf"
  }
];
