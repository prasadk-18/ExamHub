import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ExamList from "./components/ExamList";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <section className="text-center py-10">
          <h2 className="text-4xl font-extrabold text-indigo-700 mb-4">
            📅 Upcoming Exams 2025
          </h2>
          <p className="text-gray-600 text-lg">
            Stay updated with the latest government & competitive exams.
          </p>
        </section>

        <ExamList />

        <section
          id="about"
          className="max-w-4xl mx-auto px-6 py-10 text-gray-700 text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-indigo-700">About ExamHub</h3>
          <p>
            ExamHub is your trusted source for all upcoming government exams,
            entrance tests, and academic board exams. We keep you informed so
            you never miss an important date.
          </p>
        </section>

        <section
          id="contact"
          className="max-w-4xl mx-auto px-6 py-10 text-gray-700 text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-indigo-700">Contact Us</h3>
          <p>
            For any queries, please reach out at{" "}
            <a
              href="mailto:support@examhub.com"
              className="text-indigo-600 hover:text-indigo-800 font-medium"
            >
              support@examhub.com
            </a>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
