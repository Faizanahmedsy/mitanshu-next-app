import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mitanshu | Portfolio",
  description: "Made with Love By Mitanshu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.className)}>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
