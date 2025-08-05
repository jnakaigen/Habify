import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = formData;

    if (!username.trim() || !email.trim() || !password.trim()) {
      alert("Please fill in all fields.");
      return;
    }
    localStorage.setItem("userEmail", email);
   console.log("User logged in:", { username, email });
    navigate("/dashboard");
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-300 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-green-600 dark:text-green-400 mb-6">
          Welcome to Habify
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Your username"
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded transition"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-700 dark:text-gray-300 space-y-2">
          <a href="/forgot-password" className="hover:underline text-green-600 dark:text-green-400">
            Forgot Password?
          </a>
          <p>
            Don’t have an account?{" "}
            <a href="/signup" className="text-green-700 dark:text-green-300 hover:underline font-medium">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

