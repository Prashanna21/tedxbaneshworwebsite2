'use client'
import { NAV_LINKS_EXAMPLE } from "@/constants/example";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { IoIosMenu, IoMdClose  } from "react-icons/io";
import Image from "next/image";

const NavLink = ({ url, title }) => (
  <Link href={url}>
    <span className="text-white text-sm hover:text-red-600">{title}</span>
  </Link>
);


const Navbar = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false)



  return (
    <nav className="bg-slate-950 w-full fixed z-50 left-0 right-0">
      <div className="px-6 md:px-8 py-2.5 flex mx-auto items-center md:max-w-[1400px] ">
        {" "}

        <div className="flex flex-col items-center w-[180px] sm:w-[185px]">
          <Image
            width={200}
            height={100}
            src={"/logos/tedx_text.png"}
            alt="logo"
            layout="responsive"

          />
        </div>
        <div className="ml-auto flex gap-16">
          {" "}
          {/* Remove left-1/2 */}
          <div className="hidden md:flex space-x-10 items-center">
            {NAV_LINKS_EXAMPLE?.map((navLink) => (
              <NavLink key={navLink.id} {...navLink} />
            ))}
            <Link href="/getinvolved">
              <Button className="bg-red-600 text-white px-4 py-2 rounded-3xl hover:bg-red-700">
                Get Involved
              </Button>
            </Link>
          </div>
          
          <div
            className="md:hidden flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuClicked(!isMenuClicked)}
          >
            <div
              className={`transition-transform duration-300 ease-in-out ${
                isMenuClicked ? 'rotate-180 scale-125' : 'rotate-0 scale-100'
              }`}
            >
              {isMenuClicked ? (
                <IoMdClose size={29} className="text-white" />
              ) : (
                <IoIosMenu size={34} className="text-white" />
              )}
            </div>
          </div>


        </div>
      </div>
      
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuClicked ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-5">
          <div className="flex flex-col space-y-4 items-center">
            {NAV_LINKS_EXAMPLE?.map((navLink) => (
              <NavLink key={navLink.id} {...navLink} />
            ))}
            <Link href="/getinvolved">
              <Button className="bg-red-600 text-white px-4 py-2 rounded-3xl hover:bg-red-700">
                Get Involved
              </Button>
            </Link>
          </div>
        </div>
      </div>


    </nav>
  );
};

export default Navbar;
