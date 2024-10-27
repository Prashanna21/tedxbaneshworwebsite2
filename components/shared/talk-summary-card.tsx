import { TTalkSummaryCard } from "@/types/type";
import Image from "next/image";
import React from "react";

const TalkSummaryCard = ({ src, title , desc, link}: TTalkSummaryCard) => {
  return (
    <a href={link} target="_blank">
      <div className="flex flex-col md:flex-row cursor-pointer md:gap-6 justify-start items-start">
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
          style={{
            objectFit: "cover"
          }}
          className="h-[200px] w-96 md:h-[145px] md:w-[210px]"
        />
      </div>
     <div className="flex flex-col h-[145px] overflow-hidden">
     <h2 className="font-semibold text-[15px] overflow-ellipsis">{title}</h2>
     <p className="font-normal text-sm ">{desc}</p>
     </div>
    </div>
    </a>
  );
};

export default TalkSummaryCard;
