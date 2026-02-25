"use client";

import { motion } from "framer-motion";

export default function OrigamiCrane({ size = 220 }: { size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Body - central diamond */}
      <polygon points="100,55 148,100 100,148 52,100" fill="#FFE066" stroke="#FF8C42" strokeWidth="1" />

      {/* Body shadow face */}
      <polygon points="100,55 148,100 100,100" fill="#FFD700" stroke="none" />

      {/* Left wing */}
      <motion.g
        style={{ transformOrigin: "52px 100px" }}
        animate={{ rotate: [-18, 10, -18] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <polygon points="52,100 8,68 28,118" fill="#FFB347" stroke="#FF8C42" strokeWidth="1" />
        <polygon points="52,100 8,68 52,90"  fill="#FFC107" stroke="none" />
      </motion.g>

      {/* Right wing */}
      <motion.g
        style={{ transformOrigin: "148px 100px" }}
        animate={{ rotate: [18, -10, 18] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <polygon points="148,100 192,68 172,118" fill="#FFB347" stroke="#FF8C42" strokeWidth="1" />
        <polygon points="148,100 192,68 148,90"  fill="#FFC107" stroke="none" />
      </motion.g>

      {/* Neck */}
      <polygon points="100,55 93,26 107,26" fill="#FFD54F" stroke="#FF8C42" strokeWidth="1" />

      {/* Head */}
      <polygon points="93,26 107,26 112,14 88,14" fill="#FFE066" stroke="#FF8C42" strokeWidth="1" />

      {/* Beak */}
      <polygon points="108,16 120,10 110,22" fill="#FF8C42" />

      {/* Eye */}
      <circle cx="96" cy="18" r="2" fill="#1a0e00" />

      {/* Tail */}
      <polygon points="100,148 88,178 112,172" fill="#FFC107" stroke="#FF8C42" strokeWidth="1" />

      {/* Fold line detail */}
      <line x1="100" y1="55" x2="100" y2="148" stroke="#FF8C42" strokeWidth="0.5" strokeDasharray="4,4" opacity="0.5" />
    </motion.svg>
  );
}
