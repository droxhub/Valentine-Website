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
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm animate-scale-in" />

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
      <div className="relative z-10 text-center px-4">
        {showNames && (
          <div className="space-y-6">
            {/* Names Display */}
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <h2 className="text-5xl md:text-7xl romantic-text text-white text-shadow-glow animate-slide-in-left">
                {fromName}
              </h2>
              <span className="text-6xl md:text-8xl animate-scale-in animation-delay-300">
                💕
              </span>
              <h2 className="text-5xl md:text-7xl romantic-text text-white text-shadow-glow animate-slide-in-right">
                {toName}
              </h2>
            </div>

            {/* Success Messages */}
            <div className="space-y-2 animate-scale-in animation-delay-500">
              <p className="text-3xl md:text-4xl text-white font-bold">
                Yay! 🎉
              </p>
              <p className="text-2xl md:text-3xl text-valentine-glow">
                It&apos;s Official!
              </p>
              <p className="text-lg md:text-xl text-white/90">
                Forever Together ✨
              </p>
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
