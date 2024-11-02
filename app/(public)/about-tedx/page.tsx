import AboutExplore from "@/components/shared/AboutExplore";
import AboutHero from "@/components/shared/AboutHero";
import InfoBox from "@/components/shared/InfoBox";
import React from "react";

const AboutRoute = () => {
  return (
   
    <div className="">
      

      <AboutHero />

   {/* About Tedx */}

  <InfoBox 
        title = {<div className="md:col-span-2 mt-1">
          <h2 className="text-2xl md:text-3xl font-bold mb-1 md:mb-6 text-black-c1">
            About <span className="text-red-500">TEDx</span>
          </h2>
        </div>} 
        imgSrc="/about/tedx.png" 
        desc = {<div>
          <p className="mb-5"> TEDx events are independently organized gatherings that bring the spirit of TED’s mission to local communities. These events foster local discovery and dialogue around “ideas worth spreading.”</p>
          <p>
          Organized under a free license granted by TED, TEDx events offer communities the opportunity to stimulate dialogue, spark connection, and inspire action by showcasing diverse ideas and innovative thinkers.
          </p>
          </div>
        } 
        rowRev  = {false}
        bgColor="#FFFFFF"
      
      />

    {/* About Tedx Baneshwor */}
      
     <InfoBox 
        title = {<div className="md:col-span-2 mt-1">
          <h2 className="text-2xl md:text-3xl font-bold  mb-1 md:mb-6 text-black-c1">
            About <span className="text-red-500">TEDx Baneshwor</span>
          </h2>
        </div>} 
        imgSrc="/speaker-talk-pic/Rahbar-Ansari-TedxBaneshwor.jpg" 
        desc = {<div>
          <p className="mb-5">TEDx Baneshwor is an independently organized TED event and part of the global TEDx program. It allows local communities to experience the spirit of TED’s mission of 'ideas worth spreading' through self-organized events that bring people together to share a TED-like experience.</p>
          <p>
          TEDx Baneshwor serves as a platform for thought leaders, innovators, and changemakers from various fields to showcase their stories, research, and insights.
          </p>
          </div>
        } 
        rowRev  = {true}
        bgColor="#F4F5FF"
      
      />

      {/* Vision And Mission */}

      <InfoBox 
          title = {<div className="md:col-span-2 mt-1">
            <h2 className="text-2xl md:text-3xl font-bold  mb-1 md:mb-6 text-black-c1">
              Our <span className="text-red-500">Vision</span> and <span className="text-red-500">Mission</span> 
            </h2>
          </div>} 
          imgSrc="/groupphoto.jpeg" 
          desc = {<div>
            <p className="mb-5"><span className="text-red-500 font-semibold">Mission: </span>To create a dynamic platform for the exchange of ideas, foster inspiration, provide networking platform and encourage dialogue among diverse community members in Baneshwor and beyond.</p>
            <p> <span className="text-red-500 font-semibold">Vision: </span>
            To ignite curiosity, promote innovation, and drive positive change by sharing powerful ideas and stories that resonate both locally and globally.
            </p>
            </div>
          } 
          rowRev  = {false}
          bgColor="#FFFFFF"
      
      />

      <div className="bg-slate-300">
        <AboutExplore />
      </div>
    </div>
  );
};

export default AboutRoute;
