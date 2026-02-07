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
    <div className="space-y-5 md:space-y-6">
      {/* Name Inputs */}
      <div className="space-y-4 md:space-y-5">
        <div>
          <label
            htmlFor="fromName"
            className="block text-white text-fluid-xs font-semibold mb-2 tracking-wide"
          >
            Your Name
          </label>
          <input
            id="fromName"
            type="text"
            value={fromName}
            onChange={(e) => setFromName(e.target.value)}
            placeholder="e.g., Alex"
            className="w-full px-4 py-3 rounded-xl 
                     bg-white/15 border-2 border-white/25 
                     text-white text-fluid-sm placeholder-white/40 
                     focus:outline-none focus:bg-white/20 focus:border-white/40
                     input-premium
                     transition-all duration-300"
          />
        </div>

        <div>
          <label
            htmlFor="toName"
            className="block text-white text-fluid-xs font-semibold mb-2 tracking-wide"
          >
            Your Crush&apos;s Name
          </label>
          <input
            id="toName"
            type="text"
            value={toName}
            onChange={(e) => setToName(e.target.value)}
            placeholder="e.g., Sarah"
            className="w-full px-4 py-3 rounded-xl 
                     bg-white/15 border-2 border-white/25 
                     text-white text-fluid-sm placeholder-white/40 
                     focus:outline-none focus:bg-white/20 focus:border-white/40
                     input-premium
                     transition-all duration-300"
          />
        </div>
      </div>

      {/* Generate Button */}
      <button
        onClick={handleGenerate}
        className="w-full py-3.5 md:py-4 px-6 
                 bg-gradient-to-r from-valentine-pink via-valentine-purple to-valentine-red 
                 text-white text-fluid-base font-bold rounded-xl 
                 shadow-lg hover:shadow-xl 
                 btn-premium animate-heartbeat
                 transform hover:scale-[1.01] active:scale-95 
                 transition-all duration-300"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          Generate Proposal Link 💌
        </span>
      </button>

      {/* Generated Link Section */}
      {generatedLink && (
        <div className="mt-5 md:mt-6 p-4 md:p-5 bg-white/10 rounded-xl border-2 border-white/20 animate-scale-in space-y-4 shadow-xl backdrop-blur-sm">
          <div>
            <p className="text-white/85 text-fluid-xs font-medium mb-3 flex items-center gap-2">
              <span className="text-xl">✨</span>
              <span>Your magical link is ready!</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-2.5">
              <input
                type="text"
                value={generatedLink}
                readOnly
                className="flex-1 px-3 py-2.5 bg-white/20 border border-white/30 
                         rounded-lg text-white text-xs sm:text-sm 
                         focus:outline-none select-all backdrop-blur-sm"
              />
              <button
                onClick={handleCopy}
                className={`px-5 md:px-6 py-2.5 rounded-lg font-semibold 
                          text-fluid-xs transition-all duration-300 
                          transform hover:scale-105 active:scale-95 shadow-md ${
                            copied
                              ? "bg-green-500 text-white"
                              : "bg-white text-valentine-pink hover:bg-white/90"
                          }`}
              >
                {copied ? "✓ Copied!" : "Copy"}
              </button>
            </div>
          </div>

          {/* WhatsApp Share Button */}
          <button
            onClick={() => {
              const text = `Hey! I have a special message for you... Check it out here: ${generatedLink}`;
              window.open(
                `https://wa.me/?text=${encodeURIComponent(text)}`,
                "_blank",
              );
            }}
            className="w-full py-3 md:py-3.5 px-5 
                     bg-gradient-to-r from-[#25D366] to-[#128C7E] 
                     text-white font-bold text-fluid-sm rounded-full 
                     shadow-lg hover:shadow-xl 
                     transform hover:scale-[1.01] active:scale-95 
                     transition-all duration-300 
                     flex items-center justify-center gap-2.5 
                     group border-2 border-white/20"
          >
            <span className="drop-shadow-sm relative z-10">
              Share on WhatsApp
            </span>
            <svg
              className="w-4 h-4 md:w-5 md:h-5 fill-white drop-shadow-sm transition-transform group-hover:rotate-12 relative z-10"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
