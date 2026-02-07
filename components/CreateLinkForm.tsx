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
        <div className="mt-6 p-4 bg-white/10 rounded-xl border border-white/20 animate-scale-in space-y-4">
          <div>
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

          <button
            onClick={() => {
              const text = `Hey! I have a special message for you... Check it out here: ${generatedLink}`;
              window.open(
                `https://wa.me/?text=${encodeURIComponent(text)}`,
                "_blank",
              );
            }}
            className="w-full py-4 px-6 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-lg rounded-full shadow-lg 
                     hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition-all duration-300 
                     flex items-center justify-center gap-3 group border border-white/20"
          >
            <span className="drop-shadow-sm">Share on WhatsApp</span>
            <svg
              className="w-6 h-6 fill-white drop-shadow-sm transition-transform group-hover:rotate-12"
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
