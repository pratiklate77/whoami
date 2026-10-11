import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { getProfile } from "@/lib/content";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-jetbrains",
});

const profile = getProfile();

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.title}`,
  description: profile.bio,
  keywords: [
    profile.name,
    "Backend Developer",
    "Java Developer",
    "Spring Boot",
    "Microservices",
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
