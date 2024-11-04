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
  imgSrc,
  ytLink,
}: TTalkBannerProps) => {
  return (
    <a href={ytLink} target="_blank" rel="noopener noreferrer">
        <div className="cursor-pointer flex flex-col gap-2 max-w-[555px] ">
        <Image
          alt="talk"
          width={555}
          height={330}
          className="md:h-[330px] rounded mx-auto md:mx-0"
          src={imgSrc}
          
        />
        <div className="hidden md:flex gap-3 justify-center md:justify-normal md:gap-1  text-[22px] md:text-xl items-center">
          <CustomMDReactComponent
            className=" talk_banner-highlight font-semibold"
            text={highlight}
          />
          <p className="font-medium text-[22px] md:text-xl leading-6 text-gray-900">
            <span className="text-red-500">"</span>
            {title}
            <span className="text-red-500">"</span>
          </p>
        </div>
        <p className="text-center md:text-left font-bold text-[20px] md:text-xl leading-6 text-gray-900">
          <span className="text-red-500">"</span>
          {tag}
          <span className="text-red-500">"</span>
        </p>
        <p className="text-center md:text-left font-medium md:text-lg leading-6">{description}</p>
        <Separator className="mx-auto md:mx-0 w-2/4 md:w-1/4 h-[2px] bg-red-500" />
      </div>
    </a>
  );
};

export default TalkBanner;
