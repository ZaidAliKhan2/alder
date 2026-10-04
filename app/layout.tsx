import type { Metadata, Viewport } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});
const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
});
export const metadata: Metadata = {
  metadataBase: new URL("https://alder-and-co.zaidali321.chatgpt.site"),
  title: {
    default: "Accounting, with perspective — Alder & Co.",
    template: "%s — Alder & Co.",
  },
  description:
    "Thoughtful accounting. Human connection. An editorial accounting and advisory portfolio concept.",
};
export const viewport: Viewport = { themeColor: "#f6f5ee" };
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${sans.variable} ${display.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
