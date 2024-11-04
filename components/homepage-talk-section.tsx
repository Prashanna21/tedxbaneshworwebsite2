'use client'

import React, { useState } from "react";
import TalkSummaryCard from "./shared/talk-summary-card";
import {
  TALK_BANNER_CARD_EXAMPLE,
  TALK_SUMMARY_CARD_EXAMPLE,
} from "@/constants/example";
import TalkBanner from "./shared/talk-banner";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const HomePageTalkSection = () => {

  const [currentIndex, setCurrentIndex] = useState(0)
  return ( 


    <div className="my-10 md:my-20 mx-5 md:mx-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
        
        <section className="grid order-2 grid-cols-1 gap-4 md:gap-2 md:order-none">
          <div className="text-red-500 font-bold text-xl underline text-center md:text-left">Our Talks</div>

          {TALK_SUMMARY_CARD_EXAMPLE.map((talk, index) => 
                      <TalkSummaryCard key={index} {...talk} />
                    )}
                    
        </section>
        <section className="order-1 md:order-none">
          {/* View  all and arrow section  */}
        <div className="actions flex items-center justify-center md:justify-end gap-4 mr-8 mb-4">
            <Link
              href="https://www.youtube.com/results?search_query=intitle%3A%22tedxbaneshwor%22"
              target="_blank"
              className="text-red-500 font-bold text-lg underline"
            >
              View All
            </Link>
            <button className={`rounded-full border flex max-w-fit p-1 text-red-500 border-red-600 hover:bg-red-500 hover:text-white
                ${currentIndex === 0 ? "cursor-not-allowed opacity-45" : ""}
            `}
              disabled={currentIndex === 0}
              onClick={() => 
                setCurrentIndex((prevIndex) => prevIndex - 1)}
            >
              <ArrowLeft size={18} 
              />
            </button>
            <button className={`rounded-full border flex max-w-fit p-1 text-red-500 border-red-600 hover:bg-red-500 hover:text-white
                ${currentIndex >= (TALK_BANNER_CARD_EXAMPLE.length - 1) ? "cursor-not-allowed opacity-45" : ""}
            `}
            disabled={currentIndex >= (TALK_BANNER_CARD_EXAMPLE.length - 1)}
            onClick={() => setCurrentIndex((prevIndex) => prevIndex + 1)}
            >
              <ArrowRight size={18} />
            </button>
          </div>
          <div className="max-w-[555px] p-0 md:p-3 hover:bg-gray-200 hover:rounded-lg transition-colors duration-200 flex justify-center">
          <TalkBanner {...TALK_BANNER_CARD_EXAMPLE[currentIndex]} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePageTalkSection;
