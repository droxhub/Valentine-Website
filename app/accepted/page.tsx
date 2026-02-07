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
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-6 md:py-10 overflow-hidden bg-gradient-to-br from-pink-500 via-rose-500 to-purple-600">
      <div className="relative z-10 text-center animate-scale-in max-w-4xl w-full p-4">
        <h1 className="text-fluid-h1 md:text-[clamp(3rem,9vw,5.5rem)] font-bold text-white drop-shadow-[0_0_30px_rgba(255,105,180,0.9)] tracking-wide mb-8 md:mb-10 leading-none">
          She said YES! 💖
        </h1>

        <div className="glass-premium rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl mx-auto backdrop-blur-md bg-white/10 border-2 border-white/25">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-5 md:gap-8 py-4 md:py-6">
            <h2 className="text-fluid-4xl md:text-[clamp(2.5rem,6vw,4rem)] romantic-text text-white/95 text-shadow-glow">
              {fromName}
            </h2>
            <span className="text-fluid-2xl md:text-4xl text-white/80 font-light italic px-3 md:px-5 border-b-2 border-white/30 pb-1">
              &amp;
            </span>
            <h2 className="text-fluid-4xl md:text-[clamp(2.5rem,6vw,4rem)] romantic-text text-white/95 text-shadow-glow">
              {toName}
            </h2>
          </div>

          <p className="text-fluid-lg md:text-2xl text-white/90 font-light tracking-[0.2em] uppercase mt-6 md:mt-8 drop-shadow-md">
            Officially Together ✨
          </p>
        </div>

        <div className="mt-10 md:mt-12 space-y-3">
          <p className="text-white/70 text-fluid-xs md:text-base tracking-widest uppercase">
            Happy Valentine&apos;s Day
          </p>
          <div className="flex items-center justify-center gap-2 text-white/40 text-xs">
            <span>Powered by</span>
            <span className="font-semibold text-white/60">Drox</span>
          </div>
        </div>
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
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 to-purple-600">
          <div className="text-white text-fluid-xl animate-pulse">
            Loading love...
          </div>
        </div>
      }
    >
      <AcceptedContent />
    </Suspense>
  );
}
