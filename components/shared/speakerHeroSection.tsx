import React from "react";

const SpeakerHeroSection = () => {
  return (
    <section
      className="relative min-h-[400px] md:h-screen  bg-cover flex items-center md:bg-center bg-[6%_0%]"
      style={{
        backgroundImage: "url('png/speaker-section-hero.jpg')",
      }}
    >
      <div className=" px-4 md:px-12 max-w-[360px] md:max-w-[830px]">
        <h2 className="hero_title text-white text-[23px] md:text-5xl font-extrabold mb-4 leading-tight tracking-wide">
          Ideas That <br></br> Show Us
          <span className="text-red-500"> Future</span>.
        </h2>
      </div>
    </section>
  );
};

export default SpeakerHeroSection;
