import React from "react"; // Import React library
import { Routes, Route } from "react-router-dom"; // Import routing components from react-router-dom
import Navbar from "./components/Navbar"; // Import Navbar component
import Landing from "./pages/Landing"; // Import Landing page component
import Login from "./pages/Login"; // Import Login page component
import Dashboard from "./pages/Dashboard"; // Import Dashboard page component
import AddHabit from "./pages/AddHabit"; // Import AddHabit page component
import Settings from "./pages/Settings"; // Import Settings page component
import "./styles/tailwind.css"; // Import Tailwind CSS styles

const App = () => ( // Define the App component as a functional component
  <div>
    <Navbar /> {/* Render the Navbar at the top */}
    <Routes> {/* Define the routes for the application */}
      <Route path="/" element={<Landing />} /> {/* Route for the Landing page */}
      <Route path="/login" element={<Login />} /> {/* Route for the Login page */}
      <Route path="/dashboard" element={<Dashboard />} /> {/* Route for the Dashboard page */}
      <Route path="/add" element={<AddHabit />} /> {/* Route for the AddHabit page */}
      <Route path="/settings" element={<Settings />} /> {/* Route for the Settings page */}
    </Routes>
  </div>
);

export default App; // Export the App component as default