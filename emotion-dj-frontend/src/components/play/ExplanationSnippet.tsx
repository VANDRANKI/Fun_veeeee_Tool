"use client";

import { motion } from "framer-motion";
import { ImportantToken } from "@/types/emotion";

interface Props {
  reasoning: string;
  tokens: ImportantToken[];
  palette: { primary: string };
}

export default function ExplanationSnippet({ reasoning, tokens, palette }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.65, duration: 0.5 }}
      className="glass rounded-2xl p-5 border border-white/5 space-y-4"
    >
      <p className="font-display text-xs text-white/30 uppercase tracking-widest">Why this emotion?</p>

      <p className="text-white/70 text-sm font-display leading-relaxed">{reasoning}</p>

      {tokens.length > 0 && (
        <div>
          <p className="text-white/25 text-xs font-display mb-2">Key signals detected:</p>
          <div className="flex flex-wrap gap-2">
            {tokens.map((t, i) => (
              <motion.span
                key={t.token}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.08 }}
                className="px-2.5 py-1 rounded-lg text-xs font-display font-medium"
                style={{
                  background: `${palette.primary}15`,
                  color: palette.primary,
                  border: `1px solid ${palette.primary}30`,
                  opacity: 0.5 + t.weight * 0.5,
                }}
              >
                {t.token}
              </motion.span>
            ))}
          </div>
        </div>
      )}

      <p className="text-white/15 text-xs font-display italic">
        Powered by DistilRoBERTa · trained on 6 emotion datasets
      </p>
    </motion.div>
  );
}
