import SpeakerCard from "@/components/shared/speaker-card";
import HeroSection from "../../components/shared/hero-section";
import { SpeakerCardExampleData } from "@/constants/example";
import HomePageTalkSection from "@/components/homepage-talk-section";
import HomepageSpeakerList from "@/components/homepage-speaker-list";
import Navbar from "@/components/Navbar";
import Speaker from "@/components/Speaker";

export default function Home() {
  return (
    <div>
      <Navbar/>

      <HeroSection />
      <HomePageTalkSection />
      <HomepageSpeakerList />
      
      <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-4 sm:p-20">
        <h1 className="text-4xl">This is Public Route</h1>
        <h1 className="text-2xl">This is RED TEXT</h1>
        <p className="text-red-c1">This is Red c1</p>
        <p className="text-red-c2">This is Red c2</p>
        <p className="text-red-c3">This is Red c3</p>
        <p className="text-red-c4">This is Red c4</p>
        <h1 className="text-2xl">This is Black TEXT</h1>
        <p className="text-black-c1">This is black c1</p>
        <p className="text-black-c2">This is black c2</p>
        <p className="text-black-c3">This is black c3</p>
        <p className="text-black-c4">This is black c4</p>
      </div>
      <Speaker/>
    </div>
  );
}
