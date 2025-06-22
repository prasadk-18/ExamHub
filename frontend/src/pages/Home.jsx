import { useEffect, useState } from "react";
import axios from "axios";
import ExamCard from "../components/ExamCard";

export default function Home() {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/exams").then((res) => {
      setExams(res.data);
    });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Upcoming Exams</h1>
      <div className="grid grid-cols-1 gap-6">
        {exams.map((exam) => (
          <ExamCard key={exam._id} exam={exam} />
        ))}
      </div>
    </div>
  );
}
