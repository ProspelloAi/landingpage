import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Tech Technologies | Custom Software, AI, Cloud & Mobile App Development Dubai",
  description:
    "Dubai-based technology company delivering next-generation solutions in custom software development, AI automation, cloud architecture, UI/UX design, and mobile app development. Empowering innovation and scalable growth across industries.",
  keywords: [
    "Dubai software company",
    "custom software development UAE",
    "AI automation Dubai",
    "cloud and DevOps services",
    "UI UX design Dubai",
    "mobile app development Dubai",
    "SaaS product development",
    "enterprise software UAE",
    "data analytics solutions",
    "technology consulting Dubai",
  ],
  authors: [{ name: "Tech Technologies" }],
  creator: "Tech Technologies",
  publisher: "Tech Technologies",
  metadataBase: new URL("https://yourwebsite.com"),
  openGraph: {
    title:
      "Tech Technologies | Custom Software, AI, Cloud & Mobile App Development Dubai",
    description:
      "We build scalable digital products, AI-driven solutions, and cloud platforms for modern businesses in Dubai and beyond.",
    url: "https://yourwebsite.com",
    siteName: "Tech Technologies",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tech Technologies - Dubai Software & AI Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Technologies | Digital Innovation from Dubai",
    description:
      "Building next-gen software, AI, and cloud platforms that accelerate business growth.",
    images: ["https://yourwebsite.com/og-image.jpg"],
    creator: "@yourtwitterhandle", // optional
  },
  alternates: {
    canonical: "https://yourwebsite.com",
  },
  other: {
    "geo.region": "AE-DU",
    "geo.placename": "Dubai",
    "geo.position": "25.276987;55.296249",
    ICBM: "25.276987,55.296249",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-gray-900 min-h-screen relative overflow-x-hidden`}
      >
        {/* Animated gradient orbs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 -left-40 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute top-40 right-0 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Grid overlay */}
        <div className="fixed inset-0 pointer-events-none opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(59,130,246,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.08) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
