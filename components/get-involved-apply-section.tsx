import React from "react";
import ApplyCard from "./shared/apply-cards";
import { GET_INVOLVED_APPLY_LIST } from "@/constants/example";

const GetInvolvedApplySection = () => {
  return (
    <section className="py-10 bg-white flex flex-col md:flex-row md:flex-wrap gap-8 md:gap-4 items-center justify-center">
      {GET_INVOLVED_APPLY_LIST?.map((item) => (
        <ApplyCard key={item.title} {...item} />
      ))}
    </section>
  );
};

export default GetInvolvedApplySection;
