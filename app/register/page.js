"use client";
import { useEffect, useState } from "react";
import { useThemeContext } from "../context/store";
import supabase from "@/utils/supabase";
import Image from "next/image";

export default function register() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        emailRedirectTo: 'http://localhost:3000/home'
      }
    })
    console.log(data)
  }

  // Dark Mode
  const { theme } = useThemeContext();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

    return(
        <div className="h-[38rem] flex flex-row justify-center items-center dark:bg-[--bg-dark]">
      <div className="w-96 h-[30rem] shadow-3xl p-11 rounded-lg">
        <h1 className="dark:text-white text-center text-2xl">Sign in</h1>
        <br></br><br></br>
        <div className="w-full h-52 flex flex-col justify-evenly items-center">
        <button onClick={() => handleRegister()} className="w-full rounded-2xl text-white p-2 dark:text-black bg-[--primary-color] bg-white display: flex">
           <div className=" pr-7 pl-5">
            <Image src="/GoogleLogo.jpg" width={25} height={25}/> </div> Sign in with Google
          </button>
          <br></br>
          <p className="dark:text-white py-2 text-center">OR</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="w-full text-white border-black border-b-2 outline-none dark:bg-[--bg-dark] dark:border-white"
            placeholder="Email"
            type="text"
            name=""
            id=""
          />
          <br></br>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="w-full text-white border-black border-b-2 outline-none dark:bg-[--bg-dark] dark:border-white"
            placeholder="Password"
            type="text"
            name=""
            id=""
          />
          <br></br>
          <input
            className="w-full text-white border-black border-b-2 outline-none dark:bg-[--bg-dark] dark:border-white"
            placeholder="Confirm Password"
            type="text"
            name=""
            id=""
          />
        </div>
        <p className="dark:text-white py-8 text-center"><a href="/login">Already have an account?</a></p>
        <div className="">
          <button onClick={() => handleRegister()} className="w-full rounded-2xl text-white p-2 dark:text-white bg-[--primary-color]">
            Submit
          </button>
        </div>
      </div>
    </div>

    );
}