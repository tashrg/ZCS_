import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google"; // Import Montserrat and Open Sans
import "./globals.css";
import { twMerge } from "tailwind-merge";

// Load Montserrat and Open Sans fonts
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans" });

export const metadata: Metadata = {
  title: "Zenith Core Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={twMerge(montserrat.variable, openSans.variable)}>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/png" />
      </head>
      <body className={twMerge("antialiased bg-[#EAEEFE]", montserrat.className)}>
        {children}
      </body>
    </html>
  );
}