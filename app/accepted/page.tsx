"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

function AcceptedContent() {
  const searchParams = useSearchParams();
  const fromName = searchParams.get("from") || "Someone";
  const toName = searchParams.get("to") || "You";
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center p-4 relative overflow-hidden bg-gradient-to-br from-pink-500 to-purple-600">
      <div className="z-10 text-center animate-scale-in max-w-4xl w-full p-4">
        <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-[0_0_25px_rgba(255,105,180,0.8)] tracking-wide mb-8">
          She said YES! 💖
        </h1>

        <div className="glass-morphism rounded-[2.5rem] p-8 md:p-12 shadow-2xl mx-auto backdrop-blur-md bg-white/10 border border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 py-6">
            <h2 className="text-4xl md:text-6xl romantic-text text-white/95 text-shadow-glow">
              {fromName}
            </h2>
            <span className="text-3xl md:text-4xl text-white/80 font-light italic px-4 border-b border-white/30 pb-1">
              &
            </span>
            <h2 className="text-4xl md:text-6xl romantic-text text-white/95 text-shadow-glow">
              {toName}
            </h2>
          </div>

          <p className="text-xl md:text-2xl text-white/90 font-light tracking-[0.2em] uppercase mt-8">
            Officially Together ✨
          </p>
        </div>

        <p className="text-white/60 mt-12 text-sm md:text-base tracking-widest uppercase">
          Happy Valentine&apos;s Day
        </p>
      </div>

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-10vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) rotate(360deg);
            opacity: 0.3;
          }
        }

        @keyframes fall-confetti {
          0% {
            transform: translateY(-10vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) rotate(720deg);
            opacity: 0;
          }
        }

        .animate-fall {
          animation: fall linear infinite;
        }

        .animate-fall-confetti {
          animation: fall-confetti linear infinite;
        }
      `}</style>
    </main>
  );
}

export default function AcceptedPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-black">
          <div className="text-white text-2xl">Loading love...</div>
        </div>
      }
    >
      <AcceptedContent />
    </Suspense>
  );
}
