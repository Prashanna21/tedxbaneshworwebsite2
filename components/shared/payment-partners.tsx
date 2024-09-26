import React from "react";
import TitleHighlighted from "./highligted-title";
import { PAYMENT_PARTNERS_LIST_EXAMPLE } from "@/constants/example";
import Image from "next/image";

const Title = `Payment **Partners**`;

const PaymentPartners = () => {
  return (
    <div className="flex flex-col gap-2">
      <TitleHighlighted title={Title} />
      <div className="flex items-center gap-4 flex-wrap lg:flex-nowrap">
        {PAYMENT_PARTNERS_LIST_EXAMPLE?.map((partner) => (
          <Image
            key={partner.id}
            alt={partner.id}
            src={partner.src}
            width={120}
            height={50}
            className="object-cover rounded-lg h-[50px]"
          />
        ))}
      </div>
    </div>
  );
};

export default PaymentPartners;
