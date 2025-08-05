import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any auth state if needed
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-white shadow-md">
      {/* Logo on the left */}
      <div className="text-xl font-bold text-green-600 tracking-wide">
        HabitTracker
      </div>

      {/* Links + Logout on the right */}
      <div className="flex items-center gap-6">
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li>
            <Link to="/dashboard" className="hover:text-green-600 transition-colors">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/add" className="hover:text-green-600 transition-colors">
              Add Habit
            </Link>
          </li>
          <li>
            <Link to="/settings" className="hover:text-green-600 transition-colors">
              Settings
            </Link>
          </li>
        </ul>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition-all"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
