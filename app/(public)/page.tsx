import SpeakerCard from "@/components/shared/speaker-card";
import HeroSection from "../../components/shared/hero-section";
import CallingSection from "../../components/shared/calling-section";
import { SpeakerCardExampleData } from "@/constants/example";
import HomePageTalkSection from "@/components/homepage-talk-section";
import HomepageSpeakerList from "@/components/homepage-speaker-list";
import SponserSection from "@/components/shared/sponser-section";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <CallingSection />
      <section className="lg_screen">
        <HomePageTalkSection />
        <HomepageSpeakerList />
      </section>
      <SponserSection />
      <section className="min-h-[400px]">Other Section</section>
    </div>
  );
}
