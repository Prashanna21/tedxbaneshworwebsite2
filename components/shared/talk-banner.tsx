import Image from "next/image";
import React from "react";
import { Separator } from "../ui/separator";
import CustomMDReactComponent from "@/provider/CustomMdComponent";
import { TTalkBannerProps } from "@/types/type";

const TalkBanner = ({
  tag,
  highlight,
  title,
  description,
}: TTalkBannerProps) => {
  return (
    <div className="flex flex-col gap-2 max-w-[700px]">
      <Image
        alt="talk"
        width={555}
        height={330}
        className="h-[330px] rounded mx-auto"
        src={`/hero.png`}
      />
      <div className="flex gap-1 items-center">
        <CustomMDReactComponent
          className="talk_banner-highlight font-semibold"
          text={highlight}
        />
        <p className="font-medium text-lg leading-6 text-gray-900">
          <span className="text-red-500">"</span>
          {title}
          <span className="text-red-500">"</span>
        </p>
      </div>
      <p className="font-bold text-lg leading-6 text-gray-900">
        <span className="text-red-500">"</span>
        {tag}
        <span className="text-red-500">"</span>
      </p>
      <p className="font-medium text-lg leading-6">{description}</p>
      <Separator className="w-1/4 h-[2px] bg-red-500" />
    </div>
  );
};

export default TalkBanner;
