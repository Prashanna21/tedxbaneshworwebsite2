'use client';

import React, { useState, useEffect } from "react";
import SpeakerCard from "./shared/speaker-card";
import Link from "next/link";
import { PerformerCardListExample } from "@/constants/example";
import CustomMDReactComponent from "@/provider/CustomMdComponent";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Importing icons

export default function HomePagePerformerList() {
  const title = `Meet Our **Performers**`;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [speakersToShow, setSpeakersToShow] = useState<number>(4); // Default to 4 speakers

  // Update the number of speakers to show based on screen size
  useEffect(() => {
    const updateSpeakersToShow = () => {
      if (window.innerWidth < 640) {
        setSpeakersToShow(2); // Show 1 card for small screens
      } else {
        setSpeakersToShow(4); // Show 4 cards for larger screens
      }
    };

    // Run on initial render
    updateSpeakersToShow();

    // Add event listener to update on window resize
    window.addEventListener('resize', updateSpeakersToShow);

    return () => {
      window.removeEventListener('resize', updateSpeakersToShow);
    };
  }, []);

  const visibleSpeakers = PerformerCardListExample.slice(currentIndex, currentIndex + speakersToShow);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < PerformerCardListExample.length - speakersToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // TODO: remove overflow-hidden later
  return (
    <section className=" bg-white px-1 md:px-32 py-20">
      <div className="flex flex-col items-center gap-8">
        <div className="section-title text-center text-black">
          <CustomMDReactComponent
            text={title}
            className="speaker_list-title text-4xl md:text-5xl font-bold text-black"
          />
          <p className="mt-4 text-md">
          Meet our talented performers, each bringing a unique blend of creativity and passion to the TEDx Baneshwor stage, inspiring and captivating audiences with their extraordinary skills.
          </p>
        </div>
        <div className="relative w-full flex items-center">
          {/* Left button */}
          <button
            className={`absolute z-40 left-0 p-2 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white text-black shadow-lg flex items-center justify-center bg-transparent
            ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <FiChevronLeft className="w-6 text-black-c1 h-6 z-100" />
          </button>

          <div className="flex justify-center sm:justify-between gap-4 md:gap-8 w-full overflow-hidden px-4 md:px-12">
            {visibleSpeakers.map((speaker, index) => (
              <SpeakerCard key={index} {...speaker} />
            ))}
          </div>

          {/* Right button */}
          <button
            className={`absolute right-0 p-2 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white text-black shadow-lg flex items-center justify-center bg-transparent
            ${currentIndex >= PerformerCardListExample.length - speakersToShow ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handleNext}
            disabled={currentIndex >= PerformerCardListExample.length - speakersToShow}
          >
            <FiChevronRight className="w-6 text-black-c1 h-6 " />
          </button>
        </div>
        <Link
          href="/our-speaker"
          className="text-red-500 font-semibold text-lg underline"
        >
          View All
        </Link>
      </div>
    </section>
  );
}
