import Footer from "@/app/(public)/_components/footer";
import Navbar from "@/components/Navbar";
import React, { ReactNode } from "react";

const PublicSideLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>

      {children}

    </div>
  );
};

export default PublicSideLayout;
