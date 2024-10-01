import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopBackground from "@/components/TopBackground";
import Menu from "@/containers/Menu";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CallToAction from "@/containers/CallToAction";
import Footer from "@/containers/Footer";
import Faqs from "@/containers/Faqs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Namviek - The open source task management tool for tiny teams",
  description: "Do not mind the cost any more, just do your work now. Namviek has a lot of essential features that helps you run your team with a low budget",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <TopBackground />
          <Menu />
          {children}
          <Faqs />
          <CallToAction />
          <Footer />
          <GoogleAnalytics />
        </main>
      </body>
    </html>
  );
}
