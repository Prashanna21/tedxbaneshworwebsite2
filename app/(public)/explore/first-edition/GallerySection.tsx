import Image from "next/image";
import React from "react";

const GallerySection = () => {
    return (
        <main className="w-full bg-dark-c1 p-6 flex flex-col gap-4 py-10 items-center">
            <h2 className="text-4xl font-bold text-white"><span className="text-red-500">1<sup>st</sup></span> Edition <span className="text-red-500">Glimpses</span></h2>

            <div className="w-full max-w-[1100px] grid gap-3 grid-cols-1 lg:grid-cols-3">
            <div className="relative h-72">
                    <Image alt="speaker" src="/groupphoto.jpeg" fill 
                    sizes="400px" 
                    style={{
                    objectFit: "cover",
                    borderRadius: "5px"
                    }} />
            </div>

                <div className="relative h-72">
                    <Image alt="speaker" src="/png/Tedx-firstEd.webp" fill 
                    sizes="400px" 
                    style={{
                    objectFit: "cover",
                    borderRadius: "5px"
                    }} />
            </div>

                <div className="relative h-72">
                    <Image alt="speaker" src="/groupphoto.jpeg" fill 
                    sizes="400px" 
                    style={{
                    objectFit: "cover",
                    borderRadius: "5px"
                    }} />
                </div>


                <div className="relative">
                    <Image alt="speaker" src="/groupphoto.jpeg" fill 
                    sizes="400px" 
                    style={{
                    objectFit: "cover",
                    borderRadius: "5px"
                    }} />
                </div>

            </div>

        </main>
    )
}

export default GallerySection;