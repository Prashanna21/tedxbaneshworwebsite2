import TitleHighlighted from "@/components/shared/highligted-title";
import SpeakerCard from "@/components/shared/speaker-card";
import { SpeakerCardListExammple } from "@/constants/example";
import Image from "next/image";
import React from "react";

const OurTeamRoute = () => {
  const heroTitle = `Our **Story**`;
  const leadershipTitle = `Meet Our **Leadership** Team`;
  const developerTitle = `Meet Our **Developer** Team`;

  return (
    <main>
      <section>
        <div className="flex gap-6 max-w-[1440px] mx-auto py-10 px-4">
          <div className="flex flex-col gap-4 ">
            <TitleHighlighted title={heroTitle} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
              optio tempora harum, deserunt magni, et at exercitationem tempore
              quaerat eum illum, voluptatibus veniam dignissimos delectus
              obcaecati blanditiis cupiditate dolorem alias!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              deleniti enim voluptas sit fugit a odio laudantium ad ea,
              inventore cum delectus exercitationem temporibus. Labore quis
              necessitatibus quaerat. Dignissimos, animi.
            </p>
          </div>
          <Image
            alt="banner"
            width={555}
            height={330}
            src={`/about/tedx.png`}
          />
        </div>
      </section>
      <section className="bg-dark-c1 py-12">
        <div className="flex flex-col items-center gap-6 max-w-[1300px] mx-auto px-4">
          <TitleHighlighted title={leadershipTitle} className="text-white" />
          <p className="text-white text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit optio
            tempora harum, deserunt magni, et at exercitationem tempore quaerat
            eum illum, voluptatibus veniam dignissimos delectus obcaecati
            blanditiis cupiditate dolorem alias!
          </p>
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SpeakerCardListExammple?.map((item) => (
              <SpeakerCard key={item.name} {...item} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="flex flex-col items-center gap-6 max-w-[1300px] mx-auto px-4">
          <TitleHighlighted title={developerTitle} />
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit optio
            tempora harum, deserunt magni, et at exercitationem tempore quaerat
            eum illum, voluptatibus veniam dignissimos delectus obcaecati
            blanditiis cupiditate dolorem alias!
          </p>
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SpeakerCardListExammple?.map((item) => (
              <SpeakerCard key={item.name} {...item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurTeamRoute;
