import React, { useState } from "react";
export const themeContext = React.createContext();

export const ThemeContextProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState("false");
  const handleTheme = () => {
    setDarkTheme(!darkTheme);
  };
  const value = [darkTheme, handleTheme];
  return (
    <themeContext.Provider value={value}>{children}</themeContext.Provider>
  );
};
