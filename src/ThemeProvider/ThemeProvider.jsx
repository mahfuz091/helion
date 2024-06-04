"use client";
import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext(null);
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    // Check if window and localStorage are available
    if (typeof window !== "undefined" && localStorage) {
      const themeLocal = localStorage.getItem("theme");
      setTheme(themeLocal);
    }
  }, []);

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
