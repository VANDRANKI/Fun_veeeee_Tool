"use client";

import { motion } from "framer-motion";
import { PredictionResponse } from "@/types/emotion";
import OrigamiScene from "./OrigamiScene";
import EmotionBars from "./EmotionBars";
import VibeCard from "./VibeCard";
import ExplanationSnippet from "./ExplanationSnippet";

interface Props {
  result: PredictionResponse;
  onReset: () => void;
}

export default function ResultPanel({ result, onReset }: Props) {
  const { prediction, ui_mapping, explanation } = result;
  const { palette, origami_animal, vibe } = ui_mapping;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-5xl mx-auto"
    >
      {/* Top: emotion label + processing time */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <p className="text-white/30 text-sm font-display mb-2">Your vibe is</p>
        <h1
          className="font-display font-extrabold text-5xl sm:text-6xl capitalize"
          style={{ color: palette.primary, textShadow: `0 0 40px ${palette.glow}` }}
        >
          {prediction.top_emotion}
        </h1>
        <p className="text-white/20 text-xs font-display mt-2">
          {result.meta.processing_ms}ms · {result.model.name}
        </p>
      </motion.div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Left: Origami scene */}
        <div className="glass rounded-3xl p-6 border" style={{ borderColor: `${palette.primary}20` }}>
          <OrigamiScene
            emotion={prediction.top_emotion}
            animalName={origami_animal.name}
            animalDescription={origami_animal.description}
            palette={palette}
          />
        </div>

        {/* Right: Charts + cards */}
        <div className="space-y-4">
          <div className="glass rounded-3xl p-6 border border-white/5">
            <EmotionBars
              probabilities={prediction.probabilities}
              topEmotion={prediction.top_emotion}
            />
          </div>

          <VibeCard vibe={vibe} palette={palette} confidence={prediction.confidence} />
          <ExplanationSnippet reasoning={explanation.reasoning} tokens={explanation.important_tokens} palette={palette} />
        </div>
      </div>

      {/* Input summary */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-6 glass rounded-2xl px-5 py-3 border border-white/5"
      >
        <p className="text-white/25 text-xs font-display mb-1">Your text</p>
        <p className="text-white/60 text-sm font-display italic leading-relaxed line-clamp-3">
          &ldquo;{result.input.text}&rdquo;
        </p>
      </motion.div>

      {/* Reset */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center mt-8"
      >
        <button
          onClick={onReset}
          className="font-display text-sm text-white/40 hover:text-white/70 transition-colors underline underline-offset-4"
        >
          ← Try another mood
        </button>
      </motion.div>
    </motion.div>
  );
}
