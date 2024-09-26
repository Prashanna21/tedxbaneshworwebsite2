
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-slate-950 w-full px-8 py-2 flex items-start">
      <div className="flex flex-col items-start">
        <div className="flex items-center space-x-1 leading-none">
          <h1 className="text-red-800 font-bold text-2xl">TEDx</h1>
          <h1 className="text-white text-2xl">Baneshwor</h1>
        </div>
        <p className="text-xs text-white leading-none">
          <span className="text-red-800">X</span> = independently organized TED event
        </p>
      </div>
      <div className="left-1/2 ml-auto flex gap-16">
      <div className="flex space-x-6 items-center">
      <Link href="/" passHref>
        <a className="text-white text-sm hover:text-red-600">Home</a>
        </Link>
        <Link href="/about" passHref>
        <a href="#" className="text-white text-sm hover:text-red-600">About</a>
        </Link>
        <Link href="/explore" passHref>
        <a href="#" className="text-white text-sm hover:text-red-600">Explore</a>
        </Link>
        <Link href="/contact" passHref>
        <a href="#" className="text-white text-sm hover:text-red-600">Contact</a></Link>
        <Link href="/getinvolved" passHref>
        <a href="#" className="bg-red-600 text-white px-4 py-2 rounded-3xl hover:bg-red-700">Get Involved</a></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
