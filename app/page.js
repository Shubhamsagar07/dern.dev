"use client";
import { useEffect } from "react";
import { useThemeContext } from "./context/store";
import { Righteous } from "next/font/google";
import Image  from "next/image";

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
    <main className="flex h-[41rem] flex-row text-white items-center justify-evenly w-full dark:bg-[--bg-dark]" >
      <div >
      <p className="font-bold w-96 h-5 text-2xl ">Welcome to Dern.dev <br></br>a place to manage your YouTube<br></br>channels list. </p>
      </div>
      <Image 
      src="/landingPage.png" width={600} height={600}
      />
      
    </main>
  );
}
