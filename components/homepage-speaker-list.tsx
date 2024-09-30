'use client';

import React, { useState } from "react";
import SpeakerCard from "./shared/speaker-card";
import Link from "next/link";
import { SpeakerCardListExammple } from "@/constants/example";
import CustomMDReactComponent from "@/provider/CustomMdComponent";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Importing icons

export default function HomepageSpeakerList() {
  const title = `Meet Our **Speakers**`;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const speakersToShow = 4; // Number of speakers to show at a time

  const visibleSpeakers = SpeakerCardListExammple.slice(currentIndex, currentIndex + speakersToShow);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < SpeakerCardListExammple.length - speakersToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <section className="bg-blue-c1 px-32 py-20">
      <div className="flex flex-col items-center gap-8">
        <div className="section-title text-center text-white">
          <CustomMDReactComponent
            text={title}
            className="speaker_list-title text-5xl font-bold text-white"
          />
          <p className="mt-4 text-md">
            Lorem ipsum dolor sit amet consectetur. Facilisi at nunc risus amet
            praesent. Egestas elit interdum sem odio purus. Sed duis nunc vel
            libero morbi nulla senectus ac.
          </p>
        </div>
        <div className="relative w-full flex items-center">
          {/* Left button */}
          <button
            className={`absolute left-0 p-2 w-10 h-10 rounded-full bg-white text-black shadow-lg flex items-center justify-center bg-transparent
            ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <FiChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex justify-between gap-8 w-full overflow-hidden px-12">
            {visibleSpeakers.map((speaker, index) => (
              <SpeakerCard key={index} {...speaker} />
            ))}
          </div>

          {/* Right button */}
          <button
            className={`absolute right-0 p-2 w-10 h-10 rounded-full bg-white text-black shadow-lg flex items-center justify-center bg-transparent
            ${currentIndex >= SpeakerCardListExammple.length - speakersToShow ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handleNext}
            disabled={currentIndex >= SpeakerCardListExammple.length - speakersToShow}
          >
            <FiChevronRight className="w-6 h-6 " />
          </button>
        </div>
        <Link
          href="/speakers"
          className="text-red-500 font-semibold text-lg underline"
        >
          View All
        </Link>
      </div>
    </section>
  );
}
