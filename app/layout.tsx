import type { Metadata } from "next";
import { Fredoka, Dancing_Script } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  weight: ["300", "400", "500", "600", "700"],
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  weight: ["400", "500", "600", "700"],
});

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
      <body
        className={`${fredoka.variable} ${dancingScript.variable} font-fredoka flex flex-col min-h-screen`}
      >
        <div className="flex-1 flex flex-col">{children}</div>
        <div className="flex justify-center py-4 pointer-events-none relative z-30">
          <a
            href="https://www.droxdev.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 
                       bg-black/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-black/10 shadow-lg
                       opacity-90 hover:opacity-100 transition-all duration-300 pointer-events-auto cursor-pointer hover:scale-105"
          >
            <span className="text-white/95 text-[10px] uppercase tracking-widest font-medium drop-shadow-sm">
              Powered by
            </span>
            <img
              src="/drox-logo.png"
              alt="Drox Logo"
              className="h-6 w-auto drop-shadow-sm"
            />
          </a>
        </div>
      </body>
    </html>
  );
}
