import Footer from "@/app/(public)/_components/footer";
import React, { ReactNode } from "react";

const PublicSideLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default PublicSideLayout;
