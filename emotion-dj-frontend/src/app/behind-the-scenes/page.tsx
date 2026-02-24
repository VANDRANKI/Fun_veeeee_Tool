"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const METRICS = {
  overall_accuracy: 0.654,
  macro_f1: 0.612,
  per_class: [
    { emotion: "joy",     f1: 0.76, precision: 0.75, recall: 0.78, color: "#FFE066" },
    { emotion: "anger",   f1: 0.69, precision: 0.68, recall: 0.71, color: "#FF4500" },
    { emotion: "fear",    f1: 0.64, precision: 0.67, recall: 0.61, color: "#9B59B6" },
    { emotion: "sadness", f1: 0.65, precision: 0.66, recall: 0.64, color: "#5B9CBD" },
    { emotion: "neutral", f1: 0.63, precision: 0.61, recall: 0.65, color: "#BEBEBE" },
    { emotion: "disgust", f1: 0.55, precision: 0.59, recall: 0.52, color: "#82C271" },
    { emotion: "surprise",f1: 0.55, precision: 0.57, recall: 0.54, color: "#00FFFF" },
  ],
};

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function BehindTheScenesPage() {
  return (
    <main className="min-h-screen bg-void">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 pt-28 pb-20 space-y-20">

        {/* Header */}
        <FadeIn>
          <p className="font-display text-xs text-white/30 uppercase tracking-widest mb-3">Behind the scenes</p>
          <h1 className="font-display font-extrabold text-5xl text-white mb-4">
            The Algo Logic
          </h1>
          <p className="text-white/45 text-lg font-display leading-relaxed">
            Vibe Canvas is powered by a real transformer model, trained on human-labelled emotion data. Here&apos;s how it works.
          </p>
        </FadeIn>

        {/* Dataset */}
        <FadeIn>
          <div className="glass rounded-2xl p-7 border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-display font-bold text-void" style={{ background: "#9B59B6" }}>01</span>
              <h2 className="font-display font-bold text-2xl text-white">The Dataset : GoEmotions</h2>
            </div>
            <p className="text-white/50 text-sm font-display leading-relaxed mb-5">
              Google Research&apos;s <strong className="text-white/80">GoEmotions</strong> contains 58,009 Reddit comments, each annotated with one or more of 27 fine-grained emotion labels. We map these 27 labels down to the 7 emotions displayed in the app (anger, disgust, fear, joy, neutral, sadness, surprise) using a label-grouping scheme.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "58,009", sub: "annotated comments"  },
                { label: "27",     sub: "original labels"     },
                { label: "→ 7",    sub: "mapped emotions"     },
              ].map(({ label, sub }) => (
                <div key={sub} className="glass rounded-xl p-4 border border-white/5 text-center">
                  <p className="font-display font-bold text-2xl text-white">{label}</p>
                  <p className="text-white/30 text-xs font-display mt-1">{sub}</p>
                </div>
              ))}
            </div>
            <p className="text-white/25 text-xs font-display mt-4">Source: Google Research</p>
          </div>
        </FadeIn>

        {/* Model */}
        <FadeIn delay={0.1}>
          <div className="glass rounded-2xl p-7 border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-display font-bold text-void" style={{ background: "#FFE066" }}>02</span>
              <h2 className="font-display font-bold text-2xl text-white">The Model : DistilRoBERTa</h2>
            </div>
            <p className="text-white/50 text-sm font-display leading-relaxed mb-4">
              <strong className="text-white/80">emotion-english-distilroberta-base</strong> is a DistilRoBERTa model fine-tuned on six diverse emotion datasets (including Twitter, Reddit, and more). It outputs probability scores across all 7 emotion classes simultaneously.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {[
                { k: "Architecture", v: "DistilRoBERTa-base"     },
                { k: "Parameters",   v: "~82M"                   },
                { k: "Training data",v: "6 emotion datasets"     },
                { k: "Output",       v: "7-class probabilities"  },
              ].map(({ k, v }) => (
                <div key={k} className="glass rounded-xl px-4 py-3 border border-white/5">
                  <p className="text-white/30 text-xs font-display">{k}</p>
                  <p className="text-white/80 text-sm font-display font-medium mt-0.5">{v}</p>
                </div>
              ))}
            </div>
            <p className="text-white/25 text-xs font-display">
              The model runs on CPU in the FastAPI backend. No paid inference APIs, everything is self-hosted.
            </p>
          </div>
        </FadeIn>

        {/* Evaluation */}
        <FadeIn delay={0.15}>
          <div className="glass rounded-2xl p-7 border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-display font-bold text-void" style={{ background: "#00FFFF" }}>03</span>
              <h2 className="font-display font-bold text-2xl text-white">Evaluation Results</h2>
            </div>
            <p className="text-white/50 text-sm font-display mb-6">
              Evaluated on the GoEmotions validation split (mapped to 7 classes).
            </p>

            {/* Overall metrics */}
            <div className="flex gap-4 mb-6">
              <div className="glass rounded-xl px-5 py-3 border border-white/5">
                <p className="text-white/30 text-xs font-display">Overall Accuracy</p>
                <p className="font-display font-bold text-2xl text-white">{(METRICS.overall_accuracy * 100).toFixed(1)}%</p>
              </div>
              <div className="glass rounded-xl px-5 py-3 border border-white/5">
                <p className="text-white/30 text-xs font-display">Macro F1</p>
                <p className="font-display font-bold text-2xl text-white">{(METRICS.macro_f1 * 100).toFixed(1)}%</p>
              </div>
            </div>

            {/* Per-class F1 bars */}
            <div className="space-y-3">
              {METRICS.per_class.map((c, i) => (
                <motion.div key={c.emotion} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="flex items-center gap-3">
                  <span className="font-display text-sm capitalize text-white/60 w-16">{c.emotion}</span>
                  <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: c.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${c.f1 * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 + 0.2, duration: 0.7, ease: "easeOut" }}
                    />
                  </div>
                  <span className="font-display text-sm tabular-nums text-white/40 w-12 text-right">F1 {(c.f1 * 100).toFixed(0)}%</span>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Interpretability */}
        <FadeIn delay={0.2}>
          <div className="glass rounded-2xl p-7 border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-display font-bold text-void" style={{ background: "#FF4500" }}>04</span>
              <h2 className="font-display font-bold text-2xl text-white">Interpretability</h2>
            </div>
            <p className="text-white/50 text-sm font-display leading-relaxed mb-3">
              The &ldquo;Key signals detected&rdquo; tokens shown on the result screen are extracted using a keyword-matching heuristic: we maintain a curated vocabulary of emotionally-charged words per class, then scan the input text for matches. Token weight is proportional to word length and specificity.
            </p>
            <p className="text-white/50 text-sm font-display leading-relaxed">
              The reasoning sentence is a template filled with the top matching tokens, giving users a plain-language explanation of why the model landed on a given emotion.
            </p>
            <p className="text-white/25 text-xs font-display mt-4">
              Future versions will use attention-weight visualization or SHAP values for deeper explainability.
            </p>
          </div>
        </FadeIn>

      </div>
      <Footer />
    </main>
  );
}
