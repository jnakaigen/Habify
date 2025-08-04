import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddHabit from "./pages/AddHabit"; // Make sure this file exists
import "./styles/tailwind.css"; // Adjust path if needed

const App = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/add" element={<AddHabit />} />
    </Routes>
  </div>
);

export default App;