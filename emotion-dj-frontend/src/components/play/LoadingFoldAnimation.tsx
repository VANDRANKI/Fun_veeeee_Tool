"use client";

import { motion } from "framer-motion";

const MESSAGES = [
  "Consulting the origami fox…",
  "Unfolding your emotional layers…",
  "The whale is processing…",
  "Running your vibe through the model…",
  "Paper is being folded…",
];

export default function LoadingFoldAnimation() {
  const msg = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center gap-8 py-20"
    >
      {/* Folding paper animation */}
      <div className="relative w-32 h-32">
        {/* Base square */}
        <motion.div
          className="absolute inset-0 rounded-sm"
          style={{ background: "var(--e-primary)", opacity: 0.15 }}
          animate={{ rotate: [0, 45, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Folding triangles */}
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: 0,
              height: 0,
              borderLeft: "32px solid transparent",
              borderRight: "32px solid transparent",
              borderBottom: `56px solid var(--e-primary)`,
              top: "50%",
              left: "50%",
              opacity: 0.7,
              transformOrigin: "0 56px",
            }}
            animate={{
              rotate: [i * 90, i * 90 + 360],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.25,
            }}
          />
        ))}

        {/* Center glow */}
        <motion.div
          className="absolute inset-0 m-auto rounded-full"
          style={{
            width: 24,
            height: 24,
            background: "var(--e-primary)",
            boxShadow: "0 0 20px var(--e-glow)",
          }}
          animate={{ scale: [0.8, 1.3, 0.8] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.p
        className="font-display text-white/50 text-base"
        animate={{ opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        {msg}
      </motion.p>

      {/* Progress dots */}
      <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "var(--e-primary)" }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </div>
    </motion.div>
  );
}
