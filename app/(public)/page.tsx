import SpeakerCard from "@/components/shared/speaker-card";
import HeroSection from "../../components/shared/hero-section";
import CallingSection from "../../components/shared/calling-section";
import HomePageTalkSection from "@/components/homepage-talk-section";
import HomepageSpeakerList from "@/components/homepage-speaker-list";
import SponserSection from "@/components/shared/sponser-section";
import ContactSection from "@/components/contact-section";
import HomePagePerformerList from "@/components/homepage-performer-list";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CallingSection />
      <section className="lg_screen">
        <HomePageTalkSection />
        
      </section>
      <HomepageSpeakerList />
      <HomePagePerformerList />
      <ContactSection />
      <SponserSection />
    </div>
  );
}
