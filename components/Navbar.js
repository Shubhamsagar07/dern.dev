"use client";
import Link from "next/link";
import { useUserContext, useThemeContext } from "@/app/context/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import supabase from "@/utils/supabase";

export default function Navbar() {
  const { user, setUser } = useUserContext();
  const { theme, handleThemeSwitch } = useThemeContext();
  const [toggleOption, setToggleOption] = useState(false);

  let router = useRouter();

  if (!user.id) {
    router.push("/login");
  }

  const handleSignOut = async () => {
    setUser({});
    setToggleOption(false);
    const { error } = await supabase.auth.signOut();
    if (!error) {
      router.push("/login");
    }
  };

  return (
    <div className="w-full h-16 flex flex-row justify-between px-10 items-center dark:bg-[--bg-dark] dark:text-white">
      <div>
        <p className="font-bold">Dern.dev</p>
      </div>
      {user.id ? (
        <div>
          <button onClick={() => setToggleOption(!toggleOption)} className="">
            <Image
              className="rounded-2xl border-2 border-white"
              src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1688637776~exp=1688638376~hmac=29f44f31050a155a7766e30010bcad669ed56dba2d1e659ccf03135691b8a4c6"
              width={30}
              height={30}
            />
          </button>
          {toggleOption && (
            <div className="w-40 absolute shadow-lg border border-black rounded-lg right-10 p-4 dark:bg-[--bg-dark]">
              <div>
                <div className="w-full flex justify-between py-1">
                  <p>Dark Mode</p>
                  <button onClick={handleThemeSwitch}>
                    {theme === "dark" ? (
                      <BsToggleOn size={25} />
                    ) : (
                      <BsToggleOff size={25} />
                    )}
                  </button>
                </div>
                <button onClick={() => handleSignOut()} className="py-1">
                  Sign out
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <ul>
          <Link
            className="p-2 text-white bg-[--primary-color] rounded-lg"
            href="/login"
          >
            Login
          </Link>
          <Link className="p-5" href="/register">
            Sign in
          </Link>
        </ul>
      )}
    </div>
  );
}
