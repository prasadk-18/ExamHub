const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Exam = require("../models/Exam");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB connected — inserting exams...");

    const sampleExams = [
      {
        title: "UPSC Civil Services Exam 2025",
        date: "2025-08-25",
        officialLink: "https://upsc.gov.in/examinations",
      },
      {
        title: "RRB NTPC Exam 2025",
        date: "2025-09-10",
        officialLink: "https://www.rrbcdg.gov.in/",
      },
      {
        title: "SSC CGL Tier 1 2025",
        date: "2025-10-05",
        officialLink: "https://ssc.nic.in/",
      },
      {
        title: "EAPCET 2025",
        date: "2025-06-30",
        officialLink: "https://sche.ap.gov.in/EAPCET/",
      },
      {
        title: "JEE Main 2025",
        date: "2025-04-20",
        officialLink: "https://jeemain.nta.ac.in/",
      },
      {
        title: "NEET UG 2025",
        date: "2025-05-07",
        officialLink: "https://neet.nta.nic.in/",
      },
    ];

    await Exam.deleteMany(); // clear existing exams if any
    await Exam.insertMany(sampleExams);

    console.log("✅ Sample exams inserted!");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("MongoDB error:", err);
  });
