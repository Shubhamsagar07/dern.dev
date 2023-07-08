"use client";
import { useEffect, useState } from "react";
import { useThemeContext, useUserContext } from "../context/store";
import supabase from "@/utils/supabase";
import { useRouter } from "next/navigation";
import Image from "next/image";
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
      <div className="w-96 h-[32rem] shadow-3xl p-11 rounded-lg">
        <h1 className="dark:text-white text-center py-6 text-2xl">Login</h1>
        <br></br><br></br>
        <div className="w-full h-36 flex flex-col justify-evenly items-center">
          <button
            onClick={() => handleLogin()}
            className="w-full rounded-2xl text-black p-2 dark:text-black bg-[--primary-color] dark:bg-white display: flex "
          >
            <div className=" pr-8 pl-6 align-left">
           <Image className=" " src="/GoogleLogo.jpg" width={25} height={25} />
           </div> Login with Google
          </button><br></br>
          <p className="dark:text-white py-2 text-center">OR</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="w-full text-white border-black border-b-2 outline-none dark:bg-[--bg-dark] dark:border-white "
            placeholder="Email"
            type="text"
            name=""
            id=""
          />
          <br></br><br></br>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="w-full text-white border-black border-b-2 outline-none dark:bg-[--bg-dark] dark:border-white "
            placeholder="Password"
            type="text"
            name=""
            id=""
          />
          <br></br>
        </div>
        <br></br>
        <p className="dark:text-white py-8 text-center">Forgot password?</p>
        <div className="">
          <button
            onClick={() => handleLogin()}
            className="w-full rounded-2xl text-white p-2 dark:text-white bg-[--primary-color] "
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
