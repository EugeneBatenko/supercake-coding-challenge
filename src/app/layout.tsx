import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { inter } from "./fonts";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { QueryProvider } from "@/providers/QueryClientProvider";

export const metadata: Metadata = {
  title: "Supercake Coding Challenge",
  description: "Good luck!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header />
        <main>
          <QueryProvider>{children}</QueryProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
