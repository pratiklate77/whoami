import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-jetbrains",
});

export const metadata: Metadata = {
  title: "Pratik  Late | Full-Stack & Cloud Engineer",
  description:
    "Portfolio of Pratik  Late — Full-Stack & Cloud Engineer specializing in Spring Boot, FastAPI, WebSockets, Kafka, and AWS.",
  keywords: [
    "Pratik  Late",
    "Full-Stack Engineer",
    "Cloud Engineer",
    "Spring Boot",
    "FastAPI",
    "Kafka",
    "AWS",
  ],
};

export const viewport: Viewport = {
  themeColor: "#090d16",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="bg-[#090d16] text-zinc-100">{children}</body>
    </html>
  );
}
