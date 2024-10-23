import React from "react";
import TalkSummaryCard from "./shared/talk-summary-card";
import {
  TALK_BANNER_CARD_EXAMPLE,
  TALK_SUMMARY_CARD_EXAMPLE,
} from "@/constants/example";
import TalkBanner from "./shared/talk-banner";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const HomePageTalkSection = () => {
  return (
    <section className="my-10 md:my-20 mx-5 md:mx-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
        
        <section className="grid order-2 grid-cols-1 gap-4 md:order-none">
          <div className="text-red-500 font-bold text-xl underline text-center md:text-left">Our Talks</div>
          <TalkSummaryCard {...TALK_SUMMARY_CARD_EXAMPLE} />
          <TalkSummaryCard {...TALK_SUMMARY_CARD_EXAMPLE} />
          <TalkSummaryCard {...TALK_SUMMARY_CARD_EXAMPLE} />
        </section>
        <section className="order-1 md:order-none">
          <div className="actions flex items-center justify-center md:justify-end gap-4 mr-8 mb-4">
            <Link
              href="#"
              className="text-red-500 font-bold text-lg underline"
            >
              View All
            </Link>
            <span className="rounded-full border flex max-w-fit p-1 text-red-500 border-red-600">
              <ArrowLeft size={18} />
            </span>
            <span className="rounded-full border flex max-w-fit p-1 text-red-500 border-red-600">
              <ArrowRight size={18} />
            </span>
          </div>
          <TalkBanner {...TALK_BANNER_CARD_EXAMPLE} />
        </section>
      </div>
    </section>
  );
};

export default HomePageTalkSection;
