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
    <main className="relative min-h-screen flex items-center justify-center px-4 py-6 md:py-8">
      <div className="relative z-10 max-w-3xl w-full">
        {/* Proposal Card - Hide completely when accepted */}
        {!isAccepted && (
          <div className="glass-premium rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-2xl animate-scale-in">
            <div className="text-center mb-6 md:mb-10 space-y-3 md:space-y-4">
              <h1 className="text-fluid-h1 romantic-text text-white text-shadow-glow leading-tight">
                Hey {toName},
              </h1>
              <h2 className="text-fluid-h2 romantic-text text-white/95 text-shadow-premium leading-snug px-4">
                Will you be my Valentine? 💕
              </h2>
              <p className="text-fluid-sm text-white/70 mt-4 md:mt-6 font-medium tracking-wide">
                From:{" "}
                <span className="text-white/90 font-semibold">{fromName}</span>
              </p>
            </div>

            {/* Interactive Buttons */}
            <InteractiveButtons onAccept={() => setIsAccepted(true)} />
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
        <div className="min-h-screen flex items-center justify-center">
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
