"use client";

import { motion } from "framer-motion";
import { EmotionProbability } from "@/types/emotion";

const EMOTION_COLORS: Record<string, string> = {
  joy:     "#FFE066",
  sadness: "#5B9CBD",
  anger:   "#FF4500",
  fear:    "#9B59B6",
  disgust: "#82C271",
  neutral: "#BEBEBE",
  surprise:"#00FFFF",
};

interface Props {
  probabilities: EmotionProbability[];
  topEmotion: string;
}

export default function EmotionBars({ probabilities, topEmotion }: Props) {
  const sorted = [...probabilities].sort((a, b) => b.prob - a.prob);

  return (
    <div className="space-y-3">
      <p className="font-display text-sm text-white/40 uppercase tracking-widest mb-4">Emotion Distribution</p>
      {sorted.map(({ emotion, prob }, i) => {
        const color = EMOTION_COLORS[emotion] || "#fff";
        const isTop = emotion === topEmotion;
        const pct = Math.round(prob * 100);

        return (
          <motion.div
            key={emotion}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.07, duration: 0.4 }}
            className="flex items-center gap-3"
          >
            <span className={`font-display text-sm w-16 capitalize ${isTop ? "font-semibold" : "text-white/50"}`} style={isTop ? { color } : {}}>
              {emotion}
            </span>

            <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: isTop ? color : `${color}60` }}
                initial={{ width: 0 }}
                animate={{ width: `${pct}%` }}
                transition={{ delay: i * 0.07 + 0.2, duration: 0.7, ease: "easeOut" }}
              />
            </div>

            <span className={`font-display text-sm tabular-nums w-10 text-right ${isTop ? "font-semibold" : "text-white/30"}`} style={isTop ? { color } : {}}>
              {pct}%
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}
