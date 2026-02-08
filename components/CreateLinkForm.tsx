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
      <div className="space-y-4">
        <div>
          <label
            htmlFor="fromName"
            className="block text-valentine-text-dark text-sm font-semibold mb-2"
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
                     bg-white border-2 border-gray-200
                     text-valentine-text-dark placeholder-gray-400
                     focus:outline-none focus:border-valentine-primary
                     input-premium
                     transition-all duration-300"
          />
        </div>

        <div>
          <label
            htmlFor="toName"
            className="block text-valentine-text-dark text-sm font-semibold mb-2"
          >
            Your Crush's Name
          </label>
          <input
            id="toName"
            type="text"
            value={toName}
            onChange={(e) => setToName(e.target.value)}
            placeholder="e.g., Sarah"
            className="w-full px-4 py-3 rounded-xl 
                     bg-white border-2 border-gray-200
                     text-valentine-text-dark placeholder-gray-400
                     focus:outline-none focus:border-valentine-primary
                     input-premium
                     transition-all duration-300"
          />
        </div>
      </div>

      {/* Generate Button */}
      <button
        onClick={handleGenerate}
        className="w-full py-3.5 px-6 
                 bg-valentine-primary
                 text-white text-base font-bold rounded-full
                 btn-premium
                 transform hover:scale-[1.02] active:scale-95 
                 transition-all duration-300"
      >
        Generate Proposal Link 💌
      </button>

      {/* Generated Link Section */}
      {generatedLink && (
        <div className="mt-5 p-5 bg-pink-100/80 rounded-2xl border border-pink-200 animate-scale-in space-y-4 shadow-sm">
          <div>
            <p className="text-valentine-text-dark text-sm font-semibold mb-3 flex items-center gap-2">
              <span className="text-xl">🎉</span>
              <span>Your Link is Ready!</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-2.5">
              <input
                type="text"
                value={generatedLink}
                readOnly
                className="flex-1 px-4 py-3 bg-white border-2 border-pink-200
                         rounded-xl text-valentine-primary text-sm font-medium
                         focus:outline-none focus:border-valentine-primary select-all"
              />
              <button
                onClick={handleCopy}
                className={`px-6 py-3 rounded-xl font-bold border-2
                          text-sm transition-all duration-300 
                          transform hover:scale-105 active:scale-95 shadow-sm ${
                            copied
                              ? "bg-green-500 border-green-500 text-white"
                              : "bg-white border-valentine-primary text-valentine-primary hover:bg-pink-50"
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
            className="w-full py-3.5 px-5 
                     bg-[#25D366]
                     text-white font-bold text-sm rounded-full 
                     hover:bg-[#20bd5a]
                     transform hover:scale-[1.02] active:scale-95 
                     transition-all duration-300 
                     flex items-center justify-center gap-2.5"
          >
            <span>Share on WhatsApp</span>
            <svg
              className="w-5 h-5 fill-white"
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
