import React from "react";

const GetInvolvedHeroSection = () => {
  return (
    <section
      className="relative min-h-[400px] md:h-screen  bg-cover flex items-center md:bg-center bg-[6%_0%]"
      style={{
        backgroundImage: "url('/get-involved-pics/hero-section-pic.jpeg')",
      }}
    >
      <div className="pt-[64px] px-2 md:px-9 max-w-[360px] md:max-w-[830px] flex flex-col gap-1 md:gap-5">
        <h2 className="hero_title text-white text-[23px] md:text-5xl font-extrabold mb-4 leading-tight tracking-wide">
          Be a part of TedxBaneshwor
          <span className="text-red-500"> Community</span>.
        </h2>

        <h2 className="hero_title text-[24px] md:text-5xl font-extrabold mb-4 leading-tight tracking-wide text-white">
          We<span className="text-red-500">'</span>re TedxBaneshwor
          <span className="text-red-500">, </span>
          Driven by <span className="text-red-500">Passion</span>.
        </h2>
      </div>
    </section>
  );
};

export default GetInvolvedHeroSection;
