import { cn } from "@/lib/utils";
import CustomMDReactComponent from "@/provider/CustomMdComponent";
import React from "react";

type Props = {
  title: string;
  className?: string;
};

const TitleHighlighted = ({ title, className }: Props) => {
  return (
    <CustomMDReactComponent
      text={title}
      className={cn(
        "title_highlighted font-medium text-2xl leading-8",
        className
      )}
    />
  );
};

export default TitleHighlighted;
