import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav style={{ padding: "1rem", background: "#f5f5f5", borderBottom: "1px solid #ddd" }}>
    <ul style={{ display: "flex", gap: "1rem", listStyle: "none", margin: 0, padding: 0 }}>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/add" style={{ color: "#222" }}>Add Habit</Link>
      </li>
      <li>
        <Link to="/settings" style={{ color: "#222" }}>Settings</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;