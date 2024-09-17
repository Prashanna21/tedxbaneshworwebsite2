import type { Metadata } from "next";
import { Poppins } from "next/font/google";

// Import styles within this block
import "./globals.css";

// Import Fonts Here
const poppins = Poppins({
  weight: ["400", "600", "700"], // Choose font weights you need
  subsets: ["latin"], // Choose subsets based on your language support
  style: ["normal", "italic"], // Optional, can specify font styles
  display: "swap", // Optional, can specify swap method for performance
});

export const metadata: Metadata = {
  title: "Tedx Baneshwor",
  description: "Empowering Ideas, Igniting Change",
  other: {
    "theme-color": "#ff0404",
    "color-scheme": "light only",
    "twitter:image": "/logos/tedx_full.png",
    "twitter:card": "summary_large_image",
    "og:url": "tedxbaneshowr.com",
    "og:image": "/logos/tedx_full.png",
    "og:type": "website",
    robots: "index",
  },
  applicationName: "TEDxBANESHOWR",
  creator: "TEDx Baneshowr Team",
  publisher: "TEDx Baneshowr Team",
  keywords: ["TEDx", "TED TALKS"],
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}  antialiased`}>{children}</body>
    </html>
  );
}
