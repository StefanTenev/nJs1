import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Link from "next/link";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "BroodlTutorial",
  description: "Track your mood every day of the year g",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const header = (
    <header className="p4 sm:p-8 flex items-center justify-between gap-4">
      <Link href={'/'}>
      <h1  className="text-base sm:text-lg text-gradient monospace cursor-pointer">BROODLE HEADER</h1>
      </Link>
      <div className="flex items-center justify-between">PLACEHOLDER</div>
    </header>
  )
  const footer = (
    <footer className="p-4 sm:p-8">
      footer
    </footer>
  )

  return (
    <html lang="en">
      <body
        className={'w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col ' + `${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
