import Footer from "@/app/(public)/_components/footer";
import Navbar from "@/components/Navbar";
import React, { ReactNode } from "react";

const PublicSideLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Navbar />
      <main className="w-full mt-[64px]">{children}</main>
      <Footer />
    </main>
  );
};

export default PublicSideLayout;
