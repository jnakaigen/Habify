import React, { useState } from "react";
import { Check, Flame, Edit, Trash, X, Check as Save } from "lucide-react";

const HabitCard = ({ habit, toggleHabit, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(habit.name);
  const [editedEmoji, setEditedEmoji] = useState(habit.emoji);

  const handleSave = () => {
    onEdit(habit.id, {
      name: editedName,
      emoji: editedEmoji,
    });
    setIsEditing(false);
  };

  return (
    <div
      className={`p-4 rounded-xl border-2 transition-all ${
        habit.completed
          ? "border-green-400 bg-green-50 dark:bg-green-900/20"
          : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
      }`}
    >
      {isEditing ? (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <select
              value={editedEmoji}
              onChange={(e) => setEditedEmoji(e.target.value)}
              className="text-2xl bg-transparent border rounded-lg p-1"
            >
              {["🌱", "💧", "🏃‍♀️", "🧘‍♂️", "📚", "🍎", "🌞"].map((e) => (
                <option key={e} value={e}>
                  {e}
                </option>
              ))}
            </select>
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              className="flex-1 px-2 py-1 border rounded-lg"
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              onClick={() => setIsEditing(false)}
              className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg"
            >
              <X size={18} />
            </button>
            <button
              onClick={handleSave}
              className="p-2 text-green-600 hover:bg-green-100 rounded-lg"
            >
              <Save size={18} />
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{habit.emoji || "🌱"}</span>
              <span
                className={`text-lg font-medium ${
                  habit.completed ? "line-through text-green-600" : ""
                }`}
              >
                {habit.name}
              </span>
            </div>
            <div className="flex gap-1">
              <button
                onClick={() => setIsEditing(true)}
                className="p-1 text-gray-500 hover:text-blue-500 hover:bg-gray-100 rounded-lg"
                aria-label="Edit habit"
              >
                <Edit size={16} />
              </button>
              <button
                onClick={() => {
                  if (
                    window.confirm(
                      `Are you sure you want to delete "${habit.name}"?`
                    )
                  ) {
                    onDelete(habit.id);
                  }
                }}
                className="p-1 text-gray-500 hover:text-red-500 hover:bg-gray-100 rounded-lg"
                aria-label="Delete habit"
              >
                <Trash size={16} />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
              <Flame className="w-4 h-4 text-orange-500" />
              <span>{habit.streak || 0}d streak</span>
            </div>

            <button
              onClick={() => toggleHabit(habit.id)}
              className={`p-2 rounded-lg transition-colors ${
                habit.completed
                  ? "bg-green-100 dark:bg-green-900/30 text-green-600"
                  : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200"
              }`}
              aria-label={`Mark ${habit.name} as completed`}
            >
              <Check className="w-5 h-5" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default HabitCard;
