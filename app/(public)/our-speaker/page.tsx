import React from "react";
import SpeakerList from "./speaker-list";
import Image from "next/image";
import TitleHighlighted from "@/components/shared/highligted-title";

const OurSpeakerRoute = () => {
  const title = `Ideas that    \nShow us **the Future**`;

  return (
    <main>
      <div className="min-h-[600px] relative">
        <Image alt="banner" src={`/hero.png`} fill />
        <div className="absolute w-full h-full flex flex-col ml-10 items-start justify-center z-10 top-0 bottom-0 left-0">
          <TitleHighlighted
            title={title}
            className="text-white font-bold text-4xl"
          />
        </div>
      </div>
      <SpeakerList />
    </main>
  );
};

export default OurSpeakerRoute;
