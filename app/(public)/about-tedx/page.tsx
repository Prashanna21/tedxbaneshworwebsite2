import AboutBaneshwor from "@/components/shared/AboutBaneshwor";
import AboutExplore from "@/components/shared/AboutExplore";
import AboutHero from "@/components/shared/AboutHero";
import AboutMission from "@/components/shared/AboutMission";
import AboutTedx from "@/components/shared/AboutTedx";
import InfoBox from "@/components/shared/InfoBox";
import React from "react";

const AboutRoute = () => {
  return (
    
    <div className="">
      <AboutHero />
      <div className="bg-white p-20">
        <AboutTedx />
      </div>
      <div className="bg-slate-300">
        <AboutBaneshwor />
      </div>
      <div className="bg-white p-20">
        <AboutMission />
      </div>
      <div className="bg-slate-300">
        <AboutExplore />
      </div>
    </div>
  );
};

export default AboutRoute;
