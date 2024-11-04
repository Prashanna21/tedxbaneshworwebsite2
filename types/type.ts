import { ReactNode } from "react";

export type THeroDetails = {
  title: string;
  image: string;
  tag: string;
};

export type TTalkSummaryCard = {
  src: string;
  title: string;
  desc: string;
  link: string;
};

export type TSpeakerCardProps = {
  name: string;
  position: string;
  imageSrc: string;
};

export type TTalkBannerProps = {
  tag: string;
  highlight: string;
  title: string;
  description: string;
  imgSrc: string;
  ytLink: string;
};

export type TSocialLinkTypes =
  | "facebook"
  | "instagram"
  | "twitter"
  | "youtube"
  | "linkedIn";

export type TSocialLink = {
  id: number;
  url: string;
  type: TSocialLinkTypes;
};

export type TInfoBox = {
  title : ReactNode;
  desc : ReactNode;
  imgSrc : string;
  rowRev: boolean;
  bgColor: string;
}
