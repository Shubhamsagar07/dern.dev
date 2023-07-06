"use client";
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({
  theme: "",
  handleThemeSwitch: () => "",
});

const UserContext = createContext({ user: "", setUser: () => "" });

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, handleThemeSwitch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
export const useUserContext = () => useContext(UserContext);
