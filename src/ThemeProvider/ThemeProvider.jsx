"use client";
import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext(null);
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Get initial theme from localStorage or default to 'light'
    return localStorage.getItem("theme") || "light";
  });
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const themeInfo = {
    theme,
    setTheme: (newTheme) => {
      setTheme(newTheme);
      if (typeof window !== "undefined" && localStorage) {
        localStorage.setItem("theme", newTheme);
      }
    },
  };
  return (
    <ThemeContext.Provider value={themeInfo}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
