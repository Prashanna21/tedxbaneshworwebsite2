import React from 'react';

const AboutHero: React.FC = () => {
  return (
    <div>
      <section
        className="relative w-full h-[400px] md:h-screen bg-black bg-cover bg-center"
        style={{
          backgroundImage: 'url("/about/aboutus.jpeg")',
        }}
      >
        <div className="absolute inset-0 flex items-center md:items-start md:pt-28 px-3 md:px-7">

          <h1 className="text-white text-3xl md:text-5xl font-bold leading-relaxed md:leading-relaxed">
            <span className="text-red-600">Ideas </span> Change 
            <div>Everything<span className="text-red-600">. </span></div> 
          </h1>
        </div>
      </section>

    </div>
  );
};

export default AboutHero;
