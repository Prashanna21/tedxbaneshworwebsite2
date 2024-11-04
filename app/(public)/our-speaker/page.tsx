import React from "react";
import SpeakerList from "./speaker-list";
import Image from "next/image";
import TitleHighlighted from "@/components/shared/highligted-title";
import SpeakerHeroSection from "@/components/shared/speakerHeroSection";

const OurSpeakerRoute = () => {

  return (
    <main>
      <SpeakerHeroSection />

      <SpeakerList />
    </main>
  );
};

export default OurSpeakerRoute;
