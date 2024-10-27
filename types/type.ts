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
