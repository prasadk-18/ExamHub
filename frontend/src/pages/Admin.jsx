import { useState } from "react";
import axios from "axios";

export default function Admin() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [notification, setNotification] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/exams", {
      title,
      date,
      notification,
    });
    setTitle("");
    setDate("");
    setNotification("");
    alert("Exam added!");
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Admin - Add Exam</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Exam Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          placeholder="Notification Details"
          value={notification}
          onChange={(e) => setNotification(e.target.value)}
          className="w-full p-2 border rounded"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Exam
        </button>
      </form>
    </div>
  );
}
