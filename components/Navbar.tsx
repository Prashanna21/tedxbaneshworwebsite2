import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-slate-950 w-full px-8 py-2 flex items-center"> {/* Change items-start to items-center */}
      <div className="flex flex-col items-start">
        <div className="flex items-center space-x-1 leading-none">
          <h1 className="text-red-800 font-bold text-2xl">TEDx</h1>
          <h1 className="text-white text-2xl">Baneshwor</h1>
        </div>
        <p className="text-xs text-white leading-none">
          <span className="text-red-800">X</span> = independently organized TED event
        </p>
      </div>
      <div className="ml-auto flex gap-16"> {/* Remove left-1/2 */}
        <div className="flex space-x-6 items-center">
          <Link href="/" passHref>
            <span className="text-white text-sm hover:text-red-600">Home</span>
          </Link>
          <Link href="/about" passHref>
            <span className="text-white text-sm hover:text-red-600">About</span>
          </Link>
          <Link href="/explore" passHref>
            <span className="text-white text-sm hover:text-red-600">Explore</span>
          </Link>
          <Link href="/contact" passHref>
            <span className="text-white text-sm hover:text-red-600">Contact</span>
          </Link>
          <Link href="/getinvolved" passHref>
            <span className="bg-red-600 text-white px-4 py-2 rounded-3xl hover:bg-red-700">Get Involved</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
