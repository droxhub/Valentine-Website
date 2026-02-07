"use client";

import { useEffect, useState } from "react";

interface CelebrationAnimationProps {
  fromName: string;
  toName: string;
}

export default function CelebrationAnimation({
  fromName,
  toName,
}: CelebrationAnimationProps) {
  const [showNames, setShowNames] = useState(false);

  useEffect(() => {
    // Trigger name animation after a short delay
    const timer = setTimeout(() => setShowNames(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Generate falling hearts
  const hearts = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDuration: `${2 + Math.random() * 3}s`,
    animationDelay: `${Math.random() * 2}s`,
    size: `${20 + Math.random() * 30}px`,
  }));

  // Generate confetti
  const confetti = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    backgroundColor: ["#FF69B4", "#FF1744", "#E91E63", "#FFD700", "#FF6B9D"][
      Math.floor(Math.random() * 5)
    ],
    animationDuration: `${3 + Math.random() * 2}s`,
    animationDelay: `${Math.random() * 1}s`,
  }));

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 to-pink-900/40 animate-pulse" />

      {/* Falling Hearts */}
      {hearts.map((heart) => (
        <div
          key={`heart-${heart.id}`}
          className="absolute top-0 animate-fall"
          style={{
            left: heart.left,
            animationDuration: heart.animationDuration,
            animationDelay: heart.animationDelay,
            fontSize: heart.size,
          }}
        >
          💕
        </div>
      ))}

      {/* Confetti */}
      {confetti.map((item) => (
        <div
          key={`confetti-${item.id}`}
          className="absolute top-0 w-2 h-2 animate-fall-confetti"
          style={{
            left: item.left,
            backgroundColor: item.backgroundColor,
            animationDuration: item.animationDuration,
            animationDelay: item.animationDelay,
          }}
        />
      ))}

      {/* Center Message */}
      <div className="relative z-10 text-center px-4 w-full max-w-4xl">
        {showNames && (
          <div className="space-y-8 animate-scale-in">
            {/* Main "YES" Message */}
            <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-[0_0_25px_rgba(255,105,180,0.8)] tracking-wide">
              YES! 💖
            </h1>

            {/* Names Section */}
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

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/90 font-light tracking-[0.2em] uppercase mt-8">
              Happy Valentine&apos;s Day
            </p>

            {/* Send Response Button */}
            <div className="mt-12 animate-scale-in animation-delay-500">
              <button
                onClick={() => {
                  const encodedFrom = encodeURIComponent(fromName);
                  const encodedTo = encodeURIComponent(toName);
                  // Swap names: Recipient (toName) sends TO Sender (fromName)
                  const responseLink = `${window.location.origin}/accepted?from=${encodedTo}&to=${encodedFrom}`;
                  const text = `I have an answer for you! 💖 Check it out: ${responseLink}`;
                  window.open(
                    `https://wa.me/?text=${encodeURIComponent(text)}`,
                    "_blank",
                  );
                }}
                className="px-8 py-4 bg-white text-valentine-red font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-3 mx-auto group"
              >
                <span>Send My Response 💌</span>
                <svg
                  className="w-5 h-5 fill-current transition-transform group-hover:rotate-12"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </button>
            </div>
          </div>
        )}
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

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
}
