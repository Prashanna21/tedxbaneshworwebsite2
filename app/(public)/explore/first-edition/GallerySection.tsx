import Image from "next/image";
import React from "react";

const GallerySection = () => {
    return (
        <main className="w-full bg-dark-c1 p-6 flex flex-col gap-2 py-10 items-center">
            <h2 className="text-4xl font-bold text-white"><span className="text-red-500">1<sup>st</sup></span> Edition <span className="text-red-500">Glimpses</span></h2>
            <p className="max-w-[1100px] mb-4 text-white text-center">
            TEDx Baneshwor’s first edition was a success, bringing together diverse speakers and performers who captivated the audience with their ideas and talents.
            </p>

            <div className="w-full max-w-[1100px] grid gap-3 grid-cols-1 lg:grid-cols-3">
            <div className="relative h-72 filter hover:grayscale hover:scale-105 transition duration-300 ease-in-out">
                <Image alt="TedxBaneshwor" src="/first-edition-gallery/TedxBaneshwor-Glimp-1.webp" fill 
                    sizes="400px" 
                    style={{
                        objectFit: "cover",
                        borderRadius: "5px"
                    }} />
            </div>

            <div className="relative h-72 filter hover:grayscale hover:scale-105 transition duration-300 ease-in-out">
                <Image alt="TedxBaneshwor" src="/first-edition-gallery/TedxBaneshwor-Glimp-2.webp" fill 
                    sizes="400px" 
                    style={{
                        objectFit: "cover",
                        borderRadius: "5px"
                    }} />
            </div>

            <div className="relative h-72 filter hover:grayscale hover:scale-105 transition duration-300 ease-in-out">
                <Image alt="TedxBaneshwor" src="/first-edition-gallery/TedxBaneshwor-Glimp-3.webp" fill 
                    sizes="400px" 
                    style={{
                        objectFit: "cover",
                        borderRadius: "5px"
                    }} />
            </div>

            <div className="relative h-72 filter hover:grayscale hover:scale-105 transition duration-300 ease-in-out">
                <Image alt="TedxBaneshwor" src="/first-edition-gallery/TedxBaneshwor-Glimp-4.webp" fill 
                    sizes="400px" 
                    style={{
                        objectFit: "cover",
                        borderRadius: "5px"
                    }} />
            </div>

            <div className="relative h-72 filter hover:grayscale hover:scale-105 transition duration-300 ease-in-out">
                <Image alt="TedxBaneshwor" src="/first-edition-gallery/TedxBaneshwor-Glimp-5.webp" fill 
                    sizes="400px" 
                    style={{
                        objectFit: "cover",
                        borderRadius: "5px"
                    }} />
            </div>

            <div className="relative h-72 filter hover:grayscale hover:scale-105 transition duration-300 ease-in-out">
                <Image alt="TedxBaneshwor" src="/first-edition-gallery/TedxBaneshwor-Glimp-6.webp" fill 
                    sizes="400px" 
                    style={{
                        objectFit: "cover",
                        borderRadius: "5px"
                    }} />
            </div>

            <div className="relative h-72 filter hover:grayscale hover:scale-105 transition duration-300 ease-in-out">
                <Image alt="TedxBaneshwor" src="/first-edition-gallery/TedxBaneshwor-Glimp-7.webp" fill 
                    sizes="400px" 
                    style={{
                        objectFit: "cover",
                        borderRadius: "5px"
                    }} />
            </div>

            <div className="relative h-72 filter hover:grayscale hover:scale-105 transition duration-300 ease-in-out">
                <Image alt="TedxBaneshwor" src="/first-edition-gallery/TedxBaneshwor-Glimp-8.webp" fill 
                    sizes="400px" 
                    style={{
                        objectFit: "cover",
                        borderRadius: "5px"
                    }} />
            </div>

            <div className="relative h-72 filter hover:grayscale hover:scale-105 transition duration-300 ease-in-out">
                <Image alt="TedxBaneshwor" src="/first-edition-gallery/TedxBaneshwor-Glimp-9.webp" fill 
                    sizes="400px" 
                    style={{
                        objectFit: "cover",
                        borderRadius: "5px"
                    }} />
            </div>

            <div className="relative h-72 filter hover:grayscale hover:scale-105 transition duration-300 ease-in-out">
                <Image alt="TedxBaneshwor" src="/first-edition-gallery/TedxBaneshwor-Glimp-10.webp" fill 
                    sizes="400px" 
                    style={{
                        objectFit: "cover",
                        borderRadius: "5px"
                    }} />
            </div>

            <div className="relative h-72 filter hover:grayscale hover:scale-105 transition duration-300 ease-in-out">
                <Image alt="TedxBaneshwor" src="/first-edition-gallery/TedxBaneshwor-Glimp-11.webp" fill 
                    sizes="400px" 
                    style={{
                        objectFit: "cover",
                        borderRadius: "5px"
                    }} />
            </div>

            <div className="relative h-72 filter hover:grayscale hover:scale-105 transition duration-300 ease-in-out">
                <Image alt="TedxBaneshwor" src="/first-edition-gallery/TedxBaneshwor-Glimp-12.webp" fill 
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