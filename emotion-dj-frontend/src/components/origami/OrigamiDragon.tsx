"use client";

import { motion } from "framer-motion";

export default function OrigamiDragon({ size = 220 }: { size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ rotate: [-1, 1, -1] }}
      transition={{ duration: 0.4, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Body */}
      <polygon points="60,80 140,80 155,120 100,145 45,120" fill="#8B0000" stroke="#FF4500" strokeWidth="1" />
      <polygon points="60,80 140,80 155,120 100,110" fill="#C0392B" stroke="none" opacity="0.7" />

      {/* Left wing */}
      <motion.g
        style={{ transformOrigin: "60px 90px" }}
        animate={{ rotate: [-25, 15, -25] }}
        transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <polygon points="60,90 10,45 25,100 45,110" fill="#8B0000" stroke="#FF4500" strokeWidth="1" />
        <polygon points="60,90 10,45 38,72" fill="#FF4500" stroke="none" opacity="0.5" />
        <polygon points="10,45 -5,30 18,52"  fill="#C0392B" stroke="#FF4500" strokeWidth="0.5" />
        <polygon points="10,45 5,25 20,42"   fill="#C0392B" stroke="#FF4500" strokeWidth="0.5" />
      </motion.g>

      {/* Right wing */}
      <motion.g
        style={{ transformOrigin: "140px 90px" }}
        animate={{ rotate: [25, -15, 25] }}
        transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <polygon points="140,90 190,45 175,100 155,110" fill="#8B0000" stroke="#FF4500" strokeWidth="1" />
        <polygon points="140,90 190,45 162,72"  fill="#FF4500" stroke="none" opacity="0.5" />
        <polygon points="190,45 205,30 182,52" fill="#C0392B" stroke="#FF4500" strokeWidth="0.5" />
        <polygon points="190,45 195,25 180,42" fill="#C0392B" stroke="#FF4500" strokeWidth="0.5" />
      </motion.g>

      {/* Neck */}
      <polygon points="88,80 112,80 118,55 82,55" fill="#C0392B" stroke="#FF4500" strokeWidth="1" />

      {/* Head */}
      <polygon points="78,55 122,55 130,35 70,35" fill="#8B0000" stroke="#FF4500" strokeWidth="1" />
      <polygon points="78,55 122,55 130,35 100,42" fill="#C0392B" stroke="none" opacity="0.6" />

      {/* Snout */}
      <polygon points="84,35 116,35 122,22 78,22" fill="#8B0000" stroke="#FF4500" strokeWidth="1" />

      {/* Teeth */}
      <polygon points="88,22 92,14 96,22" fill="#FF4500" />
      <polygon points="100,22 104,14 108,22" fill="#FF4500" />

      {/* Eyes */}
      <circle cx="86" cy="42" r="5" fill="#FF4500" />
      <circle cx="86" cy="42" r="2.5" fill="#1a0000" />
      <circle cx="114" cy="42" r="5" fill="#FF4500" />
      <circle cx="114" cy="42" r="2.5" fill="#1a0000" />

      {/* Horns */}
      <polygon points="83,35 76,15 88,35" fill="#FF4500" />
      <polygon points="117,35 124,15 112,35" fill="#FF4500" />

      {/* Tail */}
      <polygon points="100,145 55,120 45,160 80,155" fill="#C0392B" stroke="#FF4500" strokeWidth="1" />
      <polygon points="45,160 30,178 58,168" fill="#8B0000" stroke="#FF4500" strokeWidth="1" />

      {/* Spines on back */}
      {[70, 85, 100, 115, 130].map((x, i) => (
        <polygon key={i} points={`${x},80 ${x - 5},65 ${x + 5},65`} fill="#FF4500" stroke="none" />
      ))}

      {/* Fire breath */}
      <motion.g
        animate={{ opacity: [0, 0.9, 0], scaleX: [0.5, 1.2, 0.5] }}
        style={{ transformOrigin: "100px 22px" }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut", delay: 0.8 }}
      >
        <polygon points="88,22 112,22 125,5 75,5" fill="#FF4500" opacity="0.7" />
        <polygon points="94,5 106,5 115,-8 85,-8" fill="#FFD700" opacity="0.8" />
      </motion.g>
    </motion.svg>
  );
}
