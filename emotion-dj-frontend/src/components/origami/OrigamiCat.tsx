"use client";

import { motion } from "framer-motion";

export default function OrigamiCat({ size = 220 }: { size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Body (sitting loaf) */}
      <polygon points="45,185 155,185 165,135 100,115 35,135" fill="#808080" stroke="#BEBEBE" strokeWidth="1" />
      <polygon points="45,185 155,185 165,135 100,150" fill="#9E9E9E" stroke="none" opacity="0.5" />

      {/* Chest patch */}
      <polygon points="75,180 125,180 130,148 100,138 70,148" fill="#D4C5B0" stroke="#BEBEBE" strokeWidth="0.5" opacity="0.8" />

      {/* Paws */}
      <polygon points="55,185 45,185 38,198 62,198" fill="#808080" stroke="#BEBEBE" strokeWidth="1" />
      <polygon points="145,185 155,185 162,198 138,198" fill="#808080" stroke="#BEBEBE" strokeWidth="1" />

      {/* Neck */}
      <polygon points="84,115 116,115 118,95 82,95" fill="#9E9E9E" stroke="#BEBEBE" strokeWidth="1" />

      {/* Head */}
      <polygon points="65,95 135,95 140,65 100,52 60,65" fill="#808080" stroke="#BEBEBE" strokeWidth="1" />
      <polygon points="65,95 135,95 140,65 100,72" fill="#9E9E9E" stroke="none" opacity="0.5" />

      {/* Left ear */}
      <motion.polygon
        points="68,65 58,30 90,62"
        fill="#BEBEBE"
        stroke="#808080"
        strokeWidth="1"
        animate={{ rotate: [-4, 4, -4] }}
        style={{ transformOrigin: "68px 65px" }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <polygon points="70,62 62,35 88,60" fill="#D4C5B0" opacity="0.5" />

      {/* Right ear */}
      <motion.polygon
        points="132,65 142,30 110,62"
        fill="#BEBEBE"
        stroke="#808080"
        strokeWidth="1"
        animate={{ rotate: [4, -4, 4] }}
        style={{ transformOrigin: "132px 65px" }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      />
      <polygon points="130,62 138,35 112,60" fill="#D4C5B0" opacity="0.5" />

      {/* Face — calm neutral */}
      {/* Eyes (half closed) */}
      <ellipse cx="83" cy="74" rx="9" ry="7" fill="#D4C5B0" />
      <ellipse cx="83" cy="76" rx="9" ry="4" fill="#0a0a0a" />
      <ellipse cx="117" cy="74" rx="9" ry="7" fill="#D4C5B0" />
      <ellipse cx="117" cy="76" rx="9" ry="4" fill="#0a0a0a" />
      <circle cx="81" cy="73" r="1.5" fill="white" opacity="0.7" />
      <circle cx="115" cy="73" r="1.5" fill="white" opacity="0.7" />

      {/* Nose */}
      <polygon points="97,84 103,84 100,88" fill="#D4C5B0" />

      {/* Mouth — tiny neutral */}
      <line x1="100" y1="88" x2="96" y2="92" stroke="#BEBEBE" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="100" y1="88" x2="104" y2="92" stroke="#BEBEBE" strokeWidth="1.2" strokeLinecap="round" />

      {/* Whiskers */}
      <line x1="83" y1="84" x2="55" y2="78" stroke="#D4C5B0" strokeWidth="0.8" opacity="0.6" />
      <line x1="83" y1="87" x2="55" y2="87" stroke="#D4C5B0" strokeWidth="0.8" opacity="0.6" />
      <line x1="83" y1="90" x2="55" y2="96" stroke="#D4C5B0" strokeWidth="0.8" opacity="0.6" />
      <line x1="117" y1="84" x2="145" y2="78" stroke="#D4C5B0" strokeWidth="0.8" opacity="0.6" />
      <line x1="117" y1="87" x2="145" y2="87" stroke="#D4C5B0" strokeWidth="0.8" opacity="0.6" />
      <line x1="117" y1="90" x2="145" y2="96" stroke="#D4C5B0" strokeWidth="0.8" opacity="0.6" />

      {/* Tail sweeping to side */}
      <motion.path
        d="M 155,165 C 175,155 190,140 185,120 C 180,100 165,95 155,100"
        fill="none"
        stroke="#BEBEBE"
        strokeWidth="12"
        strokeLinecap="round"
        animate={{ d: ["M 155,165 C 175,155 190,140 185,120 C 180,100 165,95 155,100", "M 155,165 C 180,165 200,150 195,130 C 190,110 170,105 155,100", "M 155,165 C 175,155 190,140 185,120 C 180,100 165,95 155,100"] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <path d="M 155,165 C 175,155 190,140 185,120 C 180,100 165,95 155,100" fill="none" stroke="#808080" strokeWidth="6" strokeLinecap="round" />

      {/* Stripes */}
      <line x1="100" y1="52" x2="95" y2="40" stroke="#9E9E9E" strokeWidth="1.5" strokeDasharray="2,2" opacity="0.5" />
    </motion.svg>
  );
}
