import React from "react";
import { useNavigate } from "react-router-dom";
import AddHabit from "./AddHabit"; // Assuming you have an AddHabit component
const Landing = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Redirect to login (or dashboard for now)
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800 transition-colors">
      {/* Hero Section */}
      <h1 className="text-4xl font-extrabold mb-4 text-green-700 dark:text-green-400">
        🌱 Habify
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md text-center">
        Grow your habits every day and watch them bloom. Track progress visually
        and stay motivated!
      </p>

      {/* Login Button */}
      <button
        onClick={handleLogin}
        className="px-6 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white shadow-lg transition transform hover:-translate-y-1"
      >
        Login
      </button>
    </div>
  );
};

export default Landing;
