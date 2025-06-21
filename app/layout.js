import { Figtree } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const figTreee = Figtree({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "NexFund",
  description:
    "Accelerating the Future of Web3 — Capital, Connections, and Credibility.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${figTreee.className}  antialiased w-full`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
