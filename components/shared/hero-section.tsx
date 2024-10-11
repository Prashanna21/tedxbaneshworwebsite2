import { getHeroDetails } from "@/actions/homepage";
import CustomMDReactComponent from "@/provider/CustomMdComponent";
import React from "react";
import { Button } from "../ui/button";

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
          className="hero_title text-lg md:text-6xl font-extrabold mb-4 leading-tight tracking-wide"
          text={title}
        />
        <CustomMDReactComponent
          className="hero_tag md:text-2xl mb-8 font-semibold"
          text={tag}
        />
        <div className="flex space-x-4">
          <Button variant="destructive" className="font-bold text-xl py-8 px-6">
            Explore More
          </Button>
          <Button className="font-bold text-xl py-8 px-6" variant="secondary">
            Buy Tickets
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
