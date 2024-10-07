'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function Header() {
  const router = useRouter();
  
  function handleClick() {
    router.push('/contact');
  }

  return (
<div className="px-5 md:px-20 fixed top-0 left-0 w-full flex flex-col md:flex-row justify-between border border-gray-500 p-3 bg-gray-900 items-center z-50 shadow-lg">
  <div className="mb-3 md:mb-0">
    <h1 className="text-lg md:text-xl font-bold font-serif text-white">Sagar Kanungo</h1>
  </div>

  <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-5 font-serif items-center">
    <Link href="/" className="hover:text-sky-600 text-white">Home</Link>
    <Link href="#about" className="hover:text-sky-600 text-white">About</Link>
    <Link href="#ServiceSection" className="hover:text-sky-600 text-white">Services & Projects</Link>
    <Link href="#contact" className="hover:text-sky-600 text-white">Contact</Link>
  </div>

  {/* Hire Me Button */}
  {/* Uncomment the button if you want to include it */}
  {/* <button onClick={handleClick} 
    className="px-4 py-2 border-2 rounded-full text-white hover:bg-sky-600 transition duration-150 ease-in-out shadow-lg font-serif">
    Hire Me
  </button> */}
</div>

  );
}

export default Header;
