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
        <div className={`min-h[560px] bg-${bgColor} flex gap-5 ${rowRev === true ? "flex-row-reverse" : ""}`} >
            <div className="flex-1">
                {title}
                {desc}
            </div>

            <div className="relative flex-1 h-[330px]">
                <Image alt="speaker" src={imgSrc} fill 
                sizes="500px" 
                style={{
                objectFit: "cover",
                borderRadius: "5px"
                }} />
            </div>
        </div>
    )

  }


  export default InfoBox