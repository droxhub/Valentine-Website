import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Valentine Proposal 💕 | Will You Be Mine?",
  description:
    "Create a magical Valentine's Day proposal moment with a personalized link for your special someone!",
  keywords: ["valentine", "proposal", "love", "romantic", "valentine's day"],
  icons: {
    icon: "/fevi-ico.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <a
          href="https://www.droxdev.com"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity duration-300 pointer-events-auto cursor-pointer"
        >
          <span className="text-white/80 text-[10px] uppercase tracking-widest font-light drop-shadow-md">
            Powered by
          </span>
          <img
            src="/drox-logo.png"
            alt="Drox Logo"
            className="h-8 w-auto drop-shadow-md"
          />
        </a>
      </body>
    </html>
  );
}
