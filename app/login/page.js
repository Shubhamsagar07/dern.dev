"use client";
import { useEffect, useState } from "react";
import { useThemeContext, useUserContext } from "../context/store";
import supabase from "@/utils/supabase";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useUserContext();

  let router = useRouter();

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (!error) {
      setUser(data.user);
      router.push("/home");
    }
  };

  // dark theme
  const { theme } = useThemeContext();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <div className="h-[38rem] flex flex-row justify-center items-center dark:bg-[--bg-dark]">
      <div className="w-96 h-96 shadow-3xl p-11 rounded-lg">
        <h1 className="dark:text-white text-center text-2xl">Login</h1>
        <div className="w-full h-36 flex flex-col justify-evenly items-center">
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="w-full text-white border-black border-b-2 outline-none dark:bg-[--bg-dark] dark:border-white"
            placeholder="Email"
            type="text"
            name=""
            id=""
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="w-full text-white border-black border-b-2 outline-none dark:bg-[--bg-dark] dark:border-white"
            placeholder="Password"
            type="text"
            name=""
            id=""
          />
        </div>
        <p className="dark:text-white py-6 text-center">Forgot password?</p>
        <div className="">
          <button
            onClick={() => handleLogin()}
            className="w-full rounded-2xl text-white p-2 dark:text-white bg-[--primary-color]"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
