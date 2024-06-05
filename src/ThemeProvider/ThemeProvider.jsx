"use client";
import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext(null);
const ThemeProvider = ({ children }) => {
  const getInitialTheme = () => {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);
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
    setTheme,
  };
  return (
    <ThemeContext.Provider value={themeInfo}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
