import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

const ApplyCard = ({title, desc, imgSrc, applyLink, imgAlt = "tedxBaneshwor Tedx Baneshwor TedxBaneshwor"}) => {
    //For Title Last Word Style
    const titleWords = title.split(' ');
    const lastWord = titleWords.pop();


    return (
        <div className="w-[330px] flex flex-col justify-center items-center gap-y-2">
           <div className="relative w-[325px] h-[271px]">
                <Image 
                        className="s"
                        src={imgSrc}
                        fill
                        alt={imgAlt}
                        style={{
                            objectFit: 'cover',
                            borderRadius: "5px",
                            boxShadow : "4px 4px 4px rgba(0, 0, 0, 0.25)"
                        }}
                        
                    />
            </div>

                <h2 className="text-lg font-semibold text-black-c1">
                    {titleWords.join(' ')}{' '}
                    <span className="text-red-500">{lastWord}</span>
                </h2>

                <p className="text-black-c1 font-medium">{desc}</p>

                <a href={applyLink} target="_blank" className="w-full">
                <Button  className="w-full bg-red-500 hover:bg-red-600" variant="default">Apply</Button>
                </a>
        </div>

        
    );
  };
  
  export default ApplyCard;
  