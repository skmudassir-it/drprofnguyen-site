import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Daniel Schilling Weiss Nguyen | #1 Worldwide Student & Workforce Impact",
  description:
    "Federal IT Executive, Professor, Author & Mentor. Vietnamese refugee turned #1 globally ranked academic and IT leader. PhD, DTM — NOAA Acting Director, Dissertation Chair, 26+ books.",
  keywords: [
    "Dr. Daniel Nguyen",
    "Federal IT Executive",
    "NOAA",
    "Cybersecurity",
    "PhD",
    "Dissertation Chair",
    "Vietnamese Refugee",
    "Distinguished Toastmaster",
  ],
  openGraph: {
    title: "Dr. Daniel Schilling Weiss Nguyen",
    description:
      "From Vietnamese refugee to #1 worldwide ranking. Federal IT Executive, Professor, Author, and Mentor.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
