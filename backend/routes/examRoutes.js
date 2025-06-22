const express = require("express");
const router = express.Router();
const Exam = require("../models/Exam");

router.get("/", async (req, res) => {
  const exams = await Exam.find();
  res.json(exams);
});

router.post("/", async (req, res) => {
  const { title, date, notification } = req.body;
  const newExam = new Exam({ title, date, notification });
  await newExam.save();
  res.status(201).json(newExam);
});

module.exports = router;
