"use client";

import { motion } from "framer-motion";

const ORBS = [
  { left: "12%",  top: "18%", size: 340, duration: 10, delay: 0,   x: [0,  35, -25,  0], y: [0, -30,  20,  0] },
  { left: "68%",  top: "55%", size: 280, duration: 13, delay: 1.5, x: [0, -28,  18,  0], y: [0,  22, -35,  0] },
  { left: "45%",  top: "75%", size: 220, duration: 11, delay: 0.7, x: [0,  20, -30,  0], y: [0, -18,  28,  0] },
];

export default function PlayBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {ORBS.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: orb.left,
            top: orb.top,
            width: orb.size,
            height: orb.size,
            background: "var(--e-glow)",
            filter: "blur(90px)",
            transform: "translate(-50%, -50%)",
          }}
          animate={{ x: orb.x, y: orb.y, scale: [1, 1.12, 0.9, 1] }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
