import React from "react";
import { Card, CardFooter } from "../ui/card";
import Image from "next/image";
import { TSpeakerCardProps } from "@/types/type";

const SpeakerCard = ({ name, position, imageSrc }: TSpeakerCardProps) => {
  return (
   

    <div className="min-h-[307px]">
      <div className="relative h-[150px] w-[150px] z-0  md:w-[200px] md:h-[200px]">
        <Image alt="speaker" src={imageSrc} fill style={{
          objectFit: "cover",
          borderRadius: "5px"
        }} />
      </div>

      <div className="bg-red-500 mt-[-4px] rounded-5 text-white flex flex-col justify-center text-center h-[95px] px-2 w-[150px] md:w-[200px]">
        <h6 className="font-bold text-md">{name}</h6>
        <p className="font-medium text-[15px]">{position}</p>
      </div>
      
    </div>
  );
};

export default SpeakerCard;


 {/* <Card className="rounded-5 bg-red-500 z-1 w-[200px]">
      <div className="relative w-[152px] h-[150px]  md:w-[200px] md:h-[200px]">
        <Image alt="speaker" src={imageSrc} fill style={{
          objectFit: "cover"
        }} />
      </div>
      <CardFooter className="p-6 w-full text-white flex flex-col">
        <h6 className="font-bold text-lg">{name}</h6>
        <p className="font-semibold text-md">{position}</p>
      </CardFooter>
    </Card> */}