"use client";

import { useState, useEffect } from "react";

interface InteractiveButtonsProps {
  onAccept: () => void;
}

export default function InteractiveButtons({
  onAccept,
}: InteractiveButtonsProps) {
  const [noCount, setNoCount] = useState(0);
  const [yesScale, setYesScale] = useState(1);
  const [noScale, setNoScale] = useState(1);
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

    // Scale buttons
    setNoScale(Math.max(noScale * 0.8, 0.4)); // Shrink No button
    setYesScale((prev) => Math.min(prev + 0.4, 9)); // Increased to 0.4 and cap to 9

    // Logic: After 6 clicks, No button moves to center (0,0) to be covered by Yes
    if (newCount >= 6) {
      setNoPosition({ x: 0, y: 0 });
    } else {
      // Random position shift for No button
      const randomX = Math.random() * 240 - 120;
      const randomY = Math.random() * 240 - 120;
      setNoPosition({ x: randomX, y: randomY });
    }
  };

  const handleNoMouseEnter = () => {
    // Stop running away if we reached the limit (so it stays under the Yes button)
    if (noCount >= 6) return;

    if (noCount > 0) {
      // Jump away when mouse gets close
      const randomX = Math.random() * 300 - 150;
      const randomY = Math.random() * 300 - 150;
      setNoPosition({ x: randomX, y: randomY });
    }
  };

  const handleYesClick = () => {
    onAccept();
  };

  // Calculate opacity for No button (fade out after many clicks)
  // We keep it visible but it will be behind the Yes button
  const noOpacity = 1;

  return (
    <div className="flex flex-col items-center gap-12 w-full pt-4">
      {/* Question Display - only shown after first No click */}
      <div className="min-h-[60px] flex items-center justify-center">
        {noCount > 0 && (
          <p className="text-fluid-h2 text-white/95 text-center animate-scale-in px-6 font-semibold drop-shadow-sm">
            {questionText}
          </p>
        )}
      </div>

      {/* Buttons Container */}
      <div className="relative flex flex-col sm:flex-row gap-8 items-center justify-center min-h-[250px] w-full max-w-md mx-auto">
        {/* Yes Button */}
        <div
          className="relative z-20"
          style={{
            transform: `scale(${yesScale})`,
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <button
            onClick={handleYesClick}
            className="bg-gradient-to-r from-valentine-pink to-valentine-red text-white 
                   font-bold rounded-full shadow-xl hover:shadow-2xl 
                   active:scale-95 transition-all duration-200 
                   flex items-center justify-center animate-heartbeat
                   px-10 py-5 text-xl"
          >
            <span>Yes! 💖</span>
          </button>
        </div>

        {/* No Button */}
        <button
          onClick={handleNoClick}
          onMouseEnter={handleNoMouseEnter}
          style={{
            transform: `translate(${noPosition.x}px, ${noPosition.y}px) scale(${noScale})`,
            opacity: noOpacity,
            position: noCount > 0 ? "absolute" : "relative",
          }}
          className="bg-white/20 backdrop-blur-md text-white/90 font-semibold rounded-full border border-white/30
                   shadow-lg hover:bg-white/30 transition-all duration-500 
                   flex items-center justify-center z-10 px-8 py-4 text-lg select-none"
        >
          <span>No</span>
        </button>
      </div>

      {/* Helper Text */}
      <div className="min-h-[30px]">
        {noCount > 3 && (
          <p className="text-white/50 text-sm text-center animate-scale-in italic tracking-wide">
            The &quot;No&quot; button is a bit shy... 🏃‍♂️
          </p>
        )}
      </div>
    </div>
  );
}
