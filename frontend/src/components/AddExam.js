import { useState } from "react";
import { addExam } from "../services/examService";
import { useNavigate } from "react-router-dom";

function AddExam() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [officialLink, setOfficialLink] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addExam({ title, date, officialLink });
    navigate("/");
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">+ Add New Exam</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6 bg-white p-6 rounded shadow">
        <div>
          <label className="block mb-1 font-medium">Exam Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 w-full rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Exam Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border p-2 w-full rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Official Notification Link:</label>
          <input
            type="url"
            value={officialLink}
            onChange={(e) => setOfficialLink(e.target.value)}
            className="border p-2 w-full rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Add Exam
        </button>
      </form>
    </div>
  );
}

export default AddExam;
