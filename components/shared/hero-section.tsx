import { getHeroDetails } from "@/actions/homepage";
import CustomMDReactComponent from "@/provider/CustomMdComponent";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const HeroSection: React.FC = async () => {
  const heroDetails = await getHeroDetails();

  const { title, image, tag } = heroDetails;

  return (
    <section
      className="relative h-[440px] sm:h-screen  bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero.png')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 flex flex-col items-start justify-center h-full text-white px-6 pt-12 md:pt-0 md:px-20 lg:px-32">
        <CustomMDReactComponent
          className="hero_title text-2xl md:text-6xl font-extrabold mb-4 leading-tight tracking-wide"
          text={title}
        />
        <CustomMDReactComponent
          className="hero_tag max-w-56 text-[16px] md:max-w-full md:text-2xl mb-[65px] md:mb-8 md:mt-0 font-semibold"
          text={tag}
        />
        <div className="flex flex-row md:flex-row gap-6 md:gap-4 md:space-x-4">
        <Link href="/about-tedx">
              <Button variant="destructive" className="font-bold text-lg py-6 px-4 md:py-8 md:text-xl md:px-6">
                Explore More
              </Button> 
          </Link>
          <Button className="font-bold text-lg py-6 px-4 md:py-8 md:px-6 md:text-xl" variant="secondary">
            Buy Tickets
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
