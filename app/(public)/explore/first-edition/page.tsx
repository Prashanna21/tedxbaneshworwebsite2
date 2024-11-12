import HomePageTalkSection from "@/components/homepage-talk-section";
import InfoBox from "@/components/shared/InfoBox";
import SpeakerCard from "@/components/shared/speaker-card";
import { FirstEditionPerformers, FirstEditionSpeakerList, TeamCardList } from "@/constants/example";
import GallerySection from "./GallerySection";



export default function GetInvolved() {
  return (
    <> 
      <main
      className="h-[350px] md:h-screen relative flex md:justify-start md:pl-10 justify-center items-center"
      style={{
        backgroundImage : "url('/png/Tedx-firstEd.webp')",
        backgroundSize: "cover"
      }}
      >
    {/* <h1 className="hero_title text-white text-[23px] md:text-5xl font-extrabold leading-tight tracking-wide">
    <span className="text-red-500">"</span>
    Innovation, Integration<br></br> 
        <span className="text-red-500"> And</span> Collaboration.
        <span className="text-red-500">"</span>
    </h1> */}
      </main>
      {/* Tedx Baneshwor First Edition*/}
      <section>
      <InfoBox 
          title = {<div className="md:col-span-2 mt-1">
            <h2 className="text-2xl md:text-3xl font-bold  mb-1 md:mb-6 text-black-c1">
             <span className="text-red-500">TEDx</span> Baneshwor <span className="text-red-500">1<sup>st</sup></span> Edition 
            </h2>
          </div>} 
          imgSrc="/groupphoto.jpeg" 
          desc = {<div>
            <p className="mb-5">
            TEDx Baneshwor’s first edition was a success, bringing together diverse speakers and performers who captivated the audience with their ideas and talents.
            </p>
            <p>
            This inaugural event set a strong foundation for a community of thinkers and changemakers. Each talk sparked conversations that continued long after the event, marking TEDx Baneshwor as more than just an event – it was a launchpad for curiosity and innovation, setting a high standard for future editions.
            </p>
            </div>
          } 
          rowRev  = {false}
          bgColor="#FFFFFF"
      
      />
      </section>

      <section className="bg-dark-c1 py-12">
        <div className="flex flex-col items-center gap-6 max-w-[1100px] mx-auto px-4">
          <h2 className="text-4xl font-bold text-white"><span className="text-red-500">1<sup>st</sup></span> Edition <span className="text-red-500">Speakers</span></h2>
          <p className="text-white text-center">
          Our inaugural TEDx Baneshwor event featured an inspiring lineup of speakers from diverse backgrounds. Each shared unique insights, compelling stories, and innovative ideas aimed at sparking positive change in our community.
          </p>
          <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {FirstEditionSpeakerList?.map((item) => (
              <SpeakerCard key={item.name} {...item} />
            ))}
          </div>
        </div>
      </section>


      <section className="py-12">
        <div className="flex flex-col items-center gap-2 max-w-[1100px] mx-auto px-4">
        <h2 className="md:text-4xl text-3xl font-bold text-black-c1"><span className="text-red-500">1<sup>st</sup></span> Edition <span className="text-red-500">Performers</span></h2>
          <p className="text-center mb-4">
          The inaugural TEDx Baneshwor event was a vibrant showcase of inspiring speakers, creative performances, and unforgettable moments, captured beautifully in these gallery snapshots.
          </p>
          <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {FirstEditionPerformers?.map((item) => (
              <SpeakerCard key={item.name} {...item} />
            ))}
          </div>
        </div>
      </section>

      <GallerySection />

      <HomePageTalkSection />
      
    </>
  );
}
