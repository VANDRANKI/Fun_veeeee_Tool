"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    number: "01",
    title: "Type how you feel",
    description: "One sentence, a full rant, or a sneaky haiku. The origami fox will read it all without judgment.",
    color: "#FFE066",
  },
  {
    number: "02",
    title: "The AI reads your vibe",
    description: "DistilRoBERTa: a transformer trained on 6 emotion datasets, classifies your text across 7 emotions in milliseconds.",
    color: "#9B59B6",
  },
  {
    number: "03",
    title: "The origami zoo reacts",
    description: "Your emotion summons a creature, a color world, and a music vibe, all uniquely yours.",
    color: "#00FFFF",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-display text-xs text-white/30 uppercase tracking-widest mb-3">How it works</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white">
            Three steps.<br />
            <span className="text-white/40">Zero complexity.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glass rounded-2xl p-7 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors"
            >
              <span className="font-display text-xs font-bold text-white/20 tracking-widest mb-4 block">
                {step.number}
              </span>

              <h3 className="font-display font-bold text-xl text-white mb-3">{step.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed">{step.description}</p>

              {/* Bottom color accent line */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 rounded-b-2xl"
                style={{ background: step.color }}
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.4, duration: 0.8, ease: "easeOut" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
