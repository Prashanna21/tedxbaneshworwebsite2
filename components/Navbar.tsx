"use client";
import { NAV_LINKS_EXAMPLE } from "@/constants/example";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { IoIosMenu, IoMdClose, IoMdArrowDropdown } from "react-icons/io";
import Image from "next/image";

const NavLink = ({ url, title }) => (
  <Link href={url}>
    <span className="text-white text-sm hover:text-red-600">{title}</span>
  </Link>
);

const Navbar = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [exploreDropdownActive, setExploreDropdownActive] = useState(false);
  const [aboutDropdownActive, setAboutDropdownActive] = useState(false);

  return (
    <nav className="bg-slate-950 w-full fixed z-50 left-0 right-0 top-0">
      <div className="px-6 md:px-8 py-2 md:py-0 flex mx-auto items-center md:max-w-[1400px]">
        <div className="flex flex-col items-center w-[180px] sm:w-[185px]">
          <Image
            width={200}
            height={100}
            src={"/logos/tedx_text.png"}
            alt="logo"
            style={{ objectFit: "cover", height: "auto" }}
          />
        </div>
        <div className="ml-auto flex gap-16">
          <div className="hidden md:flex space-x-10 items-center">
            {NAV_LINKS_EXAMPLE?.map((navLink) => (
              <NavLink key={navLink.id} {...navLink} />
            ))}

            <div
              className="relative min-h-16 items-center flex"
              onMouseEnter={() => setExploreDropdownActive(true)}
              onMouseLeave={() => setExploreDropdownActive(false)}
            >
              <label className="flex items-center text-white text-sm hover:text-red-600 cursor-pointer">
                Explore
                <IoMdArrowDropdown
                  className={`text-[#726A6A] ml-[-1px] ${
                    exploreDropdownActive
                      ? "rotate-180 transition-transform duration-300 ease-in-out"
                      : ""
                  }`}
                />
              </label>
              <ul
                className={`absolute top-full  bg-[#EF4444] text-white w-56  py-2 transform transition-all duration-500 ease-in-out shadow-[0_4px_8px_rgba(0,0,0,0.4)] ${
                  exploreDropdownActive
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 -translate-y-4 invisible"
                }`}
              >
                <li className="px-4 py-2 hover:bg-[#c15151] cursor-pointer">
                  <Link href={"/first-edition"}>Tedx First Editon</Link>
                </li>

                <li className="px-4 py-2 hover:bg-[#c15151] cursor-pointer">
                  <Link href={"/first-edition"}>Tedx First Editon</Link>
                </li>
              </ul>
            </div>

            <div
              className="relative min-h-16 flex justify-center items-center"
              onMouseEnter={() => setAboutDropdownActive(true)}
              onMouseLeave={() => setAboutDropdownActive(false)}
            >
              <label className="flex items-center text-white text-sm hover:text-red-600 cursor-pointer">
                About Us
                <IoMdArrowDropdown
                  className={`text-[#726A6A] ml-[-1px] ${
                    aboutDropdownActive
                      ? "rotate-180 transition-transform duration-300 ease-in-out"
                      : ""
                  }`}
                />
              </label>

              <ul
                className={`absolute left-0 top-full  bg-[#EF4444] text-white w-56  py-2 transform transition-all duration-500 ease-in-out shadow-[0_4px_8px_rgba(0,0,0,0.4)] ${
                  aboutDropdownActive
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 -translate-y-4 invisible"
                }`}
              >
                <li className="px-4 py-2 hover:bg-[#c15151] cursor-pointer">
                  <Link href={"/about-tedx"}>About Tedx</Link>
                </li>

                <li className="px-4 py-2 hover:bg-[#c15151] cursor-pointer">
                  <Link href={"/our-team"}>About Our Team</Link>
                </li>
              </ul>
            </div>

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
                isMenuClicked ? "rotate-180 scale-125" : "rotate-0 scale-100"
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
          isMenuClicked ? "max-h-100 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-5">
          <div className="flex flex-col space-y-5 items-center ">
            {NAV_LINKS_EXAMPLE?.map((navLink) => (
              <NavLink key={navLink.id} {...navLink} />
            ))}

            <div
              className="relative flex flex-col justify-center items-center"
              onClick={() => setExploreDropdownActive(!exploreDropdownActive)}
            >
              <label className="flex items-center text-white text-sm cursor-pointer">
                Explore
                <IoMdArrowDropdown
                  className={`text-[#726A6A] ml-[-1px] ${
                    exploreDropdownActive
                      ? "rotate-180 transition-transform duration-300 ease-in-out"
                      : ""
                  }`}
                />
              </label>

              <ul
                className={`text-white ml-20 transform transition-all duration-500 ease-in-out shadow-[0_4px_8px_rgba(0,0,0,0.4)] ${
                  exploreDropdownActive ? " block" : "hidden"
                }`}
              >
                <li className=" py-2 text-sm  cursor-pointer">
                  <Link href={"/tedx-first"}>Tedx First Edition</Link>
                </li>

                <li className="py-2 text-sm cursor-pointer">
                  <Link href={"/tedx-second"}>Text Second Edition</Link>
                </li>
              </ul>
            </div>

            <div
              className="relative flex flex-col justify-center items-center"
              onClick={() => setAboutDropdownActive(!aboutDropdownActive)}
            >
              <label className="flex items-center text-white text-sm cursor-pointer">
                About Us
                <IoMdArrowDropdown
                  className={`text-[#726A6A] ml-[-1px] ${
                    aboutDropdownActive
                      ? "rotate-180 transition-transform duration-300 ease-in-out"
                      : ""
                  }`}
                />
              </label>

              <ul
                className={`text-white ml-20 transform transition-all duration-500 ease-in-out shadow-[0_4px_8px_rgba(0,0,0,0.4)] ${
                  aboutDropdownActive ? " block" : "hidden"
                }`}
              >
                <li className=" py-2 text-sm  cursor-pointer">
                  <Link href={"/about-tedx"}>About Tedx</Link>
                </li>

                <li className="py-2 text-sm cursor-pointer">
                  <Link href={"/our-team"}>About Our Team</Link>
                </li>
              </ul>
            </div>

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
