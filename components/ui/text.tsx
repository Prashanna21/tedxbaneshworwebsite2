import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const Text = ({
  className = "",
  children,
  variant = "primary",
}: {
  className?: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) => {
  return (
    <span
      className={cn(
        "text-text-skin-primary",
        {
          "text-text-skin-secondary": variant === "secondary",
        },
        className
      )}
    >
      {children}
    </span>
  );
};

export default Text;
