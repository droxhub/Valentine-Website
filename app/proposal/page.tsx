"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import InteractiveButtons from "@/components/InteractiveButtons";
import CelebrationAnimation from "@/components/CelebrationAnimation";

function ProposalContent() {
  const searchParams = useSearchParams();
  const fromName = searchParams.get("from") || "Someone special";
  const toName = searchParams.get("to") || "You";
  const [isAccepted, setIsAccepted] = useState(false);

  return (
    <main className="relative flex-1 flex items-center justify-center px-4 py-8">
      <div className="relative z-10 max-w-md w-full">
        {/* Proposal Card - Hide completely when accepted */}
        {!isAccepted && (
          <div className="glass-premium rounded-3xl p-8 sm:p-10 animate-scale-in">
            <div className="text-center mb-8 md:mb-10 flex flex-col items-center gap-6">
              <h1 className="text-3xl md:text-5xl romantic-text text-valentine-text-dark leading-tight">
                Hey {toName},
              </h1>
              <h2 className="text-4xl md:text-6xl romantic-text text-valentine-primary leading-tight drop-shadow-sm py-2">
                Will you be my <br /> Valentine? 💌
              </h2>
              <p className="text-base md:text-lg text-valentine-text-light/80 mt-2 font-medium">
                From:{" "}
                <span className="font-bold text-valentine-primary italic">
                  {fromName}
                </span>
              </p>
            </div>

            {/* Interactive Buttons */}
            <InteractiveButtons onAccept={() => setIsAccepted(true)} />

            <p className="text-xs text-center text-valentine-text-light/60 mt-6">
              "No" seems a bit shy 😈
            </p>
          </div>
        )}
      </div>

      {/* Celebration Animation Overlay */}
      {isAccepted && (
        <CelebrationAnimation fromName={fromName} toName={toName} />
      )}
    </main>
  );
}

export default function ProposalPage() {
  return (
    <Suspense
      fallback={
        <div className="flex-1 flex items-center justify-center">
          <div className="text-white text-fluid-xl animate-pulse">
            Loading...
          </div>
        </div>
      }
    >
      <ProposalContent />
    </Suspense>
  );
}
