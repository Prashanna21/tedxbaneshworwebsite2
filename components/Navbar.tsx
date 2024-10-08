import { NAV_LINKS_EXAMPLE } from "@/constants/example";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const NavLink = ({ url, title }) => (
  <Link href={url}>
    <span className="text-white text-sm hover:text-red-600">{title}</span>
  </Link>
);

const Navbar = () => {
  return (
    <div className="bg-slate-950 w-full fixed z-50 left-0 right-0">
      <div className="px-8 py-2.5 flex mx-auto items-center max-w-[1400px] ">
        {" "}
        {/* Change items-start to items-center */}
        <div className="flex flex-col items-start">
          <Image
            width={200}
            height={100}
            src={"/logos/tedx_text.png"}
            alt="logo"
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
