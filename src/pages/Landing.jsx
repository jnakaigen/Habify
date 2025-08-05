import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import Lottie from "lottie-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import plantAnimation from "../assets/animations/plantgrowth.json";

const Landing = () => {
  const navigate = useNavigate();
  const [showTitle, setShowTitle] = useState(false);

  const featuresRef = useRef(null);
  const reviewsRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowTitle(true), 2200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (featuresRef.current) {
      gsap.fromTo(
        featuresRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
          },
        }
      );
    }
    if (reviewsRef.current) {
      gsap.fromTo(
        reviewsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: reviewsRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <main
      className="w-full min-h-screen overflow-x-hidden"
      style={{
        background: `radial-gradient(
          circle at center,
          #3d5f3c 0%,
          #5f8a4c 25%,
          #cde889 45%,
          #5f8a4c 70%,
          #3d5f3c 100%
        )`,
      }}
    >
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-green-100 shadow z-50 flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold text-green-900">Habify</h1>
        <nav className="space-x-4 text-green-800">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</button>
          <button onClick={() => featuresRef.current.scrollIntoView({ behavior: "smooth" })}>Features</button>
          <button onClick={() => reviewsRef.current.scrollIntoView({ behavior: "smooth" })}>Reviews</button>
          <button onClick={() => navigate("/login")}>Login</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
        <Lottie animationData={plantAnimation} loop autoplay className="w-64 md:w-80 lg:w-[28rem]" />

        <h1
          className={`text-4xl md:text-5xl lg:text-6xl tracking-wide mt-[-1.5rem] transition-all duration-1000 ease-out transform ${
            showTitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{
            fontFamily: "'Yeseva One', serif",
            color: "#1f3b1f",
            fontWeight: 700,
            letterSpacing: "0.05em",
          }}
        >
          Habify
        </h1>

        <div
          className={`transition-all duration-1000 ease-out transform ${
            showTitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="italic text-base md:text-lg lg:text-xl text-green-950">
            "Grow your habits every day and watch them bloom."
          </p>
          <p className="italic text-base md:text-lg lg:text-xl text-green-950">
            "Track progress visually and stay nourished."
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="w-full py-20 px-6 text-center opacity-0">
        <h2 className="text-3xl font-bold text-white mb-8">Features</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg shadow-md bg-green-100 text-green-900">
            <h3 className="text-xl font-semibold mb-2">Visual Tracking</h3>
            <p>Watch your habits grow day by day with our animated plant-style progress tracker.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-md bg-green-100 text-green-900">
            <h3 className="text-xl font-semibold mb-2">Reminders & Tips</h3>
            <p>Get daily encouragement and helpful tips to maintain momentum and build consistency.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-md bg-green-100 text-green-900">
            <h3 className="text-xl font-semibold mb-2">Custom Goals</h3>
            <p>Set personalized habits and milestones that align with your self-growth journey.</p>
          </div>
        </div>
      </section>

      {/* Habit Widgets Section */}
      <section className="w-full py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-12">Habify Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-green-100 text-green-900 p-6 rounded-xl shadow-md flex flex-col items-center">
            <span className="text-4xl mb-2">📚</span>
            <p className="text-xl font-semibold">Reading</p>
            <p className="text-sm mt-1">5 Days Streak</p>
          </div>
          <div className="bg-green-100 text-green-900 p-6 rounded-xl shadow-md flex flex-col items-center">
            <span className="text-4xl mb-2">💧</span>
            <p className="text-xl font-semibold">Water Intake</p>
            <p className="text-sm mt-1">7 Glasses Today</p>
          </div>
          <div className="bg-green-100 text-green-900 p-6 rounded-xl shadow-md flex flex-col items-center">
            <span className="text-4xl mb-2">🧘‍♀️</span>
            <p className="text-xl font-semibold">Meditation</p>
            <p className="text-sm mt-1">12 Sessions This Week</p>
          </div>
          <div className="bg-green-100 text-green-900 p-6 rounded-xl shadow-md flex flex-col items-center">
            <span className="text-4xl mb-2">🥗</span>
            <p className="text-xl font-semibold">Healthy Eating</p>
            <p className="text-sm mt-1">6 Days This Week</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={reviewsRef} className="w-full py-20 px-6 text-center opacity-0">
        <h2 className="text-3xl font-bold text-green-950 mb-8">What Others Say</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="p-6 bg-green-100 rounded-lg shadow-md text-left">
            <p className="italic text-green-900">
              "Tracking my daily habits has been a game changer. I haven’t missed a meditation session in 3 weeks!"
            </p>
            <p className="mt-2 font-semibold text-green-900">Ravi Menon</p>
            <p className="text-sm text-green-800">Freelancer</p>
          </div>
          <div className="p-6 bg-green-100 rounded-lg shadow-md text-left">
            <p className="italic text-green-900">
              "The visual plant growth made my goals feel alive. It motivates me to keep drinking water consistently."
            </p>
            <p className="mt-2 font-semibold text-green-900">Aarushi Sharma</p>
            <p className="text-sm text-green-800">UI/UX Designer</p>
          </div>
          <div className="p-6 bg-green-100 rounded-lg shadow-md text-left">
            <p className="italic text-green-900">
              "I used to forget journaling, but Habify's reminders helped me build a strong nightly routine."
            </p>
            <p className="mt-2 font-semibold text-green-900">David Thomas</p>
            <p className="text-sm text-green-800">Engineering Student</p>
          </div>
        </div>

        {/* Login Button */}
        <div className="mt-16">
          <p className="text-lg font-semibold text-green-950 mb-4">Ready to get started?</p>
          <button
            onClick={() => navigate("/login")}
            className="px-6 py-2 rounded-full bg-green-700 text-white text-lg font-medium shadow-md hover:bg-green-800 transition-all duration-300"
          >
            Login Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-green-900 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Habify. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default Landing;
