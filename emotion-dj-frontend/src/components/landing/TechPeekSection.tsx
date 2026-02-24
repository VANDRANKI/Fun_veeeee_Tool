"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const TECH_STACK = [
  { name: "Next.js 14",         role: "Frontend framework",      color: "#ffffff" },
  { name: "FastAPI",            role: "Model serving backend",   color: "#009688" },
  { name: "DistilRoBERTa",      role: "Emotion classification",  color: "#FFE066" },
  { name: "GoEmotions",         role: "58k training samples",    color: "#9B59B6" },
  { name: "Framer Motion",      role: "Animations",              color: "#00FFFF" },
  { name: "HuggingFace",        role: "Model hub",               color: "#FF6B35" },
];

export default function TechPeekSection() {
  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-display text-xs text-white/30 uppercase tracking-widest mb-3">Under the hood</p>
            <h2 className="font-display font-bold text-4xl text-white mb-5">
              Real Model Logic.<br />
              <span className="text-white/40">Not magic.</span>
            </h2>
            <p className="text-white/45 text-base font-display leading-relaxed mb-6">
              Vibe Canvas runs a genuine transformer model fine-tuned on multiple emotion datasets. The origami zoo is pretty, but the predictions are real.
            </p>
            <Link href="/behind-the-scenes">
              <span className="inline-flex items-center gap-2 font-display text-sm font-medium text-white/50 hover:text-white transition-colors">
                Explore the data science →
              </span>
            </Link>
          </motion.div>

          {/* Right: tech chips */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            {TECH_STACK.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="glass rounded-xl px-4 py-3 border border-white/5"
              >
                <p className="font-display font-semibold text-sm" style={{ color: t.color }}>{t.name}</p>
                <p className="text-white/30 text-xs font-display mt-0.5">{t.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
