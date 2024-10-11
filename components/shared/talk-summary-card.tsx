import { TTalkSummaryCard } from "@/types/type";
import Image from "next/image";
import React from "react";

const TalkSummaryCard = ({ src, title }: TTalkSummaryCard) => {
  return (
    <div className="flex flex-col md:flex-row md:gap-6 justify-start items-start">
      <div className="relative min-w-[210px] min-h-[145px]">
        <div className="absolute top-2 left-2">
          <Image
            width={50}
            height={50}
            alt="logo"
            src={`/logos/tedx_full.png`}
          />
        </div>
        <Image
          width={210}
          height={145}
          alt="speaker"
          src={src}
          className="h-[200px] w-96 md:h-[145px] md:w-[210px]"
        />
      </div>
      <p className="font-medium text-lg text-justify line-clamp-5">{title}</p>
    </div>
  );
};

export default TalkSummaryCard;
