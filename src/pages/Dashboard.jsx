import React, { useEffect, useState, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import Lottie from "lottie-react";
import plantAnimation from "../assets/animations/plantgrowth.json";
import "../styles/tailwind.css";

gsap.registerPlugin(ScrollTrigger);

// Simple particle effect without external dependency
const spawnLeafParticles = (container) => {
  const particle = document.createElement("div");
  particle.className = "fixed w-2 h-2 bg-green-400 rounded-full opacity-70";
  particle.style.left = Math.random() * window.innerWidth + "px";
  particle.style.top = "0px";
  document.body.appendChild(particle);
  let y = 0;
  const fall = setInterval(() => {
    y += 5;
    particle.style.top = y + "px";
    if (y > window.innerHeight) {
      clearInterval(fall);
      particle.remove();
    }
  }, 16);
};

const HabitList = ({ habits, toggleHabit }) => (
  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
    {habits.map((habit) => (
      <li
        key={habit.id}
        className={`p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 hover:shadow-lg hover:scale-105 transition-all flex flex-col items-center justify-center ${
          habit.completed ? "ring-2 ring-green-400" : ""
        }`}
      >
        <span
          className={`text-lg font-medium mb-2 transition-colors ${
            habit.completed ? "line-through text-green-600" : ""
          }`}
        >
          {habit.title}
        </span>
        <input
          type="checkbox"
          checked={habit.completed}
          onChange={() => toggleHabit(habit.id)}
          aria-label={`Mark ${habit.title} as completed`}
          className="w-6 h-6 cursor-pointer accent-green-600 transform scale-110 hover:scale-125 transition-transform"
        />
      </li>
    ))}
  </ul>
);

const Dashboard = () => {
  const userEmail = localStorage.getItem("userEmail");
  const [habits, setHabits] = useState([
    { id: 1, title: "Drink 2L Water", completed: false, streak: 3 },
    { id: 2, title: "Meditate 10 min", completed: false, streak: 5 },
    { id: 3, title: "Read 20 pages", completed: false, streak: 2 },
    { id: 4, title: "Workout", completed: false, streak: 7 },
    { id: 5, title: "No Junk Food", completed: false, streak: 1 },
  ]);

  const containerRef = useRef(null);

 useEffect(() => {
    if (!userEmail) return;
    const stored = localStorage.getItem(`habits_${userEmail}`);
    if (stored) {
      try {
        setHabits(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse habits from localStorage", e);
      }
    }
  }, [userEmail]);

  // Save habits for this user
  useEffect(() => {
    if (!userEmail) return;
    localStorage.setItem(`habits_${userEmail}`, JSON.stringify(habits));
  }, [habits, userEmail]);

  const progress = useMemo(() => (habits.filter(h => h.completed).length / habits.length) * 100, [habits]);
  const level = useMemo(() => (progress < 30 ? 1 : progress < 70 ? 2 : 3), [progress]);

  const toggleHabit = (id) => {
    setHabits(prev => prev.map(h => h.id === id ? { ...h, completed: !h.completed, streak: !h.completed ? h.streak + 1 : h.streak } : h));
    spawnLeafParticles(document.body);
  };

  const [quote, setQuote] = useState("");
  useEffect(() => {
    const quotes = [
      "Small daily improvements lead to stunning results.",
      "Success is the sum of small efforts repeated day in and day out.",
      "The secret of getting ahead is getting started.",
      "You don't have to be great to start, but you have to start to be great.",
      "Every day is a new opportunity to build the life you want.",
    ];
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smooth: true });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);
    ScrollTrigger.refresh();

  
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-green-50 via-green-100 to-green-200 text-gray-900 dark:text-gray-100 dark:bg-gray-900 transition-colors duration-500">
      <header className="sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl p-6 z-20 shadow-lg flex justify-center">
        <h1 className="text-3xl font-extrabold text-green-700 drop-shadow">🌱 Habify Dashboard</h1>
      </header>

      <main className="container mx-auto px-4 pb-20 space-y-16">
        <section className="section flex flex-col items-center text-center p-8">
          <h2 className="text-4xl font-bold mb-2">Your Growth Today</h2>
          <p className="text-lg text-green-700 dark:text-green-300 mb-2">Plant Level: {level}</p>
          <div className="w-64 h-64">
            <Lottie
              lottieRef={instance => {
                if (!instance) return;
                const total = instance.animationData.op;
                gsap.to({ frame: 0 }, {
                  frame: (progress / 100) * total,
                  duration: 1.2,
                  ease: "power2.out",
                  onUpdate() { instance.goToAndStop(this.targets()[0].frame, true); },
                });
              }}
              animationData={plantAnimation}
              loop={false}
              autoplay={false}
            />
          </div>
          <div className="w-64 h-3 bg-gray-200 rounded-full mt-4 overflow-hidden shadow-inner">
            <div className="h-full bg-green-500 transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
          {progress === 100 && (
  <div className="mt-4 text-green-600 dark:text-green-400 font-semibold animate-bounce text-xl">
    🎉 Congratulations! All habits completed!
  </div>
)}
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">{Math.round(progress)}% completed ({habits.filter(h => h.completed).length}/{habits.length})</p>
        </section>

        <section className="section bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-semibold">Today's Habits ✅</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{new Date().toLocaleDateString()}</p>
          </div>
          <HabitList habits={habits} toggleHabit={toggleHabit} />
        </section>

        <section className="section bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6">
          <h3 className="text-2xl font-semibold mb-6">Weekly Progress</h3>
          <div className="grid grid-cols-7 gap-2 mb-4">
            {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(day => (
              <div key={day} className="text-center">
                <div className="text-sm font-medium mb-1">{day}</div>
                <div className="h-24 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-end">
                  <div className="w-full bg-green-500 rounded-lg transition-all duration-500" style={{ height: `${Math.random()*80+20}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400"><span>Start of week</span><span>Today</span></div>
        </section>

        <section className="section bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6">
          <h3 className="text-2xl font-semibold mb-4">🔥 Your Top Streaks</h3>
          <div className="space-y-4">
            {[...habits].sort((a,b)=>b.streak-a.streak).slice(0,3).map(habit => (
              <div key={habit.id} className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
                <span className="font-medium">{habit.title}</span>
                <span className="text-sm bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 px-3 py-1 rounded-full">{habit.streak}d</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 text-center">
          <blockquote className="italic text-xl text-gray-600 dark:text-gray-400 mb-4">"{quote}" 🌱</blockquote>
          <button onClick={() => window.location.reload()} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">New Quote</button>
        </section>
      </main>

      <footer className="section p-6 text-center bg-white/80 dark:bg-gray-900/80 backdrop-blur text-gray-700 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
        <p>🌿 Built with love & growth — Habify 2025</p>
      </footer>
    </div>
  );
};

export default Dashboard;
