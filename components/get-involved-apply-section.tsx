import React from "react";
import ApplyCard from "./shared/apply-cards";


const GetInvolvedApplySection = () => {
    return (
        <section className="py-10 bg-white flex flex-col md:flex-row gap-4 justify-center">
            <ApplyCard 
                title="Apply For Speaker" 
                desc="Lorem ipsum dolor sit amet consectetur. Vitae sagittis ut mauris aliquet tortor. Im perdiet faucibus vitae scelerisque ut fau cibus." 
                imgSrc="/get-involved-pics/speaker-apply-pic.jpeg"
                applyLink = "/"
                />

            <ApplyCard 
                title="Apply For Speaker" 
                desc="Lorem ipsum dolor sit amet consectetur. Vitae sagittis ut mauris aliquet tortor. Im perdiet faucibus vitae scelerisque ut fau cibus." 
                imgSrc="/get-involved-pics/speaker-apply-pic.jpeg"
                applyLink = "/"
                />


            <ApplyCard 
                title="Apply For Speaker" 
                desc="Lorem ipsum dolor sit amet consectetur. Vitae sagittis ut mauris aliquet tortor. Im perdiet faucibus vitae scelerisque ut fau cibus." 
                imgSrc="/get-involved-pics/speaker-apply-pic.jpeg"
                applyLink = "/"
                />
        </section>
    )
}

export default GetInvolvedApplySection;