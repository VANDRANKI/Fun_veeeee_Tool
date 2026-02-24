"use client";

import { motion } from "framer-motion";

export default function OrigamiRabbit({ size = 220 }: { size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ y: [0, -16, 0] }}
      transition={{ duration: 0.8, repeat: Infinity, ease: "easeOut", repeatType: "mirror" }}
    >
      {/* Left ear */}
      <motion.g
        style={{ transformOrigin: "80px 80px" }}
        animate={{ rotate: [-6, 6, -6] }}
        transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <polygon points="68,80 78,15 92,80" fill="#00FFFF" stroke="#FF00FF" strokeWidth="1" />
        <polygon points="71,78 78,25 89,78" fill="#0d0020" stroke="none" opacity="0.5" />
      </motion.g>

      {/* Right ear */}
      <motion.g
        style={{ transformOrigin: "120px 80px" }}
        animate={{ rotate: [6, -6, 6] }}
        transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <polygon points="132,80 122,15 108,80" fill="#FF00FF" stroke="#00FFFF" strokeWidth="1" />
        <polygon points="129,78 122,25 111,78" fill="#0d0020" stroke="none" opacity="0.5" />
      </motion.g>

      {/* Body */}
      <polygon points="50,185 150,185 162,140 100,118 38,140" fill="#00FFFF" stroke="#FF00FF" strokeWidth="1" />
      <polygon points="50,185 150,185 162,140 100,158" fill="#0099CC" stroke="none" opacity="0.5" />

      {/* Belly */}
      <polygon points="72,182 128,182 136,152 100,142 64,152" fill="white" stroke="#00FFFF" strokeWidth="0.5" opacity="0.9" />

      {/* Head */}
      <polygon points="62,118 138,118 142,85 100,70 58,85" fill="#00FFFF" stroke="#FF00FF" strokeWidth="1" />
      <polygon points="62,118 138,118 142,85 100,96" fill="#0099CC" stroke="none" opacity="0.5" />

      {/* Eyes — massive surprised */}
      <circle cx="80" cy="96" r="14" fill="white" />
      <circle cx="80" cy="96" r="8" fill="#FF00FF" />
      <circle cx="80" cy="96" r="4" fill="#0d0020" />
      <circle cx="77" cy="93" r="2.5" fill="white" opacity="0.9" />
      <circle cx="120" cy="96" r="14" fill="white" />
      <circle cx="120" cy="96" r="8" fill="#00FFFF" />
      <circle cx="120" cy="96" r="4" fill="#0d0020" />
      <circle cx="117" cy="93" r="2.5" fill="white" opacity="0.9" />

      {/* Nose */}
      <polygon points="97,109 103,109 100,114" fill="#FF00FF" />

      {/* Mouth — wide O of surprise */}
      <motion.ellipse
        cx="100" cy="116" rx="8" ry="5"
        fill="#0d0020"
        stroke="#FF00FF"
        strokeWidth="1"
        animate={{ rx: [8, 10, 8], ry: [5, 7, 5] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Whiskers */}
      <line x1="83" y1="109" x2="55" y2="103" stroke="white" strokeWidth="0.9" opacity="0.7" />
      <line x1="83" y1="112" x2="55" y2="112" stroke="white" strokeWidth="0.9" opacity="0.7" />
      <line x1="117" y1="109" x2="145" y2="103" stroke="white" strokeWidth="0.9" opacity="0.7" />
      <line x1="117" y1="112" x2="145" y2="112" stroke="white" strokeWidth="0.9" opacity="0.7" />

      {/* Fluffy tail */}
      <circle cx="155" cy="168" r="14" fill="#FF00FF" opacity="0.8" />
      <circle cx="155" cy="168" r="9" fill="white" opacity="0.9" />

      {/* Paws */}
      <polygon points="60,185 48,185 42,198 66,198" fill="#00FFFF" stroke="#FF00FF" strokeWidth="1" />
      <polygon points="140,185 152,185 158,198 134,198" fill="#FF00FF" stroke="#00FFFF" strokeWidth="1" />

      {/* Sparkles from surprise */}
      {[{x:168,y:72,d:0},{x:32,y:60,d:0.3},{x:175,y:120,d:0.6}].map(({x,y,d},i) => (
        <motion.g key={i} style={{ transformOrigin: `${x}px ${y}px` }} animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: d }}>
          <line x1={x} y1={y-8} x2={x} y2={y+8} stroke="#FFD700" strokeWidth="2" />
          <line x1={x-8} y1={y} x2={x+8} y2={y} stroke="#FFD700" strokeWidth="2" />
          <line x1={x-6} y1={y-6} x2={x+6} y2={y+6} stroke="#FFD700" strokeWidth="1.5" />
          <line x1={x+6} y1={y-6} x2={x-6} y2={y+6} stroke="#FFD700" strokeWidth="1.5" />
        </motion.g>
      ))}
    </motion.svg>
  );
}
