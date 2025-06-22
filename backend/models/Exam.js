const mongoose = require("mongoose");

const examSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  officialLink: String,   // 👈 new field added
});

module.exports = mongoose.model("Exam", examSchema);
