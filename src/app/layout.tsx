import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import ImportantBanner from "@/components/ImportantBanner";
import Footer from "@/components/Footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />

        <ImportantBanner />

        {children}

        <Footer />
      </body>
    </html>
  );
}