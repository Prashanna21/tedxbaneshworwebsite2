import React from "react";


const GetInvolvedHeroSection = () => {
    return ( 
        <section
        className="relative h-[440px] sm:h-screen  bg-cover bg-center flex items-center"
        style={{
          backgroundImage: "url('/get-involved-pics/hero-section-pic.jpeg')",
        }}
      >
        <div className="pt-[64px] px-9 max-w-[830px] flex flex-col gap-5">
            <h2 className="hero_title text-2xl md:text-5xl font-extrabold mb-4 leading-tight tracking-wide">
            Be a part of TedxBaneshwor 
            <span className="text-[#FF0404]"> Community</span>.
            </h2>

            <h2 className="hero_title text-2xl md:text-5xl font-extrabold mb-4 leading-tight tracking-wide">
            We<span className="text-[#FF0404]">'</span>re TedxBaneshwor<span className="text-[#FF0404]">, </span>
                Driven by <span className="text-[#FF0404]">Passion</span>.
            </h2>
        </div>

        </section>
    )

}


export default GetInvolvedHeroSection;