import React from "react";

const ExamCard = ({ title, date, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 transition-transform hover:scale-105 hover:shadow-xl duration-300">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">{title}</h2>
      <p className="text-gray-600 mb-4">📅 {date}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-600 hover:text-indigo-800 font-medium"
      >
        Official Notification →
      </a>
    </div>
  );
};

export default ExamCard;
