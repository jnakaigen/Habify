import React, { useEffect } from "react";
import PlantProgress from "../components/PlantProgress";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import "../styles/tailwind.css";
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.3, smooth: true });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Animate each section on scroll
    gsap.utils.toArray(".section").forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 text-gray-900 dark:text-gray-100 dark:bg-gray-900 transition-colors duration-500">
      {/* Header */}
      <header className="sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur p-6 z-20 shadow-md flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-green-700">🌱 Habify</h1>
        {/* Add your ThemeToggle component here if you want */}
      </header>

      {/* Hero Section */}
      <section className="section min-h-[80vh] flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-5xl font-extrabold mb-4">Grow Your Habits Daily</h2>
        <p className="max-w-xl text-gray-700 dark:text-gray-300 text-lg">
          Track your habits, watch your plants bloom, and celebrate your
          progress every single day.
        </p>
      </section>

      {/* Habits Grid Section */}
      <section className="section max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="habit-card bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center"
          >
            <PlantProgress progress={Math.floor(Math.random() * 100)} />
            <p className="mt-4 font-semibold text-lg">Habit {i + 1} 🌿</p>
          </div>
        ))}
      </section>

      {/* Progress Insights Section */}
      <section className="section bg-green-100 dark:bg-green-900 p-12 text-center">
        <h3 className="text-3xl font-bold mb-3">Your Growth Insights</h3>
        <p className="max-w-2xl mx-auto text-green-800 dark:text-green-300">
          Get detailed stats and tips to keep your streak alive and growing.
        </p>
      </section>

      {/* Daily Motivation Section */}
      <section className="section p-10 max-w-4xl mx-auto text-center">
        <blockquote className="italic text-xl text-gray-600 dark:text-gray-400">
          “Motivation is what gets you started. Habit is what keeps you going.”
          <br />
          — Jim Ryun
        </blockquote>
      </section>

      {/* Footer */}
      <footer className="section p-6 text-center bg-white/80 dark:bg-gray-900/80 backdrop-blur text-gray-700 dark:text-gray-400">
        <p>🌿 Built with love & growth — Habify 2025</p>
      </footer>
    </div>
  );
};

export default App;
