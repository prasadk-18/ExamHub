import React from "react";
import ExamCard from "./ExamCard";

const exams = [
  {
    title: "UPSC Civil Services Exam 2025",
    date: "25 August 2025",
    link: "https://upsc.gov.in/examinations",
  },
  {
    title: "RRB NTPC Exam 2025",
    date: "10 September 2025",
    link: "https://www.rrbcdg.gov.in/",
  },
  {
    title: "SSC CGL Tier 1 2025",
    date: "5 October 2025",
    link: "https://ssc.nic.in/",
  },
  {
    title: "EAPCET 2025",
    date: "30 June 2025",
    link: "https://sche.ap.gov.in/EAPCET/",
  },
  {
    title: "JEE Main 2025",
    date: "20 April 2025",
    link: "https://jeemain.nta.ac.in/",
  },
  {
    title: "NEET UG 2025",
    date: "7 May 2025",
    link: "https://neet.nta.nic.in/",
  },
  {
    title: "CBSE Class 10 Boards 2025",
    date: "1 March 2025",
    link: "https://www.cbse.gov.in/",
  },
  {
    title: "CBSE Class 12 Boards 2025",
    date: "3 March 2025",
    link: "https://www.cbse.gov.in/",
  },
  {
    title: "Bank PO Exam 2025",
    date: "15 September 2025",
    link: "https://ibps.in/",
  },
];

const ExamList = () => {
  return (
    <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4">
      {exams.map((exam, index) => (
        <ExamCard
          key={index}
          title={exam.title}
          date={exam.date}
          link={exam.link}
        />
      ))}
    </div>
  );
};

export default ExamList;
