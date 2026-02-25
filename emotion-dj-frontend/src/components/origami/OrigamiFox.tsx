"use client";

import { motion } from "framer-motion";

export default function OrigamiFox({ size = 220 }: { size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Body (sitting) */}
      <polygon points="60,185 140,185 150,130 100,110 50,130" fill="#4A1A7A" stroke="#9B59B6" strokeWidth="1" />
      <polygon points="60,185 140,185 150,130 100,155" fill="#6C3483" stroke="none" opacity="0.6" />

      {/* Chest */}
      <polygon points="80,185 120,185 130,150 100,140 70,150" fill="#7D3C98" stroke="#9B59B6" strokeWidth="0.5" />

      {/* Neck */}
      <polygon points="85,110 115,110 118,90 82,90" fill="#6C3483" stroke="#9B59B6" strokeWidth="1" />

      {/* Head */}
      <polygon points="70,90 130,90 138,60 62,60" fill="#4A1A7A" stroke="#9B59B6" strokeWidth="1" />
      <polygon points="70,90 130,90 138,60 100,72" fill="#6C3483" stroke="none" opacity="0.5" />

      {/* Left ear */}
      <motion.polygon
        points="72,60 60,25 90,58"
        fill="#9B59B6"
        stroke="#4A1A7A"
        strokeWidth="1"
        animate={{ rotate: [-3, 3, -3] }}
        style={{ transformOrigin: "72px 60px" }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <polygon points="74,57 64,30 88,55" fill="#4A1A7A" stroke="none" opacity="0.5" />

      {/* Right ear */}
      <motion.polygon
        points="128,60 140,25 110,58"
        fill="#9B59B6"
        stroke="#4A1A7A"
        strokeWidth="1"
        animate={{ rotate: [3, -3, 3] }}
        style={{ transformOrigin: "128px 60px" }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      />
      <polygon points="126,57 136,30 112,55" fill="#4A1A7A" stroke="none" opacity="0.5" />

      {/* Snout */}
      <polygon points="85,75 115,75 110,90 90,90" fill="#7D3C98" stroke="#9B59B6" strokeWidth="0.5" />
      <polygon points="95,88 105,88 100,95" fill="#9B59B6" />

      {/* Eyes - wide fearful */}
      <ellipse cx="82" cy="70" rx="8" ry="9" fill="#00FF88" />
      <ellipse cx="82" cy="70" rx="4" ry="5" fill="#060011" />
      <circle cx="80" cy="68" r="1.5" fill="white" opacity="0.9" />
      <ellipse cx="118" cy="70" rx="8" ry="9" fill="#00FF88" />
      <ellipse cx="118" cy="70" rx="4" ry="5" fill="#060011" />
      <circle cx="116" cy="68" r="1.5" fill="white" opacity="0.9" />

      {/* Tail curling around body */}
      <motion.path
        d="M 50,130 C 20,145 10,170 30,185 C 50,200 80,190 80,185"
        fill="none"
        stroke="#9B59B6"
        strokeWidth="14"
        strokeLinecap="round"
        animate={{ pathLength: [0.8, 1, 0.8] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <path
        d="M 50,130 C 20,145 10,170 30,185 C 50,200 80,190 80,185"
        fill="none"
        stroke="#4A1A7A"
        strokeWidth="8"
        strokeLinecap="round"
      />

      {/* Tail tip */}
      <circle cx="80" cy="185" r="8" fill="#00FF88" opacity="0.8" />

      {/* Whiskers */}
      <line x1="85" y1="82" x2="55" y2="76" stroke="#9B59B6" strokeWidth="0.8" opacity="0.7" />
      <line x1="85" y1="84" x2="55" y2="84" stroke="#9B59B6" strokeWidth="0.8" opacity="0.7" />
      <line x1="115" y1="82" x2="145" y2="76" stroke="#9B59B6" strokeWidth="0.8" opacity="0.7" />
      <line x1="115" y1="84" x2="145" y2="84" stroke="#9B59B6" strokeWidth="0.8" opacity="0.7" />
    </motion.svg>
  );
}
