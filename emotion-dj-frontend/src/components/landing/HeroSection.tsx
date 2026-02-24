"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { OrigamiCrane, OrigamiWhale, OrigamiDragon, OrigamiFox, OrigamiRabbit } from "@/components/origami";

const PREVIEWS = [
  { label: "joy",      Animal: OrigamiCrane,  color: "#FFE066", bg: "rgba(255,224,102,0.08)"  },
  { label: "surprise", Animal: OrigamiRabbit, color: "#00FFFF", bg: "rgba(0,255,255,0.08)"    },
  { label: "sadness",  Animal: OrigamiWhale,  color: "#5B9CBD", bg: "rgba(91,156,189,0.08)"   },
  { label: "anger",    Animal: OrigamiDragon, color: "#FF4500", bg: "rgba(255,69,0,0.08)"     },
  { label: "fear",     Animal: OrigamiFox,    color: "#9B59B6", bg: "rgba(155,89,182,0.08)"   },
];

export default function HeroSection() {
  const [idx, setIdx] = useState(0);
  const current = PREVIEWS[idx];

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % PREVIEWS.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-12 relative overflow-hidden">
      {/* Background ambient glow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.label}
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          style={{ background: `radial-gradient(ellipse 60% 50% at 50% 50%, ${current.bg} 0%, transparent 70%)` }}
        />
      </AnimatePresence>

      <div className="max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 text-xs font-display font-semibold px-3 py-1.5 rounded-full border mb-6"
            style={{ borderColor: `${current.color}40`, color: current.color, background: `${current.color}10` }}
            animate={{ borderColor: `${current.color}40`, color: current.color, background: `${current.color}10` }}
            transition={{ duration: 1 }}
          >
            ◈ Vibe Canvas · AI Emotion Lab
          </motion.div>

          <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-5">
            Type how<br />
            you <AnimatePresence mode="wait">
              <motion.span
                key={current.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                style={{ color: current.color }}
              >
                feel.
              </motion.span>
            </AnimatePresence>
          </h1>

          <p className="text-white/50 text-lg font-display leading-relaxed mb-8 max-w-md">
            Watch an origami turn your words into color, creatures, and emotion music vibes, powered by a real emotion AI model.
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <Link href="/play">
              <motion.button
                className="px-8 py-4 rounded-2xl font-display font-bold text-lg text-void transition-all"
                style={{ background: current.color }}
                animate={{ background: current.color }}
                transition={{ duration: 1 }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Try Vibe Canvas ↗
              </motion.button>
            </Link>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 mt-10">
            {[
              { val: "7",    label: "emotions" },
              { val: "58k",  label: "training samples" },
              { val: "~66%", label: "model accuracy" },
            ].map(({ val, label }) => (
              <div key={label}>
                <p className="font-display font-bold text-xl" style={{ color: current.color }}>{val}</p>
                <p className="text-white/30 text-xs font-display">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: live origami preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center relative"
        >
          <div
            className="glass rounded-3xl p-8 border relative overflow-hidden"
            style={{ borderColor: `${current.color}25` }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.label}
                initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.7, rotate: 10 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <current.Animal size={200} />
              </motion.div>
            </AnimatePresence>

            {/* Emotion label */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`label-${current.label}`}
                className="text-center font-display font-bold mt-4 capitalize text-lg"
                style={{ color: current.color }}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {current.label}
              </motion.p>
            </AnimatePresence>

            {/* Indicator dots */}
            <div className="flex justify-center gap-1.5 mt-3">
              {PREVIEWS.map((_, i) => (
                <button key={i} onClick={() => setIdx(i)}
                  className="w-1.5 h-1.5 rounded-full transition-all"
                  style={{ background: i === idx ? current.color : "rgba(255,255,255,0.15)" }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
