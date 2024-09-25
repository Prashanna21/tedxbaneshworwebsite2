//react ts compoent
import React from "react";
import SpeakerCard from "./shared/speaker-card";
import Link from "next/link";
import { SpeakerCardListExammple } from "@/constants/example";
import CustomMDReactComponent from "@/provider/CustomMdComponent";

export default function HomepageSpeakerList() {
  const title = `Meet Our **Speakers**`;

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
        <div className="flex justify-between gap-8">
          {SpeakerCardListExammple?.map((speaker, index) => (
            <SpeakerCard key={index} {...speaker} />
          ))}
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
