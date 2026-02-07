"use client";

import { useState } from "react";

export default function CreateLinkForm() {
  const [fromName, setFromName] = useState("");
  const [toName, setToName] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    if (!fromName.trim() || !toName.trim()) {
      alert("Please enter both names!");
      return;
    }

    const encodedFrom = encodeURIComponent(fromName.trim());
    const encodedTo = encodeURIComponent(toName.trim());
    const link = `${window.location.origin}/proposal?from=${encodedFrom}&to=${encodedTo}`;
    setGeneratedLink(link);
    setCopied(false);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      alert("Failed to copy link. Please copy manually.");
    }
  };

  return (
    <div className="space-y-6">
      {/* Name Inputs */}
      <div className="space-y-4">
        <div>
          <label
            htmlFor="fromName"
            className="block text-white text-sm font-medium mb-2"
          >
            Your Name
          </label>
          <input
            id="fromName"
            type="text"
            value={fromName}
            onChange={(e) => setFromName(e.target.value)}
            placeholder="e.g., Alex"
            className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 
                     text-white placeholder-white/50 focus:outline-none focus:ring-2 
                     focus:ring-valentine-pink focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label
            htmlFor="toName"
            className="block text-white text-sm font-medium mb-2"
          >
            Your Crush&apos;s Name
          </label>
          <input
            id="toName"
            type="text"
            value={toName}
            onChange={(e) => setToName(e.target.value)}
            placeholder="e.g., Sarah"
            className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 
                     text-white placeholder-white/50 focus:outline-none focus:ring-2 
                     focus:ring-valentine-pink focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Generate Button */}
      <button
        onClick={handleGenerate}
        className="w-full py-4 px-6 bg-gradient-to-r from-valentine-pink to-valentine-red 
                 text-white text-lg font-semibold rounded-xl shadow-lg 
                 hover:shadow-xl hover:scale-105 active:scale-95 
                 transition-all duration-300 animate-heartbeat"
      >
        Generate Proposal Link 💌
      </button>

      {/* Generated Link Section */}
      {generatedLink && (
        <div className="mt-6 p-4 bg-white/10 rounded-xl border border-white/20 animate-scale-in">
          <p className="text-white/80 text-sm mb-2">
            Your magical link is ready!
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              value={generatedLink}
              readOnly
              className="flex-1 px-3 py-2 bg-white/20 border border-white/30 rounded-lg 
                       text-white text-sm focus:outline-none"
            />
            <button
              onClick={handleCopy}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                copied
                  ? "bg-green-500 text-white"
                  : "bg-white text-valentine-pink hover:bg-white/90"
              }`}
            >
              {copied ? "✓ Copied!" : "Copy"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
