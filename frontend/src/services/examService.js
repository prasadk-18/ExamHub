import axios from "axios";

const API_URL = "http://localhost:5000/api/exams";

export const getExams = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const addExam = async (exam) => {
  const res = await axios.post(API_URL, exam);
  return res.data;
};
