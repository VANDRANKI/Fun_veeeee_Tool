"use client";

import { motion } from "framer-motion";

export default function OrigamiToad({ size = 220 }: { size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ y: [0, -3, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Body */}
      <polygon points="30,160 170,160 180,110 155,80 100,65 45,80 20,110" fill="#4A6741" stroke="#82C271" strokeWidth="1" />
      <polygon points="30,160 170,160 180,110 100,115" fill="#5A7A50" stroke="none" opacity="0.5" />

      {/* Belly */}
      <polygon points="60,155 140,155 150,120 100,108 50,120" fill="#B5CC8E" stroke="#82C271" strokeWidth="0.5" opacity="0.9" />

      {/* Head */}
      <polygon points="55,80 145,80 155,55 100,42 45,55" fill="#4A6741" stroke="#82C271" strokeWidth="1" />
      <polygon points="55,80 145,80 155,55 100,60" fill="#5A7A50" stroke="none" opacity="0.5" />

      {/* Eye bumps */}
      <ellipse cx="72" cy="62" rx="18" ry="14" fill="#3D5935" stroke="#82C271" strokeWidth="1" />
      <ellipse cx="128" cy="62" rx="18" ry="14" fill="#3D5935" stroke="#82C271" strokeWidth="1" />

      {/* Eyes */}
      <circle cx="72" cy="60" r="10" fill="#82C271" />
      <circle cx="72" cy="60" r="5.5" fill="#050d04" />
      <circle cx="70" cy="58" r="2" fill="white" opacity="0.8" />
      <circle cx="128" cy="60" r="10" fill="#82C271" />
      <circle cx="128" cy="60" r="5.5" fill="#050d04" />
      <circle cx="126" cy="58" r="2" fill="white" opacity="0.8" />

      {/* Grumpy brow left */}
      <line x1="60" y1="50" x2="84" y2="46" stroke="#3D5935" strokeWidth="3" strokeLinecap="round" />
      {/* Grumpy brow right */}
      <line x1="116" y1="46" x2="140" y2="50" stroke="#3D5935" strokeWidth="3" strokeLinecap="round" />

      {/* Mouth — deep frown */}
      <path d="M 72,82 Q 100,72 128,82" fill="none" stroke="#3D5935" strokeWidth="3" strokeLinecap="round" />

      {/* Nostril dots */}
      <circle cx="94" cy="70" r="2.5" fill="#3D5935" />
      <circle cx="106" cy="70" r="2.5" fill="#3D5935" />

      {/* Warts */}
      {[[65,110],[85,98],[115,98],[135,110],[75,140],[125,140]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill="#3D5935" opacity="0.6" />
      ))}

      {/* Front legs */}
      <polygon points="30,160 18,185 55,175 55,155" fill="#4A6741" stroke="#82C271" strokeWidth="1" />
      <polygon points="170,160 182,185 145,175 145,155" fill="#4A6741" stroke="#82C271" strokeWidth="1" />

      {/* Back feet webbing */}
      <polygon points="30,160 5,155 20,175 30,165" fill="#5A7A50" stroke="#82C271" strokeWidth="0.5" />
      <polygon points="170,160 195,155 180,175 170,165" fill="#5A7A50" stroke="#82C271" strokeWidth="0.5" />

      {/* Annoyed expression indicator — occasional twitch */}
      <motion.g
        animate={{ rotate: [-5, 5, -5], y: [0, -2, 0] }}
        style={{ transformOrigin: "100px 80px" }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <polygon points="90,44 100,36 110,44 100,42" fill="#82C271" opacity="0.7" />
      </motion.g>
    </motion.svg>
  );
}
