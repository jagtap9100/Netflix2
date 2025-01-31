import React, { createContext, useState } from "react";

// Create the ThemeContext
export const ThemeContext = createContext();

// ThemeContextProvider Component
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // Initialize the theme state to 'light'

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children} {/* Render children components */}
    </ThemeContext.Provider>
  );
};
