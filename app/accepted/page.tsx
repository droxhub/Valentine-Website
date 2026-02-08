"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import CelebrationAnimation from "@/components/CelebrationAnimation";

function AcceptedContent() {
  const searchParams = useSearchParams();
  const fromName = searchParams.get("from") || "Someone";
  const toName = searchParams.get("to") || "You";

  return (
    <main className="relative flex-1 w-full flex flex-col items-center justify-center overflow-hidden">
      <CelebrationAnimation
        fromName={fromName}
        toName={toName}
        title="She said YES! 💖"
      />
    </main>
  );
}

export default function AcceptedPage() {
  return (
    <Suspense
      fallback={
        <div className="flex-1 flex items-center justify-center">
          <div className="text-valentine-primary text-2xl font-bold animate-pulse">
            Loading love...
          </div>
        </div>
      }
    >
      <AcceptedContent />
    </Suspense>
  );
}
