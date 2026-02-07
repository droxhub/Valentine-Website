import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Valentine Proposal 💕 | Will You Be Mine?",
  description:
    "Create a magical Valentine's Day proposal moment with a personalized link for your special someone!",
  keywords: ["valentine", "proposal", "love", "romantic", "valentine's day"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
