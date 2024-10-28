import React from 'react';
import Image from 'next/image';

const AboutTedx: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

        <div className="text-gray-700">
          <div className="md:col-span-2 mt-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black-c1">
              About <span className="text-red-500">TEDx</span>
            </h2>
          </div>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur, ut suspendisse justo porttitor dui at nunc ac odio.
            Nulla semper pellentesque viverra velit justo.
          </p>
          <p className="mb-4">
            Magna orci nibh id sodales fermentum non dictumst lobortis fermentum elementum pretium.
          </p>
          <p>
            Dolor sit quam viverraLorem ipsum dolor sit amet consectetur. Ut suspendisse justo porttitor dui at nunc ac odio.
          </p>
        </div>


        <div>
          <Image
            src={'/about/tedx.png'} // Ensure the path to the image is correct and available in the public folder
            alt="TEDx"
            width={700} // Proper width and height values
            height={500}
            layout="responsive" // Responsive layout based on the container
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutTedx;
