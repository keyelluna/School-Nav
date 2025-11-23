import { motion } from 'motion/react';
import { User, GraduationCap, BookOpen } from 'lucide-react';
import imgImg79934 from "figma:asset/c25b1fe69c351497b5677896e641e46ea498b783.png";
import imgImage1 from "figma:asset/e30c10d7f9b16dd75f0275ed8191330fefa3bd8d.png";

interface AccountSelectionProps {
  onSelect: (type: 'visitor' | 'student' | 'faculty') => void;
}

export default function AccountSelection({ onSelect }: AccountSelectionProps) {
  return (
    <div className="bg-white relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background Image - responsive */}
      <div className="absolute inset-0 opacity-20 md:opacity-30">
        <img alt="" className="w-full h-full object-cover" src={imgImg79934} />
      </div>

      {/* Bottom gradient - responsive */}
      <div className="absolute bottom-0 left-0 w-full h-[25vh] overflow-hidden">
        <div 
          className="absolute w-[200%] md:w-[150%] origin-bottom-right bg-gradient-to-b from-[#780302] to-[#310100] to-[97%]"
          style={{
            height: '30vh',
            transform: 'rotate(-21deg) translateX(-25%) translateY(50%)',
          }}
        />
      </div>

      {/* Main card - responsive */}
      <motion.div 
        className="relative z-10 bg-[maroon] rounded-[10px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.3)] w-[90%] max-w-[360px] sm:max-w-[400px] p-6 sm:p-8"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header with Logo */}
        <div className="relative mb-6 sm:mb-8 flex flex-col items-center">
          <div className="size-[70px] sm:size-[80px] md:size-[90px] mb-3">
            <img alt="University Logo" className="w-full h-full object-cover" src={imgImage1} />
          </div>
          <h2 className="text-white text-center font-lilita text-[20px] sm:text-[24px]">
            Select Account Type
          </h2>
        </div>

        {/* Buttons container */}
        <div className="flex flex-col items-center gap-3 sm:gap-4">
          {/* Visitor Button */}
          <motion.button
            onClick={() => onSelect('visitor')}
            className="w-full max-w-[240px] h-[50px] sm:h-[53px] bg-[#fffdfd] rounded-[25px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer flex items-center justify-center gap-2 sm:gap-3 hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <User className="size-5 sm:size-6 text-[#780302]" />
            <p className="[text-shadow:rgba(0,0,0,0.25)_0px_4px_4px] font-lilita text-[#780302] text-[20px] sm:text-[24px]">
              Visitor
            </p>
          </motion.button>

          {/* Student Button */}
          <motion.button
            onClick={() => onSelect('student')}
            className="w-full max-w-[240px] h-[50px] sm:h-[53px] bg-[#fffdfd] rounded-[25px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer flex items-center justify-center gap-2 sm:gap-3 hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <GraduationCap className="size-5 sm:size-6 text-[#780302]" />
            <p className="[text-shadow:rgba(0,0,0,0.25)_0px_4px_4px] font-lilita text-[#780302] text-[20px] sm:text-[24px]">
              Student
            </p>
          </motion.button>

          {/* Faculty Button */}
          <motion.button
            onClick={() => onSelect('faculty')}
            className="w-full max-w-[240px] h-[50px] sm:h-[53px] bg-[#fffdfd] rounded-[25px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer flex items-center justify-center gap-2 sm:gap-3 hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <BookOpen className="size-5 sm:size-6 text-[#780302]" />
            <p className="[text-shadow:rgba(0,0,0,0.25)_0px_4px_4px] font-lilita text-[#780302] text-[20px] sm:text-[24px]">
              Faculty
            </p>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}