import OurTeamHeroSection from "@/components/our-team-hero-section";
import TitleHighlighted from "@/components/shared/highligted-title";
import InfoBox from "@/components/shared/InfoBox";
import SpeakerCard from "@/components/shared/speaker-card";
import { DevTeamCardList, SpeakerCardListExammple, TeamCardList } from "@/constants/example";
import Image from "next/image";
import React from "react";

const OurTeamRoute = () => {

  return (
    <main>
      <OurTeamHeroSection />

      <InfoBox 
        title = {<div className="md:col-span-2 mt-1">
          <h2 className="text-2xl md:text-3xl font-bold  mb-1 md:mb-6 text-black-c1">
            Our <span className="text-red-500">Story</span>
          </h2>
        </div>} 
        imgSrc="/speaker-talk-pic/Rahbar-Ansari-TedxBaneshwor.jpg" 
        desc = {<div>
          <p className="mb-5">TEDx Baneshwor is an independently organized TED event and part of the global TEDx program. It allows local communities to experience the spirit of TED’s mission of 'ideas worth spreading' through self-organized events that bring people together to share a TED-like experience.</p>
          <p>
          TEDx Baneshwor serves as a platform for thought leaders, innovators, and changemakers from various fields to showcase their stories, research, and insights.
          </p>
          </div>
        } 
        rowRev  = {false}
        bgColor="#F4F5FF"
      
      />


      <section className="bg-dark-c1 py-12">
        <div className="flex flex-col items-center gap-6 max-w-[1100px] mx-auto px-4">
          <h2 className="text-4xl font-bold text-white"> Meet Our <span className="text-red-500">Leadership</span> Team </h2>
          <p className="text-white text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit optio
            tempora harum, deserunt magni, et at exercitationem tempore quaerat
            eum illum, voluptatibus veniam dignissimos delectus obcaecati
            blanditiis cupiditate dolorem alias!
          </p>
          <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {TeamCardList?.map((item) => (
              <SpeakerCard key={item.name} {...item} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="flex flex-col items-center gap-6 max-w-[1100px] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center font-bold text-black-c1"> Meet Our <span className="text-red-500">Developer</span> Team </h2>
          <p className="text-center">
          Who built the TEDx Baneshwor website using Next.js with TypeScript and Tailwind CSS for smooth development and styling, with all the designs coming together in Figma. Super proud of what our team has put together!
          </p>
          <div className="max-w-[1200px] justify-center mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {DevTeamCardList?.map((item) => (
              <SpeakerCard key={item.name} {...item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurTeamRoute;
