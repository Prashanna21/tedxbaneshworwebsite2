import React from "react";
import Image from "next/image";

const SponserSection = () => {
    return (
        <section className="bg-white py-5 md:py-8 min-h-[570px] md:min-h-[720px] flex justify-center gap-5 md:gap-4 flex-col items-center text-center">
            <h2 className="text-black-c1 font-bold text-3xl md:text-4xl">
                Event <span className="text-red-500">Sponsors</span>
            </h2>
            {/* First Level */}
            <div className="flex gap-5 flex-wrap justify-center items-center mt-2">
                <div className="relative object-contain  h-32 w-64 flex justify-center items-center">
                        <Image
                            src="/partners/Sasto-ticket.png"
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

            
            {/* Second Level */}
            <div className="flex gap-5 flex-wrap justify-center items-center">
                
                 <div className="relative object-contain  h-32 w-32 flex justify-center items-center">
                        <Image
                            src="/partners/agriculture-development-bank.png"
                            alt="Sponsor Logo"
                            fill
                            sizes="160px"
                            className="rounded"
                            style={{
                                objectFit: "cover"
                            }}
                        />
                    </div>

                <div className="relative object-contain  h-32 w-36 flex justify-center items-center">
                        <Image
                            src="/partners/sage-foundation.jpg"
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

            </div>

            {/* Third Level */}
            <div className="flex gap-5 flex-wrap justify-center items-center">
                    <div className="relative object-contain  h-32 w-40 flex justify-center items-center">
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

                    <div className="relative object-contain  h-36 w-36 flex justify-center items-center">
                        <Image
                            src="/partners/internation-opportunities.png"
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

                </div>

            {/* Fourth Level */}
            <div className="flex gap-5 flex-wrap justify-center items-center">
                 <div className="relative object-contain  h-32 w-32 flex justify-center items-center">
                        <Image
                            src="/partners/wow-pop-corn.jpg"
                            alt="Sponsor Logo"
                            fill
                            sizes="160px"
                            className="rounded"
                            style={{
                                objectFit: "cover"
                            }}
                        />
                    </div>

                <div className="relative object-contain  h-32 w-32 flex justify-center items-center">
                        <Image
                            src="/partners/syanko-roll.png"
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

                 
                <div className="relative object-contain  h-32 w-32 flex justify-center items-center">
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

                <div className="relative object-contain  h-28 w-48 flex justify-center items-center bg-black-c1">
                    <Image
                        src="/partners/signaporean-beverages.png"
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
                
                
                
            </div>

            {/* Fifth Level */}            
            <div className="flex gap-5 flex-wrap justify-center items-center"> 
                <div className="relative object-contain  h-32 w-32 flex justify-center items-center">
                    <Image
                        src="/partners/Pekoe-tea.jpg"
                        alt="Sponsor Logo"
                        fill
                        sizes="160px"
                        className="rounded"
                        style={{
                            objectFit: "cover"
                        }}
                    />
                </div>

                <div className="relative object-contain  h-32 w-32 flex justify-center items-center">
                    <Image
                        src="/partners/welcome-flower.png"
                        alt="Sponsor Logo"
                        fill
                        sizes="160px"
                        className="rounded"
                        style={{
                            objectFit: "cover"
                        }}
                    />
                </div>


                <div className="relative object-contain  h-32 w-44 flex justify-center items-center">
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
                
                <div className="relative object-contain  h-32 w-40 flex justify-center items-center">
                    <Image
                        src="/partners/babari.png"
                        alt="Sponsor Logo"
                        fill
                        sizes="160px"
                        className="rounded"
                        style={{
                            objectFit: "cover"
                        }}
                    />
                </div>  

                <div className="relative object-contain  h-32 w-32 flex justify-center items-center">
                    <Image
                        src="/partners/creating-opporutnites.png"
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


            {/* Sixth Level */}
            <div className="flex gap-5 flex-wrap justify-center items-center"> 
                <div className="relative object-contain  h-28 w-28 flex justify-center items-center">
                    <Image
                        src="/partners/share-partra.png"
                        alt="Sponsor Logo"
                        fill
                        sizes="160px"
                        className="rounded"
                        style={{
                            objectFit: "cover"
                        }}
                    />
                </div>  

                <div className="relative object-contain  h-28 w-28 flex justify-center items-center">
                    <Image
                        src="/partners/jec.jpg"
                        alt="Sponsor Logo"
                        fill
                        sizes="160px"
                        className="rounded"
                        style={{
                            objectFit: "cover"
                        }}
                    />
                </div>  

                <div className="relative object-contain  h-28 w-28 flex justify-center items-center">
                    <Image
                        src="/partners/south-western.png"
                        alt="Sponsor Logo"
                        fill
                        sizes="160px"
                        className="rounded"
                        style={{
                            objectFit: "cover"
                        }}
                    />
                </div>  

                <div className="relative object-contain  h-28 w-28 flex justify-center items-center">
                    <Image
                        src="/partners/leo-club-kathmandu-social.jpg"
                        alt="Sponsor Logo"
                        fill
                        sizes="160px"
                        className="rounded"
                        style={{
                            objectFit: "cover"
                        }}
                    />
                </div>  

                <div className="relative object-contain  h-28 w-28 flex justify-center items-center">
                    <Image
                        src="/partners/fruit-gems.png"
                        alt="Sponsor Logo"
                        fill
                        sizes="160px"
                        className="rounded"
                        style={{
                            objectFit: "cover"
                        }}
                    />
                </div>  


                <div className="relative object-contain  h-28 w-28 flex justify-center items-center">
                    <Image
                        src="/partners/nimbu-pani.png"
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
