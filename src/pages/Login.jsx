import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy validation: just check something entered
    if (!email.trim() || !password.trim()) {
      alert("Bro, don’t leave fields empty!");
      return;
    }

    // Simulate login success → redirect
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800 transition-colors">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-80"
      >
        <h2 className="text-2xl font-bold mb-6 text-green-700 dark:text-green-400 text-center">
          Login to Habify
        </h2>

        <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">
          Email
          <input
            type="email"
            className="w-full mt-1 p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="you@example.com"
          />
        </label>

        <label className="block mb-4 font-semibold text-gray-700 dark:text-gray-300">
          Password
          <input
            type="password"
            className="w-full mt-1 p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Your secret password"
          />
        </label>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
