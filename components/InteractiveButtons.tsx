"use client";

import { useState, useEffect } from "react";

interface InteractiveButtonsProps {
  onAccept: () => void;
}

export default function InteractiveButtons({
  onAccept,
}: InteractiveButtonsProps) {
  const [noCount, setNoCount] = useState(0);
  const [yesSize, setYesSize] = useState(120);
  const [noSize, setNoSize] = useState(120);
  const [questionText, setQuestionText] = useState("Will you be my Valentine?");
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  const questions = [
    "Will you be my Valentine?",
    "Are you sure?",
    "Really?",
    "Think again... 🥺",
    "Please? 💕",
    "Come on... 💖",
    "Just say yes! 😊",
  ];

  const handleNoClick = () => {
    const newCount = noCount + 1;
    setNoCount(newCount);

    // Update question text
    if (newCount < questions.length) {
      setQuestionText(questions[newCount]);
    }

    // Decrease No button size exponentially
    const newNoSize = Math.max(noSize * 0.75, 20);
    setNoSize(newNoSize);

    // Increase Yes button size
    const newYesSize = yesSize * 1.3;
    setYesSize(newYesSize);

    // Random position shift for No button (make it "escape")
    if (newCount < 6) {
      const randomX = Math.random() * 100 - 50;
      const randomY = Math.random() * 100 - 50;
      setNoPosition({ x: randomX, y: randomY });
    }
  };

  const handleYesClick = () => {
    onAccept();
  };

  // Calculate opacity for No button (fade out after many clicks)
  const noOpacity = noCount > 4 ? Math.max(1 - (noCount - 4) * 0.2, 0.1) : 1;

  return (
    <div className="flex flex-col items-center gap-8">
      {/* Question Display - only shown after first No click */}
      {noCount > 0 && (
        <p className="text-2xl md:text-3xl text-white/90 text-center animate-scale-in">
          {questionText}
        </p>
      )}

      {/* Buttons Container */}
      <div className="relative flex gap-6 items-center justify-center flex-wrap min-h-[200px]">
        {/* Yes Button */}
        <button
          onClick={handleYesClick}
          style={{
            width: `${yesSize}px`,
            height: `${yesSize}px`,
          }}
          className="bg-gradient-to-r from-valentine-pink to-valentine-red text-white 
                   font-bold rounded-full shadow-lg hover:shadow-2xl 
                   hover:scale-110 active:scale-95 transition-all duration-500 
                   flex items-center justify-center z-10"
        >
          <span className="text-lg md:text-xl">Yes! 💖</span>
        </button>

        {/* No Button */}
        <button
          onClick={handleNoClick}
          style={{
            width: `${noSize}px`,
            height: `${noSize}px`,
            opacity: noOpacity,
            transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
          }}
          className={`bg-gray-500/50 text-white font-medium rounded-full shadow-md 
                   hover:bg-gray-600/50 transition-all duration-500 
                   flex items-center justify-center ${
                     noCount > 5 ? "pointer-events-none" : ""
                   }`}
        >
          <span style={{ fontSize: `${Math.max(noSize / 8, 10)}px` }}>No</span>
        </button>
      </div>

      {/* Helper Text */}
      {noCount > 3 && (
        <p className="text-white/60 text-sm text-center animate-scale-in">
          The No button is getting harder to click... 🤔
        </p>
      )}
    </div>
  );
}
