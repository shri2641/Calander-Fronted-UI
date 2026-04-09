import React from 'react';
import { motion } from 'framer-motion';

export default function GradientBackground({ isDarkMode }) {
  // A sophisticated, smooth animated background using framer-motion and tailwind blurs
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <div className={`absolute inset-0 transition-colors duration-700 ${isDarkMode ? 'bg-[#0a0f1c]' : 'bg-[#f8fafc]'}`}></div>
      
      {/* Orb 1: Brand Blue */}
      <motion.div
        animate={{
          x: [0, 80, -50, 0],
          y: [0, -60, 50, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className={`absolute top-[-10%] left-[-10%] w-[45vw] h-[45vw] lg:w-[40vw] lg:h-[40vw] rounded-full mix-blend-multiply filter blur-[80px] lg:blur-[120px] opacity-70 ${isDarkMode ? 'bg-brand-900 mix-blend-screen opacity-50' : 'bg-brand-200'}`}
      />
      
      {/* Orb 2: Deep Purple */}
      <motion.div
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 80, -100, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className={`absolute top-[40%] right-[-10%] w-[55vw] h-[55vw] lg:w-[45vw] lg:h-[45vw] rounded-full mix-blend-multiply filter blur-[80px] lg:blur-[120px] opacity-60 ${isDarkMode ? 'bg-purple-900/80 mix-blend-screen opacity-40' : 'bg-purple-200'}`}
      />
      
      {/* Orb 3: Fuchsia accent */}
      <motion.div
        animate={{
          x: [0, 60, -80, 0],
          y: [0, 100, -40, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className={`absolute bottom-[-10%] left-[10%] w-[40vw] h-[40vw] lg:w-[35vw] lg:h-[35vw] rounded-full mix-blend-multiply filter blur-[80px] lg:blur-[100px] opacity-50 ${isDarkMode ? 'bg-fuchsia-900/70 mix-blend-screen opacity-30' : 'bg-fuchsia-300/60'}`}
      />
      
      {/* Premium grain overlay to make it look highly stylized */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      ></div>
    </div>
  );
}
