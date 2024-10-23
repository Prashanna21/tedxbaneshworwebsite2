import React from 'react';

const AboutHero: React.FC = () => {
  return (
    <div>
      <section
        className="relative w-full h-[400px] md:h-[600px] bg-black bg-cover bg-center"
        style={{
          backgroundImage: 'url("/about/aboutus.jpeg")',
        }}
      >
        <div className="absolute inset-0 flex items-center px-4">

          <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight py-72">
            <span className="text-red-600">Ideas</span>
            <div>Change Everything</div>
          </h1>
        </div>
      </section>

    </div>
  );
};

export default AboutHero;
