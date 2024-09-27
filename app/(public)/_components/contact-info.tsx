import TitleHighlighted from "@/components/shared/highligted-title";
import Text from "@/components/ui/text";
import { Mail, MapPin, Phone } from "lucide-react";
import React, { ReactNode } from "react";

const Title = `Contact **Info**`;

const LinkText = ({ children }: { children: ReactNode }) => {
  return (
    <Text className="text-lg text-primary-100 group-hover:text-primary-50">
      {children}
    </Text>
  );
};

const ContactInfoFooter = ({ location, contact, email, googleMap }) => {
  return (
    <div className="flex flex-col gap-2">
      <TitleHighlighted title={Title} />
      <ul className="text-white dark:text-gray-400">
        <li className="mb-4">
          <p className="flex items-center gap-2 footer-text">
            <MapPin size={24} className="shrink-0 text-gray-400" />
            <LinkText>{location}</LinkText>
          </p>
        </li>
        <li className="mb-4">
          <p className="flex items-center gap-2 footer-text">
            <Phone size={24} className="shrink-0 text-gray-400" />
            <LinkText>{contact}</LinkText>
          </p>
        </li>
        <li className="mb-4">
          <p className="flex items-center gap-2 footer-text">
            <Mail size={24} className="shrink-0 text-gray-400" />
            <LinkText>{email}</LinkText>
          </p>
        </li>
      </ul>
      <div className="aspect-w-16 aspect-h-10 h-[300px]">
        <iframe
          src={googleMap}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactInfoFooter;
