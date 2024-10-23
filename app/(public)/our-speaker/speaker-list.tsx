import TitleHighlighted from "@/components/shared/highligted-title";
import SpeakerCard from "@/components/shared/speaker-card";
import { SpeakerCardListExammple } from "@/constants/example";
import React from "react";

const SpeakerList = () => {
  const title = `Our **Speaker**`;

  return (
    <div className="flex flex-col items-center gap-16 my-12 p-4">
      <div className="flex max-w-[1440px] flex-col items-center">
        <TitleHighlighted title={title} />
        <p className="text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
          ducimus non atque esse, voluptates deleniti cupiditate dolor illum
          animi unde possimus repellat ullam culpa. Quo a modi obcaecati esse
          dolores.
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
