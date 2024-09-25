import React from "react";
import TalkSummaryCard from "./shared/talk-summary-card";
import { TALK_SUMMARY_CARD_EXAMPLE } from "@/constants/example";

const HomePageTalkSection = () => {
  return (
    <section className="my-20 mx-24">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <section className="grid grid-cols-1 gap-6">
          <TalkSummaryCard {...TALK_SUMMARY_CARD_EXAMPLE} />
          <TalkSummaryCard {...TALK_SUMMARY_CARD_EXAMPLE} />
          <TalkSummaryCard {...TALK_SUMMARY_CARD_EXAMPLE} />
        </section>
      </div>
    </section>
  );
};

export default HomePageTalkSection;
