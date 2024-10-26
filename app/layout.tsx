import type { Metadata } from "next";
import { Poppins } from "next/font/google";

// Import styles within this block
import "./globals.css";
import "./main.scss";

// Import Fonts Here
const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TedxBaneshwor : Innovation, Integration, Collaboration | Ted",
  description:
    "TEDx Baneshwor is an independently organized TED event and part of the global TEDx program. It allows local communities to experience the spirit of TED’s mission of 'ideas worth spreading' through self-organized events that bring people together to share a TED-like experience.",
  other: {
    "theme-color": "#ff0404",
    "color-scheme": "light only",
    "twitter:image": "https://tedxbaneshwor.com/wp-content/uploads/2024/09/DSC_2825-1024x683.jpg",
    "twitter:card": "summary_large_image",
    "og:url": "https://tedxbaneshwor.com/",
    "og:image": "https://tedxbaneshwor.com/wp-content/uploads/2024/09/DSC_2825-1024x683.jpg",
    "og:type": "website",
    robots: "index",
  },
  applicationName: "TEDxBANESHWOR",
  creator: "TEDx Baneshwor Team",
  publisher: "TEDx Baneshwor Team",
  keywords: ["TEDx", "TED TALKS"],
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    url: "https://tedxbaneshwor.com/",
    title: "TedxBaneshwor : Innovation, Integration, Collaboration | Ted",
    description:
      "TEDx Baneshwor is an independently organized TED event and part of the global TEDx program. It allows local communities to experience the spirit of TED’s mission.",
    images: [
      {
        url: "https://tedxbaneshwor.com/wp-content/uploads/2024/09/DSC_2825-1024x683.jpg",
        width: 1024,
        height: 683,
        alt: "TEDx Baneshwor Event",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TedxBaneshwor : Innovation, Integration, Collaboration | Ted",
    description:
      "TEDx Baneshwor is an independently organized TED event and part of the global TEDx program. It allows local communities to experience the spirit of TED’s mission.",
    images: ["https://tedxbaneshwor.com/wp-content/uploads/2024/09/DSC_2825-1024x683.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.jpeg" type="image/jpeg" />
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
