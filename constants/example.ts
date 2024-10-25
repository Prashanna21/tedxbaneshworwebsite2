import { TSocialLink, TSpeakerCardProps } from "@/types/type";

export const SpeakerCardExampleData: TSpeakerCardProps = {
  imageSrc: `/png/dummy_person.png`,
  name: "Shyan Jane",
  position: "CEO, Lorem",
};

export const SpeakerCardListExammple: TSpeakerCardProps[] = [
  {
    imageSrc: `/png/dummy_person.png`,
    name: "Shyan Jane",
    position: "CEO, Lorem",
  },
  {
    imageSrc: `/png/dummy_person2.png`,
    name: "John Doe",
    position: "CTO, Ipsum",
  },
  {
    imageSrc: `/png/dummy_person3.png`,
    name: "Jane Doe",
    position: "CFO, Dolor",
  },
  {
    imageSrc: `/png/dummy_person4.png`,
    name: "John Jane",
    position: "COO, Sit",
  },
  {
    imageSrc: `/png/dummy_person5.png`,
    name: "Jane Doe",
    position: "CFO, Dolor",
  },
];

export const HERO_DETAILS = {
  title: `Empowering **Ideas**,   \nIgniting Change`,
  image: `/hero.png`,
  tag: `Nepal's Biggest **TEDx** Event Happening Soon`,
};

export const TALK_SUMMARY_CARD_EXAMPLE = {
  src: `/hero.png`,
  title: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quos eum
        quibusdam quam delectus fugiat nesciunt ab exercitationem quasi ratione
        dolorem repellat sequi`,
};

export const TALK_BANNER_CARD_EXAMPLE = {
  tag: `Code For Future`,
  highlight: `**TEDx** Baneshowr 2023`,
  title: `Code for the Future`,
  description: `Shaping the Digital Landscape | Swikar Sharma | TEDxBaneshwor`,
};

export const PAYMENT_PARTNERS_LIST_EXAMPLE = [
  { id: "esewa", src: `/partners/esewa.png` },
  { id: "khalti", src: `/partners/khalti.png` },
  { id: "ips", src: `/partners/ips.png` },
  { id: "ime", src: `/partners/ime.png` },
  { id: "fonepay", src: `/partners/fonepay.png` },
];

export const OTHER_LINKS_EXAMPLE = [
  { id: "1", url: "/about-us", title: "About Us" },
  { id: "2", url: "#", title: "Highlights" },
  { id: "3", url: "/our-speaker", title: "Speakers" },
  { id: "4", url: "/our-team", title: "Our Teams" },
  { id: "5", url: "#", title: "FAQ" },
];

export const SOCIAL_LINKS_EXAMPLE: TSocialLink[] = [
  { id: 1, url: "", type: "facebook" },
  { id: 2, url: "", type: "youtube" },
  { id: 3, url: "", type: "twitter" },
  { id: 4, url: "", type: "instagram" },
  { id: 5, url: "", type: "linkedIn" },
];

export const GOOGLE_MAP = `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7064.05987015648!2d85.324808!3d27.716362!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb194c9ceb7e73%3A0xd18ba75a902fa498!2sProperty%20Wizard%20Limited%20(67)!5e0!3m2!1sen!2snp!4v1727144421449!5m2!1sen!2snp`;

export const FOOTER_CONTACT_INFO_EXAMPLE = {
  location: `XYZ Tower, New Baneshowr, Kathmandu, Nepal`,
  contact: `(+977) 01-123456, (+977) 980001234`,
  email: `tedxbaneshwor@g123gmail.com`,
  googleMap: GOOGLE_MAP,
};

export const NAV_LINKS_EXAMPLE = [
  { id: "1", url: "/", title: "Home" },
  /* { id: "2", url: "/about-us", title: "About" },
  { id: "3", url: "/", title: "Explore" }, */
  { id: "4", url: "/", title: "Contact" },
  // {
  //   id: 4,
  //   title: "Explore",
  //   url: "/explore",
  //   dropdown: [
  //     { title: "Option 1", url: "/explore/option1" },
  //     { title: "Option 2", url: "/explore/option2" },
  //   ],
  // },
];

export const GET_INVOLVED_APPLY_LIST = [
  {
    title: "Apply for Speaker",
    desc: `Lorem ipsum dolor sit amet consectetur. Vitae sagittis ut mauris aliquet tortor. Im perdiet faucibus vitae scelerisque ut fau cibus.`,
    imgSrc: `/get-involved-pics/speaker-apply-pic.jpeg`,
    applyLink: `#`,
  },
  {
    title: "Apply for Volunteer",
    desc: `Lorem ipsum dolor sit amet consectetur. Vitae sagittis ut mauris aliquet tortor. Im perdiet faucibus vitae scelerisque ut fau cibus.`,
    imgSrc: `/get-involved-pics/apply_volunteer.png`,
    applyLink: `#`,
  },
  {
    title: "Apply for Performer",
    desc: `Lorem ipsum dolor sit amet consectetur. Vitae sagittis ut mauris aliquet tortor. Im perdiet faucibus vitae scelerisque ut fau cibus.`,
    imgSrc: `/get-involved-pics/apply_performer.png`,
    applyLink: `#`,
  },
];
