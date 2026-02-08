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
    <main className="relative min-h-screen flex items-center justify-center px-4 py-8">
      <div className="relative z-10 max-w-md w-full">
        {/* Proposal Card - Hide completely when accepted */}
        {!isAccepted && (
          <div className="glass-premium rounded-3xl p-8 sm:p-10 animate-scale-in">
            <div className="text-center mb-8 space-y-4">
              <h1 className="text-3xl md:text-4xl romantic-text text-valentine-text-dark leading-tight">
                Hey {toName},
              </h1>
              <h2 className="text-2xl md:text-3xl romantic-text text-valentine-primary leading-tight">
                Will you be my Valentine? 💕
              </h2>
              <p className="text-sm text-valentine-text-light mt-4">
                From:{" "}
                <span className="font-semibold text-valentine-primary">
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
