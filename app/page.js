"use client";
import { useEffect } from "react";
import { useThemeContext } from "./context/store";

export default function Home() {
  const { theme } = useThemeContext();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <p>Hello Shubham + Rajkaran + login</p>
    </main>
  );
}
