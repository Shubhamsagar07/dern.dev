"use client"
import Link from "next/link"

export default function Navbar() {

  return (
    <div className='w-full h-16 flex flex-row justify-between px-10 items-center dark:bg-[--bg-dark] dark:text-white'>
        <div>
            <p className="font-bold">Dern.dev</p>
        </div>
        <ul>
            <Link className="p-2 text-white bg-[--primary-color] rounded-lg" href="/login" >Login</Link>            
            <Link className="p-5" href="/register" >Sign in</Link>
        </ul>
    </div>
  )
}
