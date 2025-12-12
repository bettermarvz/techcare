import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const manrope = Manrope({
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "HealthCare Dashboard",
  description: "Submitted by Marvin Zarate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} max-w-[1600px] mx-auto py-[18px]`}>
          <Navbar />
        <main className=" py-[18px]">{children}</main>
      </body>
    </html>
  );
}
