import React from "react";
import Image from "next/image";

const SponserSection = () => {
    return (
        <section className="bg-white py-5 md:py-0 min-h-[570px] md:min-h-[570px] flex justify-center gap-5 md:gap-10 flex-col items-center text-center">
            <h2 className="text-black-c1 font-bold text-3xl md:text-4xl">
                Event <span className="text-red-500">Sponsors</span>
            </h2>

            <div className="flex gap-5 flex-wrap justify-center items-center">

            <div className="relative object-contain  h-32 w-40 flex justify-center items-center">
                    <Image
                        src="/partners/techspire-college.jpg"
                        alt="Sponsor Logo"
                        fill
                        sizes="160px"
                        className="rounded"
                        style={{
                            objectFit: "cover"
                        }}
                    />
                </div>

                
               

                {/* Placeholder sponsor */}
                <div className="relative object-contain  h-20 w-40 flex justify-center items-center">
                    <Image
                        src="/partners/cf-moto.jpg"
                        alt="Sponsor Logo"
                        fill
                        sizes="160px"
                        className="rounded"
                        style={{
                            objectFit: "cover"
                        }}
                    />
                </div>


                <div className="relative object-contain  h-32 w-40 flex justify-center items-center">
                    <Image
                        src="/partners/starhospital.jpg"
                        alt="Sponsor Logo"
                        fill
                        sizes="160px"
                        className="rounded"
                        style={{
                            objectFit: "cover"
                        }}
                    />
                </div>

                <div className="relative object-contain  h-40 w-40 flex justify-center items-center">
                    <Image
                        src="/partners/silicy-pizza.jpg"
                        alt="Sponsor Logo"
                        fill
                        sizes="160px"
                        className="rounded"
                        style={{
                            objectFit: "cover"
                        }}
                    />
                </div>

            </div>


            <div className="flex gap-5 flex-wrap justify-center items-center">

                <div className="relative object-contain  h-20 w-40 flex justify-center items-center">
                    <Image
                        src="/partners/study-lane.jpg"
                        alt="Sponsor Logo"
                        fill
                        sizes="160px"
                        className="rounded"
                        style={{
                            objectFit: "cover"
                        }}
                    />
                </div>

                 <div className="relative object-contain  h-20 w-40 flex justify-center items-center">
                    <Image
                        src="/partners/prime-healthsolutions.jpg"
                        alt="Sponsor Logo"
                        fill
                        sizes="160px"
                        className="rounded"
                        style={{
                            objectFit: "cover"
                        }}
                    />
                </div>

                <div className="relative object-contain  h-40 w-40 flex justify-center items-center">
                    <Image
                        src="/partners/arya-wellness.jpg"
                        alt="Sponsor Logo"
                        fill
                        sizes="160px"
                        className="rounded"
                        style={{
                            objectFit: "cover"
                        }}
                    />
                </div>
                <div className="relative object-contain  h-40 w-40 flex justify-center items-center">
                    <Image
                        src="/partners/wecare.jpg"
                        alt="Sponsor Logo"
                        fill
                        sizes="160px"
                        className="rounded"
                        style={{
                            objectFit: "cover"
                        }}
                    />
                </div>
                <div className="relative object-contain  h-40 w-40 flex justify-center items-center">
                    <Image
                        src="/partners/tisa.jpg"
                        alt="Sponsor Logo"
                        fill
                        sizes="160px"
                        className="rounded"
                        style={{
                            objectFit: "cover"
                        }}
                    />
                </div>
                
                <div className="relative object-contain  h-40 w-40 flex justify-center items-center">
                    <Image
                        src="/partners/hamro-patro-tedxbaneshwor.png"
                        alt="Sponsor Logo"
                        fill
                        sizes="160px"
                        className="rounded"
                        style={{
                            objectFit: "cover"
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default SponserSection;
