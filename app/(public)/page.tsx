import SpeakerCard from "@/components/shared/speaker-card";
import HeroSection from "../../components/shared/hero-section";
import { SpeakerCardExampleData } from "@/constants/example";
import HomePageTalkSection from "@/components/homepage-talk-section";
import HomepageSpeakerList from "@/components/homepage-speaker-list";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <section className="lg_screen">
        <HomePageTalkSection />
        <HomepageSpeakerList />
      </section>
      <section className="min-h-[400px]">Other Section</section>
    </div>
  );
}
