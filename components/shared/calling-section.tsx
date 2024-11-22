import React from "react";
import { Button } from "../ui/button";


const CallingSection = () => {
    return (
        <section
        className="flex md:min-h-[475px] flex-col-reverse md:flex-row"
        >
            <div 
            className="hidden md:block"
            style={{
                flex: "1.2"
            }}
            >
                <img 
                    className="size-full" src="groupphoto.jpeg"/>
            </div>

            <div 
                className="bg-cover flex justify-center items-center flex-1 relative min-h-[350px] md:min-h-0"
            style={{
                backgroundImage: "url('/gp_background.png')",
              }}
            >
                <div className="flex justify-center items-center h-full">
                    <div className=" md:w-[85%] flex flex-col gap-3 text-center md:text-left">
                            <h2 className="leading-[30px] md:leading-[55px] text-2xl md:text-4xl  font-semibold text-white">21<sup>st</sup> DECEMBER MARK YOUR CALENDAR</h2>
                        <h3 className="text-xl font-semibold text-white">
                        LET’S DISCOVER “IDEAS WORTH SPREADING”
                        </h3>

                        <h4 className="text-white">
                        TEDx Baneshwor 2<sup>nd</sup> Edition Comming Soon...
                        </h4>

                        <Button variant="default" className="font-semibold text-lg py-6 px-10 self-center md:self-start">
                            Register Now
                        </Button>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default CallingSection