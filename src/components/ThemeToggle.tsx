import React from "react";
import { useTheme } from "@/context/ThemeContext";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-pressed={theme === "dark"}
      aria-label="Toggle theme"
      className={
        "inline-flex items-center gap-2 px-3 py-1 rounded-full transition-transform transform " +
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary " +
        (theme === "dark"
          ? "bg-gray-800 text-white hover:scale-105 active:scale-95 shadow-md dark:border"
          : "bg-white text-gray-900 hover:scale-105 active:scale-95 shadow-sm border")
      }
    >
      {/* simple icons using emoji to avoid extra deps */}
      <span className="text-lg">{theme === "dark" ? "🌙" : "☀️"}</span>
      <span className="text-sm font-medium">{theme === "dark" ? "Dark" : "Light"}</span>
    </button>
  );
};

export default ThemeToggle;
