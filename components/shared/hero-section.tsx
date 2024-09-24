import React from 'react'

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero.png')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 flex flex-col items-start justify-center h-full text-white px-6 md:px-20 lg:px-32">
        <h1 className="text-lg md:text-6xl font-extrabold mb-4 leading-tight tracking-wide">
          Empowering <span className="text-red-500">Ideas</span>,
        </h1><br/>
        <h1 className="text-lg md:text-6xl font-extrabold mb-4 leading-tight tracking-wide">
        Igniting Change  
        </h1>
        <p className="md:text-2xl mb-8 font-semibold">
          Nepal<span className="text-red-500">'</span>s Biggest <span className="text-red-500">TEDx</span> Event Happening Soon.
        </p>

       <br />
        <div className="flex space-x-4">
          <button className="bg-red-500 hover:bg-red-c1 text-white font-bold py-3 px-20 rounded-md shadow-lg text-xl">
            Explore More
          </button>
          <button className="bg-white hover:bg-gray-200 text-black-c1 font-bold py-3 px-20 rounded-md shadow-lg text-xl">
            Buy Tickets
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
