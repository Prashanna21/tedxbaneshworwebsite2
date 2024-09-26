import TitleHighlighted from "@/components/shared/highligted-title";
import { OTHER_LINKS_EXAMPLE } from "@/constants/example";
import Link from "next/link";
import React from "react";

const Title = `Other **Links**`;

const LinkItem = ({ title, url }) => <Link href={url}>{title}</Link>;

const OtherLinks = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <TitleHighlighted title={Title} />
      <div className="flex flex-col gap-2">
        {OTHER_LINKS_EXAMPLE?.map((linkItem) => (
          <LinkItem key={linkItem.id} {...linkItem} />
        ))}
      </div>
    </div>
  );
};

export default OtherLinks;
