import React from "react";

const OurTeamHeroSection = () => {
  return (
    <section
      className="relative min-h-[400px] md:h-screen  bg-cover flex items-center md:bg-center bg-[6%_0%]"
      style={{
        backgroundImage: "url('/groupphoto.jpeg')",
      }}
    >
      <div className=" flex justify-center  w-full">


        <h2 className="hero_title text-white text-[23px] md:text-5xl font-extrabold mb-4 leading-tight tracking-wide">
          Meet Our 
          <span className="text-red-500"> Team</span>
        </h2>
      </div>


      
    </section>
  );
};

export default OurTeamHeroSection;
