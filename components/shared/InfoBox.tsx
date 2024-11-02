import { TInfoBox } from "@/types/type";
import Image from "next/image";
import React from "react";


const InfoBox = ({
    title,
    desc,
    imgSrc,
    rowRev,
    bgColor
  }: TInfoBox) => {



    return(
        <div className={`min-h-[560px] mb-5 py-4 md:py-0 md:mb-0 justify-center items-center flex mx-auto  `} 
              style={{
                backgroundColor : bgColor,
              }}>
          <div
                className={`flex w-full h-[700px] md:h-[330px] flex-col md:flex-row px-4 md:px-0 md:max-w-[1100px] gap-1 md:gap-8 ${
                  rowRev ? "md:flex-row-reverse flex-col-reverse" : ""
                }`}
              >
            <div className="flex-1 flex flex-col md:self-start text-black-c1">
                    {title}
                    {desc}
                </div>

                <div className="relative flex-1 md:h-[330px]">
                    <Image alt="speaker" src={imgSrc} fill 
                    sizes="400px" 
                    style={{
                    objectFit: "cover",
                    borderRadius: "5px"
                    }} />
                </div>
           </div>
        </div>
    )

  }


  export default InfoBox