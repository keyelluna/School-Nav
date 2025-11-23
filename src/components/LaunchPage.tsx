import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import imgImage1 from "figma:asset/e30c10d7f9b16dd75f0275ed8191330fefa3bd8d.png";

interface LaunchPageProps {
  onComplete: () => void;
}

export default function LaunchPage({ onComplete }: LaunchPageProps) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
  const img = new Image();
  img.src = imgImage1;
}, []);


  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-[#310100] to-[#780302] overflow-hidden flex items-center justify-center">
      {/* Container for logo and button, centered vertically and horizontally */}
      <div className="flex flex-col items-center">
        {/* LOGO with relative positioning to allow absolute button placement */}
        <motion.div
          className="relative size-[180px] sm:size-[220px] md:size-[260px] z-10"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <img
            src={imgImage1}
            alt="University Logo"
            className="w-full h-full object-contain"
          />
          {/* BUTTON - positioned absolutely below the logo, centered horizontally */}
          {showButton && (
            <motion.div
              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 z-20"  // mt-4 for spacing; adjust as needed for more downward positioning
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <button
                onClick={onComplete}
                className="px-8 py-3 bg-white rounded-[25px] shadow-md hover:scale-105 transition-transform"
              >
                <p className="font-lilita text-[#780302] text-[20px]">
                  Continue
                </p>
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* FIXED WHITE DIAGONAL STRIPE */}
      <motion.div
        className="absolute bg-white z-0"
        style={{
          width: "200%",
          height: "60%",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) rotate(-24deg)",
        }}
      />
    </div>
  );
}