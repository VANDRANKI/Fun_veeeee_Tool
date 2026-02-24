"use client";

import { motion } from "framer-motion";

export default function OrigamiWhale({ size = 220 }: { size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ y: [0, -8, 0], rotate: [0, 2, -2, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Main body */}
      <polygon points="20,90 80,55 160,65 185,100 160,130 80,140 20,110" fill="#1A3A5C" stroke="#2E6B8A" strokeWidth="1" />

      {/* Belly lighter face */}
      <polygon points="20,90 160,65 185,100 160,130 20,110" fill="#2E6B8A" stroke="none" opacity="0.6" />

      {/* Top face (dark) */}
      <polygon points="20,90 80,55 160,65 160,95 20,100" fill="#0d2438" stroke="none" />

      {/* Tail base */}
      <polygon points="20,90 20,110 0,100" fill="#2E6B8A" stroke="#5B9CBD" strokeWidth="1" />

      {/* Tail fluke top */}
      <motion.polygon
        points="0,100 -20,72 12,95"
        fill="#5B9CBD"
        stroke="#2E6B8A"
        strokeWidth="1"
        animate={{ rotate: [-5, 10, -5] }}
        style={{ transformOrigin: "0px 100px" }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Tail fluke bottom */}
      <motion.polygon
        points="0,100 -20,128 12,105"
        fill="#5B9CBD"
        stroke="#2E6B8A"
        strokeWidth="1"
        animate={{ rotate: [5, -10, 5] }}
        style={{ transformOrigin: "0px 100px" }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Pectoral fin */}
      <polygon points="110,95 130,130 90,128" fill="#1A3A5C" stroke="#2E6B8A" strokeWidth="1" />

      {/* Eye */}
      <circle cx="158" cy="88" r="5" fill="#5B9CBD" />
      <circle cx="158" cy="88" r="2.5" fill="#041a2e" />
      <circle cx="157" cy="87" r="1" fill="white" opacity="0.8" />

      {/* Blowhole spout */}
      <motion.line
        x1="120" y1="58" x2="120" y2="35"
        stroke="#5B9CBD" strokeWidth="2" strokeLinecap="round"
        animate={{ scaleY: [0, 1, 0] }}
        style={{ transformOrigin: "120px 58px" }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: 2 }}
      />
      <motion.ellipse
        cx="120" cy="35" rx="6" ry="3"
        fill="none" stroke="#5B9CBD" strokeWidth="1.5"
        animate={{ scaleY: [0, 1, 0], opacity: [0, 0.8, 0] }}
        style={{ transformOrigin: "120px 35px" }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: 2 }}
      />

      {/* Fold lines */}
      <line x1="80" y1="55" x2="80" y2="140" stroke="#5B9CBD" strokeWidth="0.5" strokeDasharray="4,5" opacity="0.3" />
    </motion.svg>
  );
}
