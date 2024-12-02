import TitleHighlighted from "@/components/shared/highligted-title";
import SpeakerCard from "@/components/shared/speaker-card";
import { SpeakerCardListExammple } from "@/constants/example";
import React from "react";

const SpeakerList = () => {
  const title = `Our **Speaker**`;

  return (
    <div className="flex flex-col items-center gap-16 my-12 p-4">
      <div className="flex max-w-[1100px] flex-col items-center gap-3">
      <h2 className="text-4xl font-bold text-black-c1"> Our <span className="text-red-500">Speakers</span> </h2>
        <p className="text-center">
        At TEDx Baneshwor's second edition, we are proud to present a stellar lineup of speakers who come from diverse fields and bring with them unique perspectives and expertise.
        </p>
      </div>
      <div className="max-w-[1440px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {SpeakerCardListExammple?.map((item) => (
          <SpeakerCard key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SpeakerList;
