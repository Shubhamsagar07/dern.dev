"use client";
import { useEffect } from "react";
import { useThemeContext, useUserContext } from "../context/store";
import Board from "@/components/Board";

export default function Home() {
  const { user } = useUserContext();

  // Dark Mode
  const { theme } = useThemeContext();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <div className="p-16 flex flex-col dark:bg-[--bg-dark]">
      <hr className="dark:text-white" />
      <Board />
    </div>
  );
}
