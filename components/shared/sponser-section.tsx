import React from "react";
import Image from "next/image";

const SponserSection = () => {
    return (
        <section className="bg-white min-h-[570px] md:min-h-[570px] flex justify-center gap-5 md:gap-10 flex-col items-center text-center">
            <h2 className="text-black-c1 font-bold text-3xl md:text-4xl">
                Event <span className="text-red-500">Sponsors</span>
            </h2>

            <div className="flex gap-5 flex-wrap justify-center">
                {/* Sponsor with Next.js Image */}
                <div className="relative  h-20 w-40 flex justify-center items-center">
                    <Image
                        src="/partners/esewa.png"
                        alt="Sponsor Logo"
                        layout="fill"
                        objectFit="contain"
                        className="rounded"
                    />
                </div>

                {/* Placeholder sponsor */}
                <div className="bg-black-c4 h-20 w-40 flex justify-center items-center text-white">
                    Sponsor
                </div>

                <div className="bg-black-c4 h-20 w-40 flex justify-center items-center text-white">
                    Sponsor
                </div>
            </div>

            <div className="flex gap-5 flex-wrap justify-center">
                {/* More Sponsor divs */}
                <div className="bg-black-c4 h-20 w-40 flex justify-center items-center text-white">
                    Sponsor
                </div>
                <div className="bg-black-c4 h-20 w-40 flex justify-center items-center text-white">
                    Sponsor
                </div>
                <div className="bg-black-c4 h-20 w-40 flex justify-center items-center text-white">
                    Sponsor
                </div>
                <div className="bg-black-c4 h-20 w-40 flex justify-center items-center text-white">
                    Sponsor
                </div>
                <div className="bg-black-c4 h-20 w-40 flex justify-center items-center text-white">
                    Sponsor
                </div>
                <div className="bg-black-c4 h-20 w-40 flex justify-center items-center text-white">
                    Sponsor
                </div>
            </div>
        </section>
    );
};

export default SponserSection;
