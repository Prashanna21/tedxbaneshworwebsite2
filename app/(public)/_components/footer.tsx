import React from "react";
import { Separator } from "../../../components/ui/separator";
import CustomMDReactComponent from "@/provider/CustomMdComponent";
import PaymentPartners from "../../../components/shared/payment-partners";
import OtherLinks from "./other-links";
import {
  FOOTER_CONTACT_INFO_EXAMPLE,
  SOCIAL_LINKS_EXAMPLE,
} from "@/constants/example";
import SocialLink from "@/components/shared/social-link";
import ContactInfoFooter from "./contact-info";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const companyName = `**Tedx** Baneshowr`;

  return (
    <div className="bg-dark-c1 px-8 text-white">
      <section className="pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col gap-4">
            <Image
              width={300}
              height={100}
              src={"/logos/tedx_text.png"}
              alt="logo"
              className="ml-2"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              aliquid cumque repellendus similique doloremque alias dignissimos,
              delectus itaque voluptate error doloribus, iusto sequi. Vero
              facilis quos, et enim minus ut!
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS_EXAMPLE?.map((socialLink) => (
                <SocialLink key={socialLink.id} {...socialLink} />
              ))}
            </div>
          </div>
          <OtherLinks />
          <ContactInfoFooter {...FOOTER_CONTACT_INFO_EXAMPLE} />
        </div>
        <PaymentPartners />
      </section>
      <Separator className="bg-red-500 mt-8" />
      <div className="w-full py-6 px-8 flex flex-col md:flex-row items-center justify-center gap-1">
        <p>All rights Reserved.&copy;{currentYear}</p>
        <CustomMDReactComponent text={companyName} className="footer_tedx" />
      </div>
    </div>
  );
};

export default Footer;
