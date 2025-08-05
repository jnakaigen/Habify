import React, { useState } from "react";
import { PlusCircle, RefreshCw, Calendar, Moon } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const AddHabit = () => {
  const [habitName, setHabitName] = useState("");
  const [emoji, setEmoji] = useState("🌱");
  const [frequency, setFrequency] = useState("Daily");
  const [isLoading, setIsLoading] = useState(false);
  const [habits, setHabits] = useState(() => {
    const stored = localStorage.getItem("habits");
    return stored ? JSON.parse(stored) : [];
  });

  const addHabit = async () => {
    if (!habitName.trim()) return;

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));

    const newHabit = {
      id: Date.now(),
      name: habitName.trim(),
      emoji: emoji || "🌱",
      frequency,
    };

    const updated = [...habits, newHabit];
    setHabits(updated);
    localStorage.setItem("habits", JSON.stringify(updated));

    setIsLoading(false);

    toast.custom((t) => (
      <div
        className={`${t.visible ? "animate-enter" : "animate-leave"} 
        bg-white dark:bg-gray-800 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 p-4`}
      >
        <p className="text-sm font-medium text-gray-900 dark:text-white">
          {emoji} Added "{habitName.trim()}"
        </p>
        <button
          onClick={() => {
            const filtered = habits.filter((h) => h.id !== newHabit.id);
            setHabits(filtered);
            localStorage.setItem("habits", JSON.stringify(filtered));
            toast.dismiss(t.id);
          }}
          className="ml-4 text-sm text-green-600 dark:text-green-400 font-bold"
        >
          Undo
        </button>
      </div>
    ));

    setHabitName("");
    setEmoji("🌱");
    setFrequency("Daily");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-green-50 to-white dark:from-gray-900 dark:to-gray-800 px-4">
      <Toaster position="bottom-center" />

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10 p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl">
        {/* Form */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-green-600 dark:text-green-300">
            🌿 Add a New Habit
          </h2>

          {/* Habit Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Habit Name
            </label>
            <input
              type="text"
              value={habitName}
              onChange={(e) => setHabitName(e.target.value)}
              placeholder="e.g. Drink 8 glasses of water"
              className="w-full mt-1 px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Emoji Picker */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Choose Emoji
            </label>
            <div className="grid grid-cols-6 gap-2 p-2 bg-gray-100 dark:bg-gray-800 rounded-xl">
              {[
                "🌱",
                "💧",
                "🏃‍♀️",
                "🧘‍♂️",
                "📚",
                "🍎",
                "🌞",
                "🧠",
                "🎵",
                "💤",
                "🍀",
                "✨",
                "❤️",
                "📅",
                "🌍",
                "🔥",
                "🏋️",
                "🧴",
              ].map((e) => (
                <button
                  key={e}
                  onClick={() => setEmoji(e)}
                  className={`text-2xl p-1 rounded-lg transition ${
                    emoji === e
                      ? "ring-2 ring-green-500 bg-white"
                      : "hover:bg-white dark:hover:bg-gray-700"
                  }`}
                >
                  {e}
                </button>
              ))}
            </div>
          </div>

          {/* Frequency Selection */}
          {/* Frequency Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Frequency
            </label>
            <div className="flex gap-3">
              {[
                {
                  type: "Daily",
                  icon: <RefreshCw className="w-4 h-4" />,
                  tooltip: "Track every day",
                },
                {
                  type: "Weekly",
                  icon: <Calendar className="w-4 h-4" />,
                  tooltip: "Track once per week",
                },
                {
                  type: "Monthly",
                  icon: <Moon className="w-4 h-4" />,
                  tooltip: "Track once per month",
                },
              ].map((item) => (
                <div key={item.type} className="group relative">
                  <button
                    type="button"
                    onClick={() => setFrequency(item.type)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-sm transition-all ${
                      frequency === item.type
                        ? "bg-green-500 text-white shadow-md"
                        : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                    }`}
                  >
                    {item.icon}
                    {item.type}
                  </button>
                  {/* Tooltip */}
                  <span className="absolute z-10 bottom-full mb-2 hidden group-hover:block px-2 py-1 text-xs bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 rounded whitespace-nowrap">
                    {item.tooltip}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Add Button */}
          <button
            onClick={addHabit}
            disabled={isLoading}
            className={`w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-all shadow-md ${
              isLoading ? "opacity-75 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? (
              <svg
                className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              <PlusCircle className="w-5 h-5" />
            )}
            {isLoading ? "Adding..." : "Add Habit"}
          </button>
        </div>

        {/* Preview Card */}
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-green-200 dark:border-green-600 rounded-xl p-6 space-y-4">
          <div className="text-5xl">{emoji || "🌱"}</div>
          <div className="text-center">
            <div className="text-xl font-semibold text-gray-800 dark:text-white">
              {habitName || "New Habit"}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {frequency}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full mt-4">
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
              <span>Progress</span>
              <span>0%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <div
                className="bg-green-500 h-2.5 rounded-full"
                style={{ width: "0%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddHabit;
