import React from 'react';
import { FaMicrophone, FaEye, FaUser } from 'react-icons/fa';

const AboutExplore: React.FC = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Text */}
        <p className="text-gray-700 mb-8">
          Lorem ipsum dolor sit amet consectetur. Elementum ipsum porttitor et pretium lacus vehicula malesuada tristique sapien.
          Duis tincidunt in vitae in. Vitae sed dapibus egestas eget risus.
        </p>

        {/* Stats Container */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

          {/* Single Stat Item */}
          <div className="flex flex-col items-center">
            <FaMicrophone className="text-4xl text-gray-500 mb-2" />
            <h3 className="text-2xl font-bold text-black-c1">20+</h3>
            <p className="text-red-600">Speakers</p>
          </div>

          {/* Single Stat Item */}
          <div className="flex flex-col items-center">
            <FaEye className="text-4xl text-gray-500 mb-2" />
            <h3 className="text-2xl font-bold text-black-c1">10k+</h3>
            <p className="text-red-600">Viewers</p>
          </div>

          {/* Single Stat Item */}
          <div className="flex flex-col items-center">
            <FaUser className="text-4xl text-gray-500 mb-2" />
            <h3 className="text-2xl font-bold text-black-c1">10+</h3>
            <p className="text-red-600">Performers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutExplore;
