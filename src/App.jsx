import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddHabit from "./pages/AddHabit";
import "./styles/tailwind.css";

const App = () => {
  const location = useLocation();
  // Hide Navbar on Landing and Login pages
  const hideNavbar = location.pathname === "/" || location.pathname === "/login";

  return (
    <div>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add" element={<AddHabit />} />
        {/* Add settings route if needed */}
      </Routes>
    </div>
  );
};

export default App;