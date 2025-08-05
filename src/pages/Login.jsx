import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [mode, setMode] = useState("signin"); // 'signin', 'signup', or 'forgot'
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = formData;

    if (!email.trim() || !password.trim() || (mode === "signup" && !username.trim())) {
      alert("Please fill in all required fields.");
      return;
    }

    if (mode === "signin") {
      localStorage.setItem("userEmail", email);
      navigate("/dashboard");
    } else if (mode === "signup") {
      localStorage.setItem("userEmail", email); 
      navigate("/dashboard"); 
    } else if (mode === "forgot") {
      alert("Password reset link sent to your email!");
      setMode("signin");
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-300 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-green-600 dark:text-green-400 mb-6">
          {mode === "signin" && "Welcome to Habify"}
          {mode === "signup" && "Create Your Account"}
          {mode === "forgot" && "Reset Your Password"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {(mode === "signup" || mode === "signin") && (
            <div>
              <label htmlFor="username" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                placeholder="Your username"
                required={mode === "signup"}
                className="w-full px-4 py-2 rounded border bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-2 rounded border bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            />
          </div>

          {mode !== "forgot" && (
            <div>
              <label htmlFor="password" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className="w-full px-4 py-2 rounded border bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded transition"
          >
            {mode === "signin" && "Sign In"}
            {mode === "signup" && "Sign Up"}
            {mode === "forgot" && "Send Reset Link"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-700 dark:text-gray-300 space-y-2">
          {mode !== "forgot" && (
            <button
              type="button"
              onClick={() => setMode("forgot")}
              className="hover:underline text-green-600 dark:text-green-400"
            >
              Forgot Password?
            </button>
          )}
          {mode === "signin" ? (
            <p>
              Don’t have an account?{" "}
              <button
                type="button"
                onClick={() => setMode("signup")}
                className="text-green-700 dark:text-green-300 hover:underline font-medium"
              >
                Sign Up
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setMode("signin")}
                className="text-green-700 dark:text-green-300 hover:underline font-medium"
              >
                Sign In
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}




