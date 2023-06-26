"use client";
import { useEffect } from "react";
import { useThemeContext } from "../context/store";
export default function register() {
    const { theme } = useThemeContext();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

    return(
        <div className="h-[41rem] flex flex-row justify-center items-center dark:bg-[--bg-dark]">
      <div className="w-96 h-96 shadow-3xl p-11 rounded-lg">
        <h1 className="dark:text-white text-center text-2xl">Sign in</h1>
        <div className="w-full h-36 flex flex-col justify-evenly items-center">
          <input
            className="w-full border-black border-b-2 outline-none dark:bg-[--bg-dark] dark:border-white"
            placeholder="Email"
            type="text"
            name=""
            id=""
          />
          <input
            className="w-full border-black border-b-2 outline-none dark:bg-[--bg-dark] dark:border-white"
            placeholder="Password"
            type="text"
            name=""
            id=""
          />
          <input
            className="w-full border-black border-b-2 outline-none dark:bg-[--bg-dark] dark:border-white"
            placeholder="Confirm Password"
            type="text"
            name=""
            id=""
          />
        </div>
        <p className="dark:text-white py-6 text-center"><a href="/login">Already have an account?</a></p>
        <div className="">
          <button className="w-full rounded-2xl text-white p-2 dark:text-white bg-[--primary-color]">
            Submit
          </button>
        </div>
      </div>
    </div>

    );
}