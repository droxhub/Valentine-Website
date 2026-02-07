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
    <main className="min-h-screen flex items-center justify-center p-4 relative">
      <div className="max-w-2xl w-full">
        {/* Proposal Card */}
        <div
          className={`glass-morphism rounded-3xl p-8 md:p-12 shadow-2xl transition-all duration-500 ${
            isAccepted ? "blur-sm scale-95" : ""
          }`}
        >
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl romantic-text text-white text-shadow-glow mb-4">
              Hey {toName},
            </h1>
            <h2 className="text-3xl md:text-4xl romantic-text text-white/90 mb-2">
              Will you be my Valentine? 💕
            </h2>
            <p className="text-lg text-white/60 mt-6">From: {fromName}</p>
          </div>

          {/* Interactive Buttons */}
          <InteractiveButtons onAccept={() => setIsAccepted(true)} />
        </div>
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
          <div className="text-white text-2xl">Loading...</div>
        </div>
      }
    >
      <ProposalContent />
    </Suspense>
  );
}
