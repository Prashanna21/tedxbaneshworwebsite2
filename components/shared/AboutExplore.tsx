import React from 'react';
import { FaMicrophone, FaEye, FaUser } from 'react-icons/fa';

const AboutExplore: React.FC = () => {
  return (
    <section className="bg-gray-100 md:py-20 py-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Text */}
        <p className="text-gray-700 md:mb-10 mb-12">
        TEDx Baneshwor's second edition brings together 10+ inspiring speakers, 800+ engaged viewers, and 5+ talented performers for an unforgettable event filled with ideas, performances, and community spirit. Join us!
        </p>

        {/* Stats Container */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:gap-8 gap-14">

          {/* Single Stat Item */}
          <div className="flex items-center justify-center">
            <FaMicrophone className="text-5xl text-gray-500" />
                <div>
                  <h3 className="text-[24px] font-bold text-black-c1">10+</h3>
                  <p className="text-red-600">Speakers</p>
                </div>
          </div>

          {/* Single Stat Item */}
           <div className="flex items-center justify-center">
            <FaEye className="text-5xl text-gray-500 m-1" />
                <div>
                  <h3 className="text-[24px] font-bold text-black-c1">800+</h3>
                  <p className="text-red-600">Viewers</p>
                </div>
          </div>


        {/* Single Stat Item */}
           <div className="flex items-center justify-center">
            <FaUser className="text-5xl text-gray-500 m-1" />
                <div>
                  <h3 className="text-[24px] font-bold text-black-c1">5+</h3>
                  <p className="text-red-600">Performers</p>
                </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutExplore;
