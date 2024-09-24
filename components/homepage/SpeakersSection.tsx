//react ts compoent
import React from "react";
import { SpeakerCardExampleData } from "@/constants/example";
import SpeakerCard from "../shared/speaker-card";
import Link from "next/link";

export default function SpeakersSection() {
  return (
    <section className="bg-blue-c1 px-32 py-20">
      <div className="flex flex-col items-center gap-8">
        <div className="section-title text-center text-white">
          <h2 className="text-5xl font-bold">
            Meet Our <span className="text-red-c5">Speakers</span>
          </h2>
          <p className="mt-4 text-md">
            Lorem ipsum dolor sit amet consectetur. Facilisi at nunc risus amet
            praesent. Egestas elit interdum sem odio purus. Sed duis nunc vel
            libero morbi nulla senectus ac.
          </p>
        </div>
        <div className="flex justify-between gap-8">
          {SpeakerCardExampleData.map((speaker, index) => (
            <SpeakerCard key={index} {...speaker} />
          ))}
        </div>
        <Link
          href="/speakers"
          className="text-red-500 font-semibold text-lg underline">
          View All
        </Link>
      </div>
    </section>
  );
}
