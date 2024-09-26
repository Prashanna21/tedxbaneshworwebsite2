import { cn } from "@/lib/utils";
import { TSocialLinkTypes } from "@/types/type";
import Link from "next/link";
import { ReactNode } from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialLink = ({
  url,
  type,
  className,
}: {
  url: string;
  type: TSocialLinkTypes;
  className?: string;
}) => {
  const Icons: Record<TSocialLinkTypes, ReactNode> = {
    facebook: <FaFacebook size={24} />,
    instagram: <FaInstagram size={24} />,
    youtube: <FaYoutube size={24} />,
    twitter: <FaXTwitter size={24} />,
    linkedIn: <FaLinkedin size={24} />,
  };

  return (
    <Link
      href={url}
      target="_blank"
      className={cn("text-white hover:text-slate-500", className)}
    >
      {Icons[type]}
    </Link>
  );
};

export default SocialLink;
