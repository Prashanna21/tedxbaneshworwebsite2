import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

const ApplyCard = ({title, desc, imgSrc, imgAlt = "tedxBaneshwor Tedx Baneshwor TedxBaneshwor"}) => {
    //For Title Last Word Style
    const titleWords = title.split(' ');
    const lastWord = titleWords.pop();


    return (
        <>
           <div className="relative w-[325px] h-[271px]">
            <Image 
                    src={imgSrc}
                    fill
                    alt={imgAlt}
                    style={{
                        objectFit: 'cover',
                      }}
                    
                />
            </div>
            <h2 className="text-lg font-semibold text-black-c1">
                {titleWords.join(' ')}{' '}
                <span className="text-red-500">{lastWord}</span>
            </h2>

            <p className="text-black-c1">{desc}</p>

            <Button>Apply</Button>
        </>

        
    );
  };
  
  export default ApplyCard;
  