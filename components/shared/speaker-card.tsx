import React from "react";
import { Card, CardFooter } from "../ui/card";
import Image from "next/image";
import { TSpeakerCardProps } from "@/types/type";

const SpeakerCard = ({ name, position, imageSrc }: TSpeakerCardProps) => {
  return (
    <Card className="rounded-5 bg-red-500">
      <Image alt="speaker" src={imageSrc} width={210} height={206} />
      <CardFooter className="p-6 text-white flex flex-col">
        <h6 className="font-bold text-lg">{name}</h6>
        <p className="font-semibold text-md">{position}</p>
      </CardFooter>
    </Card>
  );
};

export default SpeakerCard;
